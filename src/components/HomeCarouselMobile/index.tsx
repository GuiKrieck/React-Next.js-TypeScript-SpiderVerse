"use client"

import { useState } from "react"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import HeroPicture from "../HeroPicture"

import styles from "./styles.module.scss"

import leftArrow from "@public/icons/leftArrow.png"
import rightArrow from "@public/icons/rightArrow.png"
import emptyBall from "@public/icons/emptyBall.png"
import filledBall from "@public/icons/filledBall.png"
import { IHeroData } from "@/interfaces/heroes"

interface IProps {
  heroes: IHeroData[]
}

export default function HomeCarouselMobile({ heroes }: IProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);


  function handleChangeActiveIndex(newPosition: number) {
    const arrLastPosition = heroes.length - 1;

    if ((activeIndex + newPosition) < 0) {
      setActiveIndex(arrLastPosition);
    } else if (activeIndex + newPosition > arrLastPosition) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + newPosition);
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftArrow} onClick={() => handleChangeActiveIndex(-1)}>
          <Image src={leftArrow} alt="icone de seta para esquerda" width={20} height={0} />
        </div>
        <section className={styles.heroes}>
          {heroes.map((hero, index) => (
            activeIndex === index
              ?
              <motion.div
                key={hero.id}
                className={`${styles.imageContainer} ${styles[hero.id]}`}
                initial={{ y: 50 }}
                animate={{ position: "absolute", scale: 1.5, left: "50%", transform: "translate(-50%)", y: 50, zIndex: 1 }}
              >
                <Link href={`/hero/${hero.id}`}>
                  <HeroPicture hero={hero} />
                </Link>
              </motion.div>
              :
              <motion.div
                key={hero.id}
                className={`${styles.imageContainer} ${styles[hero.id]}`}
                initial={{ y: 50 }}
                animate={{ position: "relative", filter: "blur(2.5px)", scale: 0.9, y: 50 }}
              >
                <HeroPicture hero={hero} />
              </motion.div>
          ))}
        </section >
        <div className={styles.rightArrow} onClick={() => handleChangeActiveIndex(1)}>
          <Image src={rightArrow} alt="Icone de seta para direita" width={20} height={0} />
        </div>
      </div >
      <div className={styles.breadCrumbs}>
        {heroes.map((hero, index) => (
          <motion.div key={hero.id}>
            <Image src={activeIndex === index ? filledBall : emptyBall} alt="BreadCrumbs" width={10} height={10} />
          </motion.div>
        ))}

      </div>
    </>
  )
}