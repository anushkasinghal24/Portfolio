import { motion } from 'framer-motion'

import { SectionWrapper } from '../../../layout/SectionWrapper'
import { useInViewReveal } from '../../../shared/hooks/useInViewReveal'
import { revealContainer, revealItem } from '../../../shared/motion/variants'
import { aboutProfileContent } from '../data'

export function AboutProfileSection() {
  const { ref, inView } = useInViewReveal({ threshold: 0.2, once: true })

  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="About Me"
      description="I build reliable full stack products with clean interfaces and practical architecture."
      className="about-profile"
    >
      <motion.div
        ref={ref}
        variants={revealContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="about-profile__stack"
      >
        <motion.article variants={revealItem} className="about-profile__card">
          <h3>Profile</h3>
          <p>{aboutProfileContent.bio}</p>
        </motion.article>

        <motion.article variants={revealItem} className="about-profile__card">
          <h3>Quick Info</h3>
          <ul className="about-profile__list">
            <li>
              <strong>Location:</strong> {aboutProfileContent.location}
            </li>
            {aboutProfileContent.phone ? (
              <li>
                <strong>Phone:</strong> {aboutProfileContent.phone}
              </li>
            ) : null}
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${aboutProfileContent.email}`} className="about-profile__link">
                {aboutProfileContent.email}
              </a>
            </li>
          </ul>
        </motion.article>
      </motion.div>
    </SectionWrapper>
  )
}
