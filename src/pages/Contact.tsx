"use client";

import "../styles/contact.css";
import { SiteLayout } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  MapPin,
  Phone,
  X,
} from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const contactEmail = "letstalk@letsdreambeyond.com";

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
    label: "Address",
    value:
      "8190 Barker Cypress Rd Ste 1900-660 Cypress, TX, 77433 United States",
    href: null,
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
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("project_type") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Dream Beyond inquiry${
      projectType ? ` — ${projectType}` : ""
    }`;

    const body = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Project type: ${projectType || "Not selected"}`,
      "",
      "Message:",
      message || "Not provided",
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
        <section className="contact-hero">
          <div className="container contact-hero__container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="contact-hero__header"
            >
              <div className="contact-hero__eyebrow">
                <span />
                _CONTACT_US
              </div>

              <h1 className="contact-hero__title">
                <span>Let’s talk about what</span>
                <span>you need to build next.</span>
              </h1>

              <p className="contact-hero__intro">
                Tell us where you are, what is breaking, and what should happen
                next. We’ll help you decide the smartest path forward.
              </p>
            </motion.div>

            <div className="contact-layout">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
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
                      Submit the form to review your message first. Then you can
                      open your email app and send it.
                    </p>
                  </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <label>
                      Name
                      <input name="name" type="text" placeholder="Your name" />
                    </label>

                    <label>
                      Email
                      <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <label>
                    What do you need help with?
                    <select name="project_type" defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="Advisory">Advisory</option>
                      <option value="Execution">Execution</option>
                      <option value="Products">Products</option>
                      <option value="Education">Education</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </label>

                  <label>
                    Message
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tell us what you are trying to solve..."
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
                transition={{ duration: 0.7, delay: 0.16, ease: easeOut }}
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
              transition={{ duration: 0.75, delay: 0.22, ease: easeOut }}
              className="contact-faq"
            >
              <div className="contact-faq__header">
                <div className="contact-faq__eyebrow">
                  <span />
                  _FAQ
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