import React from "react";

import Image from "next/image";

import styles from "./HomePage.module.css";
import AdjustContainer from "../AdjustContainer";

function HomePage() {
  return (
    <>
      <section className={styles.section_about}>
        <div className={styles.profile_image}>
          <Image
            className={styles.profile_image}
            src="/assets/tobias-profile.png"
            alt="Tobias Basteiro"
            width={250}
            height={250}
          />
        </div>

        <div className={styles.about_text}>
          <h1>Hi! I’m Tobias.</h1>
          {/* [Time since Ago 1 2010] */}
          <p>
            I’ve been working on Software projects for 13+ years. I love
            learning, sharing and building great things for real people.
          </p>
        </div>
      </section>

      <section className={styles.section_homequote}>
        <p>
          What I like the most about technology is that I get to work on
          different industries, learn from a variety of professional profiles
          from all around the world and talk in a single universal language.
        </p>
      </section>

      <section className={styles.section_casestudies}>
        <AdjustContainer title="Fintech">
          <div className={styles.casestudies_card}>
            <p>
              Lead and implemented <strong>Fintech</strong> projects,
              architecting solutions that evolved with the business. I had the
              opportunity to meet and work closely with great professionals
              world wide, providing my full expertise in web development,
              designing product architecture, benchmarking and implementing
              integrations with several systems and much more.{" "}
            </p>
          </div>
        </AdjustContainer>
        <AdjustContainer title="Banking">
          <div className={styles.casestudies_card}>
            <p>
              I have worked as part of different teams and projects working for{" "}
              <strong>Banking</strong> products and services, including
              e-banking for companies, RestAPI integrations for insurances,
              omnichannel bus for FOREX and other platforms. In some of them I
              also contributed from the analysis phase, gathering the
              requirements that needed to be completed.{" "}
            </p>
          </div>
        </AdjustContainer>
        <AdjustContainer title="Education">
          <div className={styles.casestudies_card}>
            <p>
              Developed web services for online{" "}
              <strong>Education Platforms</strong> that served as interfaces to
              process Payment Gateways. All using async architecture JMS and
              integrations with financial providers like Zuora, Netsuite and
              Salesforce.
            </p>
          </div>
        </AdjustContainer>
        <AdjustContainer title="Traffic">
          <div className={styles.casestudies_card}>
            <p>
              Implemented full stack apps to manage{" "}
              <strong>Traffic Tickets</strong> and Fines processing, from the
              data input to the stored procedure calls to process them.
            </p>
          </div>
        </AdjustContainer>
        <AdjustContainer title="Health">
          <div className={styles.casestudies_card}>
            <p>
              Developed a full site for a <strong>Health Newsletter</strong> in
              Switzerland, to cover Health news, marketing campaigns,
              advertisement management and adding micro-sites to cover specific
              events.{" "}
            </p>
          </div>
        </AdjustContainer>
        <AdjustContainer title="Personal">
          {" "}
          <div className={styles.casestudies_card}>
            <p>
              Implemented a virtual Invitation Site using php, fully
              customizable (e-mail based) and used it for my own wedding. We
              knew we needed different cards for everyone (we had people
              speaking spanish or english, some people needed to input food
              restrictions or just extend the invitation to family or not). It
              was a cool project that we used also to provide information for
              fellows living abroad.
              <br /> I’m planning to migrate it to NextJS and React.
            </p>
          </div>
        </AdjustContainer>
      </section>
    </>
  );
}

export default HomePage;
