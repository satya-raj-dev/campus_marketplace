import { motion, useReducedMotion } from 'framer-motion'
import { howItWorksSteps } from '../../data/home'
import { cn } from '../../utils/cn'
import { fadeUp, staggerContainer } from '../../utils/motion'
import { Container, SectionHeader } from '../common'

export function HowItWorks() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          align="center"
          title="How It Works"
          description="Simple steps to get started on SkillHub."
        />

        <motion.div
          className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <div className="absolute left-[12%] right-[12%] top-10 hidden border-t border-dashed border-slate-300 lg:block" />
          {howItWorksSteps.map((step) => {
            const Icon = step.icon

            return (
              <motion.article
                key={step.title}
                className="relative rounded-2xl bg-white/70 p-6 text-center transition hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
                variants={fadeUp}
              >
                <div
                  className={cn(
                    'mx-auto flex h-20 w-20 items-center justify-center rounded-full ring-8 ring-white',
                    step.surfaceClassName,
                  )}
                >
                  <Icon className={cn('h-9 w-9', step.iconClassName)} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
