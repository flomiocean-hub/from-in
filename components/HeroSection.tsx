'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-24 min-h-screen flex items-center bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <div className="space-y-4">
            <h1 className="heading-display text-dark-gray">
              你的皮膚，值得更少但更好
            </h1>
            <p className="text-lg text-mid-gray font-noto-serif-tc font-light">
              From-in 極澎潤雙玻尿酸 — 一包搞定裡層補水
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="#product"
              className="button-primary"
            >
              看產品
            </a>
            <a
              href="#ingredients"
              className="text-rose-gold hover:text-dark-gray transition-colors duration-300 font-light flex items-center gap-2"
            >
              什麼是三重玻尿酸？
              <span>→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full aspect-square max-w-md md:max-w-lg">
            <Image
              src="/images/02-product-images/01-product-main-original.jpg"
              alt="From-in 極澎潤雙玻尿酸產品"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
