import { motion, useReducedMotion } from 'framer-motion'
import { BadgeCheck, Sparkles, Star } from 'lucide-react'
import { images } from '../../assets'
import { heroStats } from '../../data/home'
import { fadeUp, slideLeft, staggerContainer } from '../../utils/motion'
import { AvatarStack, Button, Container } from '../common'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden py-10 sm:py-14 lg:py-20">
      <Container>
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              #1 Campus Skill Marketplace
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Learn.
              <br />
              Earn.
              <br />
              Grow.
              <br />
              <span className="text-brand">Together.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Buy and sell skills with fellow students. From academics to fitness,
              discover opportunities within your campus.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/explore" size="lg" showArrow>
                Explore Services
              </Button>
              <Button to="/become-seller" variant="secondary" size="lg">
                Become Seller
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {heroStats.map((stat) => {
                const Icon = stat.icon

                return (
                  <div key={stat.label} className="flex items-start gap-3">
                    <span className="mt-1 text-slate-400">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-2xl font-black text-brand">{stat.value}</span>
                      <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div className="relative" variants={slideLeft}>
            <div className="absolute -left-4 top-16 z-10 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-slate-200/80 backdrop-blur md:flex">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">Verified Students</p>
                  <p className="text-xs text-muted">College email checked</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-32 z-10 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-slate-200/80 backdrop-blur sm:flex">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Star className="h-5 w-5 fill-current" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">Top Rated</p>
                  <p className="text-xs text-muted">4.8 average rating</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-white/80 bg-white p-2 shadow-2xl shadow-slate-300/50">
              <img
                className="aspect-[4/3] w-full rounded-[1.55rem] object-cover"
                src={images.campusHero}
                alt="Students collaborating on SkillHub services"
              />
            </div>

            <div className="absolute bottom-5 left-1/2 z-10 w-[min(88%,24rem)] -translate-x-1/2 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-slate-200/90 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <AvatarStack />
                <div>
                  <p className="font-bold text-ink">Join 500+ students</p>
                  <p className="text-sm text-muted">growing together</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
