import { type ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import skillCategories from "../data/skills";

const Skills = (): ReactElement => {
    return (
        <section id="skills" className="section-shell py-2 sm:py-4">
            <div className="surface-panel p-6 sm:p-8 lg:p-10">
                <div className="mb-8 max-w-3xl space-y-3">
                    <p className="section-kicker">
                        <FormattedMessage id="skills.kicker" />
                    </p>
                    <h2 className="section-title">
                        <FormattedMessage id="skills.title" />
                    </h2>
                    <p className="muted-copy text-base leading-8">
                        <FormattedMessage id="skills.description" />
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {skillCategories.map(({ titleId, skills }) => (
                        <article key={titleId} className="surface-card p-5">
                            <h3 className="text-lg font-semibold text-[color:var(--text)]">
                                <FormattedMessage id={titleId} />
                            </h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-3 py-1.5 text-sm font-medium text-[color:var(--text)] shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
