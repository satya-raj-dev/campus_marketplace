import { motion } from 'framer-motion'
import { Container } from '../components/common'
import { cn } from '../utils/cn'
import { fadeUp, staggerContainer } from '../utils/motion'
import { storeStats } from '../data/home'
import { useState, useEffect } from 'react';
import { getCategories } from '../firebase/firestore';
import { resolveCategoryIcon } from '../utils/categoryIcons'
import type { category } from '../data/types'
import { Link } from 'react-router'

export function CategoryPage() {
  const [categories, setCategories] = useState<category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define an async function inside useEffect to handle the promise
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategories();
        console.log(data)
        setCategories(data as category[]);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); // Empty array ensures it runs automatically ONLY when page opens

  if (loading) {
    return <div>Loading categories...</div>;
  }
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[2rem] bg-[#10091b] px-8 py-12 text-white shadow-2xl shadow-slate-300/50 sm:px-12 lg:px-16 lg:py-20"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(126,34,206,0.34),transparent_24rem),radial-gradient(circle_at_86%_72%,rgba(14,116,144,0.28),transparent_24rem),linear-gradient(135deg,rgba(15,8,30,0.96),rgba(15,23,42,0.98))]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_15rem] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-purple-300 sm:text-base">
                Explore Our Store
              </p>
              <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                What are you looking for today?
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/55 sm:text-2xl">
                Browse 20+ categories and discover thousands of services curated just
                for you.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {storeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/8 px-6 py-6 text-center shadow-xl shadow-black/10 backdrop-blur"
                >
                  <p className="text-3xl font-black text-white sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-base font-bold text-white/40 sm:text-lg">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => {
            const Icon = resolveCategoryIcon(category.icon, category.name)

            return (
              <motion.div
                key={category.name}
                variants={fadeUp}
              >
              <Link
                  to={`/services/${category.id}`}
                className={cn(
                  'group flex min-h-44 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-5 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
                )}
                aria-label={`Browse ${category.name}`}
              >
                <span
                  className={cn(
                    'flex h-20 w-20 items-center justify-center rounded-3xl transition group-hover:scale-105',
                    category.surfaceClassName,
                  )}
                >
                  
                  <Icon
                    className={cn('h-9 w-9 stroke-[2.4]', category.iconClassName)}
                    aria-hidden="true"
                  />
                  
                </span>
                <span className="mt-7 text-xl font-black text-slate-950">
                  {category.name}
                </span>
              </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
