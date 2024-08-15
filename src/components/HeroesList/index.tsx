"use client";

import { motion } from "framer-motion"
import Link from "next/link";
import { useEffect, useState } from "react";

import HeroPicture from "../HeroPicture"
import HomeCarouselMobile from "../HomeCarouselMobile";

import styles from "./styles.module.scss"

import { spidermanFont } from "@/fonts"
import { IHeroData } from "@/interfaces/heroes"
interface IProps {
  heroes: IHeroData[]
}

export default function HeroesList({ heroes }: IProps) {
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);

      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <>
      <motion.h1 className={`${spidermanFont.className} ${styles.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        Personagens
      </motion.h1>
      {screenSize > 708
        ?
        < motion.section className={styles.heroes}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          {heroes.map((hero) => (
            <motion.div
              key={hero.id}
              className={`${styles.imageContainer} ${styles[hero.id]}`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/hero/${hero.id}`}>
                <HeroPicture hero={hero} />
              </Link>
            </motion.div>
          ))}
        </motion.section >
        :
        <HomeCarouselMobile heroes={heroes} />
      }
    </>
  )
}