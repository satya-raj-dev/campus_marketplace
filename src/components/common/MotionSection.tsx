import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

type MotionSectionProps = {
  children: ReactNode
  className?: string
  variants?: Variants
}

export function MotionSection({
  children,
  className,
  variants = fadeUp,
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
