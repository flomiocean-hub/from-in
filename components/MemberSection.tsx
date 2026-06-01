'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MemberSection() {
  const steps = [
    {
      num: '①',
      title: '加入 LINE 好友',
      desc: '取得專屬優惠碼',
    },
    {
      num: '②',
      title: '首次下單',
      desc: '折抵 100 購物金，$1 加購第二盒',
    },
    {
      num: '③',
      title: '分享推薦',
      desc: '每成功一次再賺 100 購物金',
    },
  ]

  return (
    <section id="member" className="py-20 md:py-32 bg-light-rice">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero 區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="heading-lg text-dark-gray font-cormorant font-light">
              加入 LINE，立即拿新會員禮
            </h2>
            <p className="text-lg text-mid-gray font-noto-serif-tc">
              免費加入，第一次下單就有三重優惠
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://line.me/R/ti/p/from-in"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-flex justify-center"
              >
                加入 LINE 官方帳號
              </a>
              <a
                href="https://from-in.com.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-cream transition-all duration-300 inline-flex items-center justify-center"
              >
                直接購買 →
              </a>
            </div>

            <p className="text-xs text-mid-gray pt-4 font-noto-serif-tc">
              ⏰ 加入後會立即收到優惠碼，馬上就能使用
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/images/04-process-flows/04-three-good-perks/01-three-perks-poster.jpg"
                alt="From-in 新會員三好禮"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 三步驟流程 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl text-dark-gray font-cormorant font-light text-center mb-12">
            簡單三步驟，享受會員好康
          </h3>

          <div className="grid md:grid-cols-3 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-cream p-6 md:p-8 rounded-lg border border-border-light hover:border-rose-gold transition-colors duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl text-rose-gold font-cormorant font-light flex-shrink-0">
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg text-dark-gray font-semibold font-noto-serif-tc mb-1">
                        {step.title}
                      </h4>
                      <p className="text-mid-gray text-sm font-noto-serif-tc">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 箭頭 */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <span className="text-3xl text-rose-gold">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>


        {/* 最後 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-8"
        >
          <p className="text-mid-gray text-sm mb-6 font-noto-serif-tc">
            還在猶豫嗎？加入 From-in 會員，享受獨家優惠與專屬好康
          </p>
          <a
            href="https://line.me/R/ti/p/from-in"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary inline-flex"
          >
            立即加入 LINE 官方帳號
          </a>
        </motion.div>
      </div>
    </section>
  )
}
