'use client'

import { motion } from 'framer-motion'

export default function MemberSection() {
  const steps = [
    {
      num: '①',
      title: '免費註冊',
      reward: '100 購物金',
      desc: '成為會員，立即領取',
    },
    {
      num: '②',
      title: '新會員禮',
      reward: '加 $1 多一盒',
      desc: '首次購買享超優惠',
    },
    {
      num: '③',
      title: '推薦好友',
      reward: '再賺 100 購物金',
      desc: '分享的同時也能獲利',
    },
  ]

  return (
    <section id="member" className="py-20 md:py-32 bg-light-rice">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-dark-gray font-cormorant font-light mb-4">
            加入就有，不用等
          </h2>
          <p className="text-lg text-mid-gray font-noto-serif-tc">
            三步驟打造你的會員權益
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-cream rounded-lg border border-border-light hover:border-rose-gold transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl text-rose-gold font-cormorant font-light">
                  {step.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg text-dark-gray font-semibold font-noto-serif-tc">
                    {step.title}
                  </h3>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-rose-gold font-semibold text-sm font-noto-serif-tc">
                  {step.reward}
                </p>
                <p className="text-mid-gray text-sm font-noto-serif-tc">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://from-in.com.tw/member"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            立即加入會員
          </a>
        </motion.div>
      </div>
    </section>
  )
}
