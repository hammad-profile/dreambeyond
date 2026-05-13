"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const clientLogos = [
  {
    name: "Client One",
    src: "/client-logos/client-one.svg",
  },
  {
    name: "Client Two",
    src: "/client-logos/client-two.svg",
  },
  {
    name: "Client Three",
    src: "/client-logos/client-three.svg",
  },
  {
    name: "Client Four",
    src: "/client-logos/client-four.svg",
  },
  {
    name: "Client Five",
    src: "/client-logos/client-five.svg",
  },
  {
    name: "Client Six",
    src: "/client-logos/client-six.svg",
  },
];

export const ClientTrust = () => {
  const repeatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="client-trust">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="client-trust__inner"
        >
          <div className="client-trust__header">
            <h2 className="client-trust__heading">
              You are in great company
            </h2>

            <p className="client-trust__subheading">
              Placeholder client logos for now. Replace these with real client
              logos when you are ready to show your partners publicly.
            </p>
          </div>

          <div className="client-trust__marquee" aria-label="Client logo placeholders">
            <div className="client-trust__track">
              {repeatedLogos.map((logo, index) => (
                <div className="client-trust__item" key={`${logo.name}-${index}`}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={220}
                    height={64}
                    className="client-trust__logo"
                  />

                  <span className="client-trust__dot" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};