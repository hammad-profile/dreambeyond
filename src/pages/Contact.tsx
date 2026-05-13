"use client";

import "../styles/home.css";
import "../styles/contact.css";
import { SiteLayout } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  X,
} from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const contactEmail = "letstalk@letsdreambeyond.com";
const calendlyLink = "https://calendly.com/ali-kitabi-letsdreambeyond/30min?";

const tickerItems = [
  "Strategy Calls",
  "AI Automation",
  "Custom Software",
  "Web Development",
  "Mobile Development",
  "Business Automation",
  "Secure Systems",
  "Scalable Platforms",
];

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (346) 666-5155",
    href: "tel:+13466665155",
  },
  {
    icon: Mail,
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: MapPin,
    label: "Locations",
    value: "Houston, USA + Karachi, Pakistan",
    href: null,
  },
];

const officeLocations = [
  {
    city: "Houston",
    country: "USA",
    address: "Houston, Texas, United States",
    note: "For US clients, strategy calls, business advisory, and product conversations.",
  },
  {
    city: "Karachi",
    country: "Pakistan",
    address: "Karachi, Sindh, Pakistan",
    note: "For Pakistan clients, delivery support, software execution, and team collaboration.",
  },
];

const faqs = [
  {
    question: "What does Dream Beyond help with?",
    answer:
      "Dream Beyond helps companies with software strategy, custom development, AI systems, integrations, product design, and practical technology education.",
  },
  {
    question: "Do you only advise, or do you also build?",
    answer:
      "We do both. Some clients need advisory before making technical decisions. Others need full execution, including architecture, software development, AI implementation, and system integration.",
  },
  {
    question: "When should a business contact Dream Beyond?",
    answer:
      "Contact us when your systems are fragile, your tools are disconnected, your team is relying on manual workarounds, or you need senior technical judgment before making a major software or AI investment.",
  },
  {
    question: "Can you help with AI without turning everything into an AI experiment?",
    answer:
      "Yes. We use AI where it creates real business leverage. The goal is not to add AI everywhere. The goal is to improve decisions, reduce friction, automate useful workflows, and protect the stability of the business.",
  },
  {
    question: "Do you work with existing software or only new projects?",
    answer:
      "We can work with both. We help modernize existing systems, fix weak foundations, connect disconnected tools, and also design new platforms from the ground up.",
  },
  {
    question: "What industries do you understand?",
    answer:
      "Dream Beyond has experience across logistics, warehousing, 3PL, restaurants, hospitality, healthcare, insurance, oil and gas, and business operations where software needs to support real work.",
  },
  {
    question: "What happens after I contact you?",
    answer:
      "We review your message, understand the problem, and recommend the right next step. That may be advisory, execution, product support, or a focused discovery conversation.",
  },
];

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const companyName = String(formData.get("company_name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const serviceRequired = String(
      formData.get("service_required") || ""
    ).trim();
    const projectBudget = String(formData.get("project_budget") || "").trim();
    const projectDetails = String(formData.get("project_details") || "").trim();

    const subject = `Dream Beyond inquiry${
      serviceRequired ? ` — ${serviceRequired}` : ""
    }`;

    const body = [
      `Full Name: ${name || "Not provided"}`,
      `Company name: ${companyName || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Service required: ${serviceRequired || "Not selected"}`,
      `Project budget: ${projectBudget || "Not selected"}`,
      "",
      "Project details:",
      projectDetails || "Not provided",
    ].join("\n");

    const href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setMailtoHref(href);
    setIsModalOpen(true);
  };

  const openEmailApp = () => {
    if (mailtoHref) {
      window.location.href = mailtoHref;
    }

    setIsModalOpen(false);
  };

  return (
    <SiteLayout>
      <main className="contact-page">
        <section className="dream-hero contact-simple-hero">
          <div className="dream-hero__background" aria-hidden="true">
            <div className="dream-hero__aurora" />
            <div className="dream-hero__soft-grid" />
            <div className="dream-hero__floor-grid" />
            <div className="dream-hero__beam dream-hero__beam--one" />
            <div className="dream-hero__beam dream-hero__beam--two" />
            <div className="dream-hero__orb dream-hero__orb--one" />
            <div className="dream-hero__orb dream-hero__orb--two" />
            <div className="dream-hero__noise" />
          </div>

          <div className="dream-hero__inner">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.16, ease: easeOut }}
              className="dream-hero__title"
            >
              <span className="dream-hero__title-line">
                Let&apos;s Build{" "}
                <span className="dream-hero__title-highlight">What Your</span>
              </span>
              <span className="dream-hero__title-line">
                Business Needs Next.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: easeOut }}
              className="dream-hero__subtitle"
            >
              Tell us about your idea, your system, or the problem slowing your
              team down. We&apos;ll help you find the smartest next step.
            </motion.p>
          </div>

          <div className="dream-hero__ticker">
            <div className="dream-hero__ticker-track">
              {[...Array(2)].map((_, groupIndex) => (
                <div className="dream-hero__ticker-group" key={groupIndex}>
                  {tickerItems.map((item) => (
                    <span key={item}>
                      {item}
                      <i />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-content-section" id="contact-form">
          <div className="container contact-content-section__container">
            <motion.section
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
              className="contact-booking"
            >
              <div className="contact-booking__content">
                <div className="contact-booking__icon">
                  <CalendarDays size={22} />
                </div>

                <div>
                  <span>Book a call</span>
                  <h2>Want to talk directly?</h2>
                  <p>
                    Pick a time that works for you. This is the fastest way to
                    discuss your idea, software need, AI project, or business
                    problem.
                  </p>
                </div>
              </div>

              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="contact-booking__button"
              >
                Schedule 30 Minute Call
                <ArrowRight size={17} />
              </a>
            </motion.section>

            <div className="contact-layout">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.14, ease: easeOut }}
                className="contact-card contact-card--form"
              >
                <div className="contact-card__grid" aria-hidden="true" />

                <div className="contact-form__top">
                  <div className="contact-form__icon">
                    <MessageSquare size={22} />
                  </div>

                  <div>
                    <h2>Start the conversation</h2>
                    <p>
                      Fill out the form below. Your message will open in your
                      email app before sending.
                    </p>
                  </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <label className="contact-form__full">
                    Full Name
                    <input name="name" type="text" placeholder="Jane Cooper" />
                  </label>

                  <div className="contact-form__row">
                    <label>
                      Company name
                      <input
                        name="company_name"
                        type="text"
                        placeholder="Ex. Tesla Inc"
                      />
                    </label>

                    <label>
                      Email*
                      <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </label>
                  </div>

                  <div className="contact-form__row">
                    <label>
                      Service required*
                      <select name="service_required" defaultValue="" required>
                        <option value="" disabled>
                          Select Your Service
                        </option>
                        <option value="Advisory">Advisory</option>
                        <option value="Execution">Execution</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="AI / Automation">AI / Automation</option>
                        <option value="Products">Products</option>
                        <option value="Education">Education</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </label>

                    <label>
                      Project budget*
                      <select name="project_budget" defaultValue="" required>
                        <option value="" disabled>
                          Select Your Range
                        </option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $15,000">
                          $5,000 - $15,000
                        </option>
                        <option value="$15,000 - $50,000">
                          $15,000 - $50,000
                        </option>
                        <option value="$50,000+">$50,000+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </label>
                  </div>

                  <label className="contact-form__full">
                    Project details*
                    <textarea
                      name="project_details"
                      rows={6}
                      placeholder="Tell us more about your idea"
                      required
                    />
                  </label>

                  <button type="submit" className="contact-form__button">
                    Review Message
                    <ArrowRight size={17} />
                  </button>
                </form>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
                className="contact-side"
              >
                <div className="contact-side__panel">
                  <div className="contact-side__eyebrow">
                    <span />
                    Contact Us
                  </div>

                  <a
                    href={`mailto:${contactEmail}`}
                    className="contact-side__email"
                  >
                    {contactEmail}
                  </a>

                  <p>
                    For strategy calls, product conversations, AI execution, and
                    custom software projects.
                  </p>
                </div>

                <div className="contact-detail-list">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;

                    const content = (
                      <>
                        <div className="contact-detail__icon">
                          <Icon size={20} />
                        </div>

                        <div>
                          <span>{item.label}</span>
                          <strong>{item.value}</strong>
                        </div>
                      </>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="contact-detail"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label} className="contact-detail">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </motion.aside>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: easeOut }}
              className="contact-locations"
            >
              <div className="contact-locations__header">
                <div className="contact-section-eyebrow">
                  <span />
                  Locations
                </div>

                <h2>Two places. One connected team.</h2>

                <p>
                  Dream Beyond works with clients through our USA and Pakistan
                  presence. Add real city photos later by replacing the image
                  placeholder boxes.
                </p>
              </div>

              <div className="contact-locations__grid">
                {officeLocations.map((location) => (
                  <article
                    className="contact-location-card"
                    key={location.city}
                  >
                    <div className="contact-location-card__image">
                      <span>{location.city} city image placeholder</span>
                    </div>

                    <div className="contact-location-card__body">
                      <span>{location.country}</span>
                      <h3>{location.city}</h3>
                      <strong>{location.address}</strong>
                      <p>{location.note}</p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28, ease: easeOut }}
              className="contact-faq"
            >
              <div className="contact-faq__header">
                <div className="contact-faq__eyebrow">
                  <span />
                  FAQ
                </div>

                <h2 className="contact-faq__title">
                  <span className="contact-faq__title-line">
                    Questions before <strong>we start?</strong>
                  </span>
                </h2>

                <p className="contact-faq__intro">
                  A few answers about how Dream Beyond works, what we build, and
                  when it makes sense to reach out.
                </p>
              </div>

              <div className="contact-faq__list">
                {faqs.map((faq, index) => (
                  <details className="contact-faq__item" key={faq.question}>
                    <summary>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {faq.question}
                    </summary>

                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </motion.section>
          </div>
        </section>

        {isModalOpen && (
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <div
              className="contact-modal__backdrop"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="contact-modal__card"
            >
              <button
                type="button"
                className="contact-modal__close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close confirmation modal"
              >
                <X size={18} />
              </button>

              <div className="contact-modal__icon">
                <CheckCircle2 size={24} />
              </div>

              <h2 id="contact-modal-title">Your message is ready.</h2>

              <p>
                We prepared your email to Dream Beyond. Click below to open your
                email app and send it.
              </p>

              <div className="contact-modal__actions">
                <button
                  type="button"
                  className="contact-modal__button contact-modal__button--light"
                  onClick={() => setIsModalOpen(false)}
                >
                  Edit Message
                </button>

                <button
                  type="button"
                  className="contact-modal__button contact-modal__button--dark"
                  onClick={openEmailApp}
                >
                  Open Email App
                  <ArrowRight size={17} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </SiteLayout>
  );
};

export default Contact;