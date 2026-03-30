'use client'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { projects } from '@/app/data/projects'
import type { ProjectSection } from '@/app/data/projects'

interface Props {
  params: { slug: string }
}

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function FadeDiv({ className, children }: { className: string, children: React.ReactNode }) {
  const ref = useFadeIn()
  return <div ref={ref} className={className}>{children}</div>
}

function Section({ section, projectTitle, sIdx }: { section: ProjectSection, projectTitle: string, sIdx: number }) {
  return (
    <div className="work-section">
      {section.title && (
        <FadeDiv className="work-section-title">{section.title}</FadeDiv>
      )}
      {section.blocks.map((block, bIdx) => {
        if (block.type === 'text') {
          return <FadeDiv key={bIdx} className="work-section-text">{block.text}</FadeDiv>
        }
        if (block.type === 'images-full') {
          return (
            <div key={bIdx} className="work-section-full">
              {block.images?.map((src, i) => (
                <FadeDiv key={i} className="work-img-full">
                  <Image src={src} alt={`${projectTitle} ${sIdx}-${bIdx}-${i}`} fill sizes="100vw" style={{ objectFit: 'cover' }} />
                </FadeDiv>
              ))}
            </div>
          )
        }
        if (block.type === 'images-grid') {
          return (
            <div key={bIdx} className="work-section-grid">
              {block.images?.map((src, i) => (
                <FadeDiv key={i} className="work-img-grid">
                  <Image src={src} alt={`${projectTitle} ${sIdx}-${bIdx}-${i}`} fill sizes="50vw" style={{ objectFit: 'cover' }} />
                </FadeDiv>
              ))}
            </div>
          )
        }
        if (block.type === 'images-grid-4') {
          return (
            <div key={bIdx} className="work-section-grid-4">
              {block.images?.map((src, i) => (
                <FadeDiv key={i} className="work-img-grid-4">
                  <Image src={src} alt={`${projectTitle} ${sIdx}-${bIdx}-${i}`} fill sizes="25vw" style={{ objectFit: 'cover' }} />
                </FadeDiv>
              ))}
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default function WorkDetail({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  const idx = projects.indexOf(project)
  const prev = projects[idx - 1]
  const next = projects[idx + 1]

  return (
    <div className="work-detail">
      <Link href="/" className="work-back">← All work</Link>

      <div className="work-header">
        <div className="work-meta">
          {project.year && <span className="work-meta-item">{project.year}</span>}
          {project.client && <span className="work-meta-item">{project.client}</span>}
          <span className="work-meta-item work-meta-category">{project.category}</span>
        </div>
        <h1 className="work-title">{project.title}</h1>
        {project.role && <p className="work-role">{project.role}</p>}
      </div>

      <div className="work-cover">
        <Image src={project.image} alt={project.title} fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
      </div>

      {project.videoUrl && (
        <div className="work-video">
          <iframe src={project.videoUrl} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} />
        </div>
      )}

      {(project.description || project.link) && (
        <div className="work-body" >
          {project.description && <p className="work-description">{project.description}</p>}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-external-link">Ver proyecto completo →</a>
          )}
        </div>
      )}

      {project.sections && project.sections.map((section, i) => (
        <Section key={i} section={section} projectTitle={project.title} sIdx={i} />
      ))}

      <div className="work-nav">
        {prev ? <Link href={`/work/${prev.slug}`} className="work-nav-link">← {prev.title}</Link> : <span />}
        {next ? <Link href={`/work/${next.slug}`} className="work-nav-link" style={{ textAlign: 'right' }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  )
}
