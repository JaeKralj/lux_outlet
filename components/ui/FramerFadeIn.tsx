'use client'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { ReactNode, useEffect } from 'react'

const FadeInOnScroll = ({ children }: { children: ReactNode }) => {
  // control
  const control = useAnimation()
  const [ref, inView] = useInView()
  // animate when in view
  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      animate={control}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: 'spring',
            bounce: 0.3,
            stiffness: 70,
          },
        },
      }}
      initial='hidden'
      aria-hidden='true'
    >
      {children}
    </motion.div>
  )
}

export default FadeInOnScroll
