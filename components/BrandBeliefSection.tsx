'use client'

import { motion } from 'framer-motion'

export default function BrandBeliefSection() {
  const beliefs = [
    {
      title: '無不必要添加',
      desc: '沒有香料、色素、防腐劑——只有你需要的',
    },
    {
      title: '科研認證配方',
      desc: '26+ 項國際認證成分，是科研，不是廣告詞',
    },
    {
      title: '39 位實測有感',
      desc: '不靠代言人，靠真實使用者反饋說話',
    },
  ]

  return (
    <section id="story" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl text-dark-gray font-cormorant font-light mb-4">
            Be Beauty From Within
          </h2>
          <p className="text-lg text-mid-gray font-noto-serif-tc">
            由內而外的保濕，才是真的補水
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 text-center"
            >
              <h3 className="text-xl text-dark-gray mb-3 font-semibold font-noto-serif-tc">
                {belief.title}
              </h3>
              <p className="text-mid-gray font-noto-serif-tc leading-relaxed">
                {belief.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
