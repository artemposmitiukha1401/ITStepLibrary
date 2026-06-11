import MapClient from "./MapClient";
import "./ContactPage.css";

const LocationIcon = () => (
    <span className="contact-page__location-icon">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </span>
);

export default function ContactPage() {
    return (
        <section className="contact-page">
            <div className="contact-page__inner">
                <h1 className="contact-page__title">НАШІ КОНТАКТИ</h1>

                <div className="contact-page__content">
                    <div className="contact-page__map">
                        <MapClient height="500px" />
                    </div>

                    <div className="contact-page__info">
                        <div className="contact-page__address">
                            <LocationIcon />
                            <p>вул. Садова, 3</p>
                        </div>

                        <a
                            href="https://maps.google.com/?q=STEP+Computer+Academy+Odesa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-page__directions-link"
                        >
                            Як нас знайти?
                        </a>

                        <p className="contact-page__section-label">Приймальна комісія</p>

                        <div className="contact-page__schedule">
                            <p>ПН.-ПТ.: 9:00-19:00</p>
                            <p>СБ.-НД.: 9:00-18:00</p>
                            <p>+38 (048) 728-66-60</p>
                            <p>+38 (050) 448-53-33</p>
                            <p>+38 (073) 797-88-21</p>
                            <p>+38 (067) 549-76-77</p>
                        </div>

                        <p className="contact-page__section-label contact-page__section-label--education">
                            Навчальна частина
                        </p>

                        <a href="mailto:koledzh_i@itstep.org" className="contact-page__email">
                            koledzh_i@itstep.org
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}