'use client'

import { motion } from 'framer-motion'

export default function IngredientsSection() {
  const molecules = [
    {
      name: '大分子玻尿酸',
      size: '1000+ 分子量',
      benefit: '表層保濕鎖水，建立肌膚防護膜',
    },
    {
      name: '中分子玻尿酸',
      size: '100–1000 分子量',
      benefit: '深入真皮層，長效補水保濕',
    },
    {
      name: '小分子玻尿酸',
      size: '< 100 分子量',
      benefit: '透過真皮基質，極速吸收、極效補水',
    },
  ]

  return (
    <section id="ingredients" className="py-20 md:py-32 bg-dark-gray text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl text-cream font-cormorant font-light mb-6">
            你知道自己在喝什麼嗎？
          </h2>
          <p className="text-lg text-rose-gold font-noto-serif-tc">
            26+ 項國際認證，這是科研，不是廣告詞
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {molecules.map((molecule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-rose-gold/30 rounded-lg hover:border-rose-gold transition-colors duration-300"
            >
              <h3 className="text-xl text-rose-gold mb-2 font-noto-serif-tc font-semibold">
                {molecule.name}
              </h3>
              <p className="text-sm text-cream/70 mb-4 font-cormorant">
                {molecule.size}
              </p>
              <p className="text-cream/90 font-noto-serif-tc leading-relaxed text-sm">
                {molecule.benefit}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 bg-cream/5 border border-rose-gold/20 rounded-lg text-center"
        >
          <p className="text-cream/80 font-noto-serif-tc">
            成分表短不是偷工減料，<br/>
            而是每一項都精挑細選、每一項都是有感有效
          </p>
        </motion.div>
      </div>
    </section>
  )
}
