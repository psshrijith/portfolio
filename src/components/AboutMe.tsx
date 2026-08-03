import { type ReactElement } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { aboutMe } from "../data/about";
import profilePic from "../assets/shrijith.jpg";

const focusPoints = [
    "about.focusPoint.one",
    "about.focusPoint.two",
    "about.focusPoint.three",
];

const AboutMe = (): ReactElement => {
    const intl = useIntl();

    return (
    <section id="about" className="section-shell py-2 sm:py-4">
        <div className="surface-panel overflow-hidden">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[320px,1fr] lg:p-10">
                <div className="flex flex-col items-start">
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.24),transparent_68%)]" />
                        <img
                            src={profilePic}
                            alt={intl.formatMessage({ id: 'about.profile.alt' })}
                            className="h-52 w-52 rounded-[2rem] border border-[color:var(--border)] object-cover shadow-2xl shadow-slate-900/10 sm:h-60 sm:w-60"
                        />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {focusPoints.map((pointId) => (
                            <span
                                key={pointId}
                                className="rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]"
                            >
                                {intl.formatMessage({ id: pointId })}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <p className="section-kicker">
                            <FormattedMessage id="about.kicker" />
                        </p>
                        <h2 className="section-title max-w-2xl">
                            <FormattedMessage id="about.title" />
                        </h2>
                        <p className="max-w-3xl text-base leading-8 muted-copy">
                            <FormattedMessage id="about.intro" />
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="surface-card p-4">
                            <p className="text-sm font-semibold text-[color:var(--accent)]">
                                <FormattedMessage id="about.focus.label" />
                            </p>
                            <p className="mt-2 text-sm leading-6 muted-copy">
                                <FormattedMessage id="about.focus.body" />
                            </p>
                        </div>
                        <div className="surface-card p-4">
                            <p className="text-sm font-semibold text-[color:var(--accent)]">
                                <FormattedMessage id="about.strength.label" />
                            </p>
                            <p className="mt-2 text-sm leading-6 muted-copy">
                                <FormattedMessage id="about.strength.body" />
                            </p>
                        </div>
                        <div className="surface-card p-4">
                            <p className="text-sm font-semibold text-[color:var(--accent)]">
                                <FormattedMessage id="about.goal.label" />
                            </p>
                            <p className="mt-2 text-sm leading-6 muted-copy">
                                <FormattedMessage id="about.goal.body" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[color:var(--border)] p-6 sm:p-8 lg:p-10">
                <div className="grid gap-4 md:grid-cols-2">
                    {aboutMe.map((item) => (
                        <article
                            key={item.titleId}
                            className="surface-card group p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-2xl">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-[color:var(--text)]">
                                <FormattedMessage id={item.titleId} />
                            </h3>
                            <p className="mt-3 text-sm leading-7 muted-copy">
                                <FormattedMessage id={item.descriptionId} />
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutMe;
