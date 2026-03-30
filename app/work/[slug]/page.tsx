'use client'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/app/data/projects'

interface Props {
  params: { slug: string }
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

      <div className="work-header anim anim-d1">
        <div className="work-meta">
          {project.year && <span className="work-meta-item">{project.year}</span>}
          {project.client && <span className="work-meta-item">{project.client}</span>}
          <span className="work-meta-item work-meta-category">{project.category}</span>
        </div>
        <h1 className="work-title">{project.title}</h1>
        {project.role && <p className="work-role">{project.role}</p>}
      </div>

      <div className="work-cover anim anim-d2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {project.videoUrl && (
        <div className="work-video anim anim-d2">
          <iframe
            src={project.videoUrl}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      )}

      {(project.description || project.link) && (
        <div className="work-body anim anim-d3">
          {project.description && (
            <p className="work-description">{project.description}</p>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-external-link">
              Ver proyecto completo →
            </a>
          )}
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="work-images">
          {project.images.map((src, i) => (
            <div key={i} className="work-image-wrap">
              <Image
                src={src}
                alt={`${project.title} — ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="work-nav anim anim-d3">
        {prev ? <Link href={`/work/${prev.slug}`} className="work-nav-link">← {prev.title}</Link> : <span />}
        {next ? <Link href={`/work/${next.slug}`} className="work-nav-link" style={{ textAlign: 'right' }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  )
}
