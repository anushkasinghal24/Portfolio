import { motion } from 'framer-motion'

import { SectionWrapper } from '../../../layout/SectionWrapper'
import { useInViewReveal } from '../../../shared/hooks/useInViewReveal'
import { revealContainer, revealItem } from '../../../shared/motion/variants'
import { contactEndpoints } from '../data'

import { EndpointRow } from './EndpointRow'

export function ContactEndpointSection() {
  const { ref, inView } = useInViewReveal({ threshold: 0.16, once: true })

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Contact"
      description="Reach out for internships, collaboration, and full stack development opportunities."
      className="contact-endpoint"
    >
      <motion.div
        ref={ref}
        variants={revealContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="contact-endpoint__stack"
      >
        <motion.div variants={revealItem} className="contact-endpoint__layout">
          <article className="contact-endpoint__panel">
            <h3 className="contact-endpoint__panel-title">Direct Channels</h3>
            <p className="contact-endpoint__panel-subtitle">
              You can connect through email, GitHub, and LinkedIn.
            </p>
            <div className="contact-endpoint__grid">
              {contactEndpoints.map((endpoint) => (
                <EndpointRow key={endpoint.id} endpoint={endpoint} />
              ))}
            </div>
          </article>

          {/* <article className="contact-endpoint__form-card">
            <h3 className="contact-endpoint__form-title">Send a Message</h3>
            <p className="contact-endpoint__form-subtitle">
              Share your message and contact details. I will get back soon.
            </p>
            <ContactForm />
          </article> */}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
