import type { ReactElement } from "react";
import { useIntl } from "react-intl";
import { FaMoon, FaSun } from "react-icons/fa";

type ThemeMode = 'light' | 'dark';

type HeadersProps = {
    theme: ThemeMode;
    onToggleTheme: () => void;
};

const Headers = ({ theme, onToggleTheme }: HeadersProps): ReactElement => {
    const intl = useIntl();
    const themeToggleLabel = intl.formatMessage({
        id: theme === 'light' ? 'header.theme.toDark' : 'header.theme.toLight',
    });
    const links = [
        { labelId: "header.nav.about", target: "about" },
        { labelId: "header.nav.skills", target: "skills" },
        { labelId: "header.nav.projects", target: "projects" },
        { labelId: "header.nav.contact", target: "contact" },
    ];

    return (
        <header className="sticky top-0 z-50 pt-4">
            <div className="section-shell">
                <div className="theme-surface flex flex-col gap-4 rounded-[28px] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                        type="button"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-3 text-left"
                    >
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-sm font-semibold text-[color:var(--accent)]">
                            PS
                        </span>
                        <span>
                            <span className="block text-base font-semibold tracking-tight text-[color:var(--text)]">
                                {intl.formatMessage({ id: 'header.brand.name' })}
                            </span>
                            <span className="block text-sm text-[color:var(--muted)]">
                                {intl.formatMessage({ id: 'header.brand.tagline' })}
                            </span>
                        </span>
                    </button>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <nav className="flex flex-wrap justify-start gap-2 sm:justify-center">
                            {links.map((item) => (
                                <button
                                    key={item.labelId}
                                    type="button"
                                    onClick={() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })}
                                    className="rounded-full border border-transparent px-3 py-2 text-sm font-medium text-[color:var(--muted)] transition-colors hover:border-[color:var(--border)] hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--text)]"
                                >
                                    {intl.formatMessage({ id: item.labelId })}
                                </button>
                            ))}
                        </nav>

                        <button
                            type="button"
                            onClick={onToggleTheme}
                            aria-label={themeToggleLabel}
                            aria-pressed={theme === 'dark'}
                            className="soft-button px-4 py-2 text-sm font-semibold"
                        >
                            {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
                            <span>{themeToggleLabel}</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Headers;
