import { type ReactElement } from 'react';
import { useIntl } from 'react-intl';

const Loading = (): ReactElement => {
    const intl = useIntl();

    return (
        <div className="loading-overlay fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,177,255,0.14),transparent_28%),radial-gradient(circle_at_bottom,rgba(29,78,216,0.08),transparent_24%)]" />

            <div className="relative flex min-h-screen items-center justify-center px-6">
                <div className="flex w-full max-w-sm flex-col items-center text-center">
                    <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_24px_70px_rgba(15,23,42,0.12)]" />
                        <div className="absolute inset-2 rounded-full border-2 border-[color:var(--accent)] border-t-transparent animate-spin" />
                    </div>

                    <p className="section-kicker mb-3">
                        {intl.formatMessage({ id: 'loading.kicker' })}
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
                        {intl.formatMessage({ id: 'loading.title' })}
                    </h1>

                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                        {intl.formatMessage({ id: 'loading.subtext' })}
                    </p>

                    <div className="mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-[color:var(--border)]/40">
                        <div className="h-full w-2/5 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-strong))] animate-[loadingBar_2s_ease-in-out_infinite]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
