import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Agustin Santagada',
  description: 'Designer with 20+ years of experience in branding, motion, UX/UI, marketing and e-commerce. Based in Madrid.',
}

const clients = ['Fox', 'Disney', 'Mtv', 'NatGeo', 'Warner', 'Google', 'Mercadolibre']
const services = ['Art Direction', 'Design', 'Marketing', 'E-Commerce']

const experience = [
  { years: '2020 – Today', company: 'Ht-Shirts / Etsy / Shopify', role: 'Co-Owner' },
  { years: '2020 – 2022', company: 'The Walt Disney Company', role: 'Lead Visual Designer' },
  { years: '2017 – 2020', company: 'NatGeo', role: 'Lead Visual Designer' },
  { years: '2014 – 2017', company: 'Fox Sports', role: 'Manager Designer' },
  { years: '2011 – 2014', company: 'Fox', role: 'Sr. Graphic Designer' },
  { years: '2008 – 2011', company: 'The Walt Disney Company', role: 'Sr. Graphic Designer' },
  { years: '2006 – 2008', company: 'The Walt Disney Company', role: 'Graphic Designer' },
]

export default function About() {
  return (
    <>
      <section className="about-hero anim">
        <h1>Hi,<br />I&apos;m Agus.</h1>
        <div className="about-bio">
          <p>
            I&apos;m a guy specialized in technology, branding, typography, web design, marketing and
            ecommerce, with 23 years of professional experience. I am a person with infinite
            curiosities, which give me the possibility of advancing in different fields such as
            development and marketing; creating new concepts and projects, not just graphics,
            prototyping, thinking about the customer and a user&apos;s journey for decades to come.
          </p>
          <p>
            Originally from Buenos Aires, now based in Madrid. For the last twenty years, I have
            been involved in projects for broadcast, film and digital media, which has given me the
            opportunity to meet incredible colleagues from many different fields and given me a
            hands-on approach to the creative process behind every great piece.
          </p>
        </div>
      </section>

      <section className="about-cols anim anim-d2">
        <div>
          <p className="about-col-label">Clients</p>
          <ul className="about-col-list">
            {clients.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div>
          <p className="about-col-label">Services</p>
          <ul className="about-col-list">
            {services.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>

      <section className="experience-section anim anim-d3">
        <h2>Work Experience</h2>
        <div className="exp-list">
          {experience.map((e, i) => (
            <div key={i} className="exp-item">
              <span className="exp-date">{e.years}</span>
              <span className="exp-company">{e.company}</span>
              <span className="exp-role">{e.role}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
