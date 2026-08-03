// Projects.tsx
import { type ReactElement, useState } from 'react';
import { useIntl } from 'react-intl';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { projectDetails } from '../data/projects';

const Projects = (): ReactElement => {
  const intl = useIntl();
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

  const renderVisual = (projectIndex:number, projectTitle:string, projectImages:string[]) => {
    const activeImageIndex = currentImageIndex[projectIndex] ?? 0;
    const hasImages = projectImages.length > 0;

    return (
      <div className="space-y-3">
        <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)]">
          {hasImages ? (
            <img
              src={projectImages[activeImageIndex]}
              alt={`${projectTitle} screenshot`}
              className="aspect-[16/10] w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center px-6 text-center">
              <div>
                <div className="mb-4 flex justify-center text-4xl text-[color:var(--accent)]"><FaCode /></div>
                <p className="text-lg font-semibold">{projectTitle}</p>
                <p className="mt-2 text-sm muted-copy">
                  {intl.formatMessage({ id: 'projects.emptyPreview' })}
                </p>
              </div>
            </div>
          )}
        </div>

        {projectImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {projectImages.map((img, imgIndex) => (
              <button
                key={imgIndex}
                type="button"
                onClick={() =>
                  setCurrentImageIndex(prev => ({ ...prev, [projectIndex]: imgIndex }))
                }
                className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 ${
                  activeImageIndex === imgIndex
                    ? 'border-[color:var(--accent)]'
                    : 'border-[color:var(--border)]'
                }`}
              >
                <img src={img} alt={`${projectTitle} thumbnail ${imgIndex + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="section-shell py-2 sm:py-4">
      <div className="surface-panel p-6 sm:p-8 lg:p-10">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="section-kicker">{intl.formatMessage({ id: 'projects.kicker' })}</p>
          <h2 className="section-title">{intl.formatMessage({ id: 'projects.title' })}</h2>
          <p className="muted-copy text-base leading-8">
            {intl.formatMessage({ id: 'projects.description' })}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectDetails.map((project, index) => {
            const projectTitle = intl.formatMessage({ id: project.titleId });
            const projectDescription = intl.formatMessage({ id: project.descriptionId });

            return (
              <article
                key={project.titleId}
                className="surface-card overflow-hidden border border-[color:var(--border)] p-4 transition-all duration-200 hover:-translate-y-1"
              >
                {renderVisual(index, projectTitle, project.images)}

                <div className="mt-5 space-y-4">
                  <h3 className="text-xl font-semibold">{projectTitle}</h3>
                  <p className="text-sm leading-7 muted-copy">{projectDescription}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-button px-4 py-2 text-sm font-semibold inline-flex items-center gap-2"
                  >
                    {intl.formatMessage({ id: 'projects.cta' })}
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;