'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const productImages = [
    '/images/02-product-images/01-product-main-original.jpg',
    '/images/02-product-images/03-product-angle2.jpg',
    '/images/02-product-images/04-product-angle2-hires.jpg',
  ]

  const benefits = [
    '大分子玻尿酸',
    '保濕鎖水',
    '中分子玻尿酸',
    '深層補水',
    '小分子玻尿酸',
    '極速吸收',
  ]

  return (
    <section id="product" className="py-20 md:py-32 bg-light-rice">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square bg-cream rounded-lg overflow-hidden">
              <Image
                src={productImages[activeSlide]}
                alt="From-in 產品展示"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex gap-2 mt-4">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'bg-rose-gold w-8' : 'bg-border-light'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm text-mid-gray tracking-widest mb-2">
                Double Hydration
              </p>
              <h2 className="heading-lg text-dark-gray font-cormorant font-light">
                極澎潤雙玻尿酸
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-dark-gray font-semibold text-lg font-noto-serif-tc">
                三重玻尿酸補水機制
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="border-l border-rose-gold pl-4">
                    <p className="text-sm text-mid-gray font-noto-serif-tc">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-3xl text-dark-gray font-cormorant font-light">
                NT$1,790 起
              </p>
              <button
                onClick={() => {
                  document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="button-primary inline-flex cursor-pointer"
              >
                直接購買
                <span className="ml-2">→</span>
              </button>
            </div>

            <div className="bg-cream p-6 rounded-lg border border-border-light">
              <p className="text-sm text-mid-gray font-noto-serif-tc leading-relaxed">
                ✓ 無香料 ✓ 無色素 ✓ 無防腐劑<br/>
                ✓ 純淨配方，為你的肌膚做最少的承諾
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
