import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/app/data/projects'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Agustin Santagada`,
    description: `${project.category} project by Agustin Santagada`,
  }
}

export default function WorkDetail({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  const idx = projects.indexOf(project)
  const prev = projects[idx - 1]
  const next = projects[idx + 1]

  return (
    <div className="work-detail">
      <Link href="/" className="work-back anim">← All work</Link>

      <div className="anim anim-d1" style={{ marginBottom: '12px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}>
          {project.category}
        </span>
      </div>

      <h1 className="anim anim-d1" style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        fontWeight: 400,
        marginBottom: '48px',
        lineHeight: 1.1,
      }}>
        {project.title}
      </h1>

      <div className="anim anim-d2" style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        background: 'var(--bg-2)',
      }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Navigation between projects */}
      <div className="anim anim-d3" style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '60px',
        paddingTop: '40px',
        borderTop: '1px solid var(--border)',
        gap: '24px',
      }}>
        {prev ? (
          <Link href={`/work/${prev.slug}`} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--fg-2)',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
          >
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/work/${next.slug}`} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--fg-2)',
            transition: 'color 0.2s',
            textAlign: 'right',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
          >
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </div>
  )
}
