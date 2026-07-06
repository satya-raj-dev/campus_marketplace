import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '../../utils/cn'
import { fadeUp, staggerContainer } from '../../utils/motion'
import { Container, MotionSection } from '../common'
import { useState, useEffect } from 'react';
import { getCategories } from '../../firebase/firestore';
import { resolveCategoryIcon } from '../../utils/categoryIcons'

type RemoteCategory = {
  name: string
  icon?: unknown
  iconClassName?: string
  surfaceClassName?: string
}

export function Categories() {
  const [categories, setCategories] = useState<RemoteCategory[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Define an async function inside useEffect to handle the promise
      const fetchCategories = async () => {
        try {
          setLoading(true);
          const data = await getCategories();
          setCategories(data as RemoteCategory[]);
        } catch (error) {
          console.error("Failed to fetch categories:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCategories();
    }, []); // Empty array ensures it runs automatically ONLY when page opens
  
    // 2. Conditional rendering based on loading state
    if (loading) {
      return <div>Loading categories...</div>;
    }
  return (
    <section className="py-8">
      <Container className="flex justify-center">
        <MotionSection className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-xl shadow-slate-200/60 backdrop-blur sm:p-8 ">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-ink">Explore by Category</h2>
              <p className="mt-1 text-sm text-muted">Find trusted campus talent faster.</p>
            </div>
            <Link
              to="/explore"
              className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-brand transition hover:bg-brand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              View all
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          
          <motion.div
            // className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8"
            className="inline-grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {categories.slice(0, 6).map((category) => {
              const Icon = resolveCategoryIcon(category.icon, category.name)

              return (
                <motion.article
                  key={category.name}
                  className="group rounded-2xl p-3 text-center transition duration-200 hover:-translate-y-1 hover:bg-slate-50 "
                  variants={fadeUp}
                >
                  <div
                    className={cn(
                      'mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition group-hover:scale-105',
                      category.surfaceClassName,
                    )}
                  >
                    <Icon className={cn('h-8 w-8',category.iconClassName )} aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-slate-700">{category.name}</h3>
                </motion.article>
              )
            })}
          </motion.div>
          
        </MotionSection>
      </Container>
    </section>
  )
}
