import { type ReactElement, useState } from 'react';
import { projectDetails } from '../data/projects';

const Projects = (): ReactElement => {
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

    return (
        <section id="projects" className="p-10 max-w-6xl mx-auto mb-10">
            <h3 className="text-3xl font-semibold mb-12 text-center text-gray-900">
                Projects
            </h3>

            <div className="space-y-16">
                {projectDetails.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${
                            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        } gap-8 items-start`}
                    >
                        <div className="flex-1 w-full">
                            <div className="aspect-video bg-gray-200 overflow-hidden mb-3 rounded-lg">
                                {project.images.length > 0 ? (
                                    <img
                                        src={project.images[currentImageIndex[index] ?? 0]}
                                        alt={`${project.title} screenshot`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-gray-400">Screenshot coming soon</span>
                                    </div>
                                )}
                            </div>

                            {project.images.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto">
                                    {project.images.map((img, imgIndex) => (
                                        <button
                                            key={imgIndex}
                                            onClick={() =>
                                                setCurrentImageIndex(prev => ({
                                                    ...prev,
                                                    [index]: imgIndex,
                                                }))
                                            }
                                            className={`flex-shrink-0 w-20 h-14 overflow-hidden border-2 transition-all ${
                                                (currentImageIndex[index] ?? 0) === imgIndex
                                                    ? 'border-blue-600 scale-105'
                                                    : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${imgIndex + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex-1">
                            <h4 className="font-bold text-2xl mb-3 text-gray-900">
                                {project.title}
                            </h4>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
