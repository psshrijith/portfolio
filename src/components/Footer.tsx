import { type ReactElement } from "react";
import { FormattedMessage } from "react-intl";

const Footer = (): ReactElement => {
    return (
        <footer className="section-shell pb-8 pt-2">
            <div className="surface-panel flex flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left">
                <p className="text-sm text-[color:var(--muted)]">
                    © {new Date().getFullYear()} <FormattedMessage id="footer.copy" />
                </p>
                <p className="text-sm font-medium text-[color:var(--text)]">
                    <FormattedMessage id="footer.note" />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
