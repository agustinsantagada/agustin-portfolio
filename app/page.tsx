import Image from 'next/image'
import Link from 'next/link'
import { projects } from './data/projects'

export default function Home() {
  return (
    <>
      <section className="home-tagline anim">
        <h2>
          I&apos;m a Designer based in <em>Madrid.</em><br />
          With 20 years of professional experience.
        </h2>
        <Link href="/contact" className="home-cta">
          Let&apos;s work together →
        </Link>
      </section>

      <div className="home-grid">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="grid-item"
            style={{ animationDelay: `${i * 0.03}s` }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority={i < 6}
            />
            <div className="grid-overlay">
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '6px'
                }}>
                  {project.category}
                </div>
                <div className="grid-title">{project.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
