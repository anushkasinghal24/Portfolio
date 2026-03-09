import { motion } from 'framer-motion'

import { SectionWrapper } from '../../../layout/SectionWrapper'
import { useInViewReveal } from '../../../shared/hooks/useInViewReveal'
import { revealContainer, revealItem } from '../../../shared/motion/variants'
import { educationEntries } from '../data'

type EducationSectionProps = {
  sectionId?: string
}

export function EducationSection({ sectionId = 'education' }: EducationSectionProps) {
  const { ref, inView } = useInViewReveal({ threshold: 0.2, once: true })

  return (
    <SectionWrapper
      id={sectionId}
      eyebrow="Education"
      title="Education"
      description="Academic background and current graduation timeline."
      className="education-section"
    >
      <motion.div
        ref={ref}
        variants={revealContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="education-section__stack"
      >
        {educationEntries.map((entry) => (
          <motion.article key={entry.id} variants={revealItem} className="education-card">
            <h3 className="education-card__degree">{entry.degree}</h3>
            <p className="education-card__institution">{entry.institution}</p>
            <div className="education-card__meta">
              <span>CGPA: {entry.cgpa}</span>
              <span>Graduation: {entry.graduation}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
