"use client";
import React from "react";

import styles from "./OffScreen.module.css";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function OffScreen() {
  return (
    <div className={styles.container}>
      <section className={styles.section_hero}>
        <h1>Off-Screen</h1>
      </section>

      <section className={styles.section_nature}>
        <h2>Nature</h2>
      </section>
      <section className={styles.section_music}>
        <h2>Music</h2>
      </section>
      <section className={styles.section_hobbies}>
        <h2>Hobbies</h2>
        <Carousel width={400} showThumbs={true}>
          <div>
            <Image
              src="/assets/offscreen/images/offscreen-hobbies-1.jpg"
              alt="hobbie1"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/assets/offscreen/images/offscreen-hobbies-2.jpg"
              alt="hobbie2"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/assets/offscreen/images/offscreen-hobbies-3.jpg"
              alt="hobbie3"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/assets/offscreen/images/offscreen-hobbies-4.jpg"
              alt="hobbie4"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/assets/offscreen/images/offscreen-hobbies-5.jpg"
              alt="hobbie5"
              width={400}
              height={300}
            />
          </div>
        </Carousel>
      </section>
    </div>
  );
}

export default OffScreen;
