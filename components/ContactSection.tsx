'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: '玻尿酸真的可以喝嗎？有效嗎？',
      a: '是的，玻尿酸可以喝。從-in 使用的是通過国际認証的玻尿酸成份（分子量小於10kDa），經臨床驗證能有效被人體吸收。定期飲用能改善肌膚保濕狀況，讓肌膚更飽滿、更有光澤。',
    },
    {
      q: '幾歲適合開始喝？',
      a: '18 歲以上都適合喝。特別推薦給：經常熬夜、對著螢幕工作的人；常吹冷氣、日曬者；追求肌膚飽水度的年輕上班族；以及想維持肌膚彈性的成熟肌膚人士。',
    },
    {
      q: '一天要喝幾包？多久會有感？',
      a: '建議每天喝 1–2 包（早晚各一包）。大多數使用者在 2–4 週內能感受到肌膚飽水度提升，4–8 週後效果更明顯（因人而異）。持續飲用效果更佳。',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* 上方區塊：QR Code + 聯絡方式 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-start mb-20"
        >
          {/* 左欄：QR Code */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-cream border border-border-light p-6 rounded-lg mb-6 max-w-xs w-full">
              <Image
                src="/images/06-social-assets/01-line-qrcode.png"
                alt="From-in LINE QR Code"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl text-dark-gray font-semibold mb-2 font-noto-serif-tc">
              掃碼加入，立即獲得優惠
            </h3>
            <p className="text-mid-gray text-sm font-noto-serif-tc mb-4">
              LINE ID: @from-in
            </p>
            <a
              href="https://line.me/R/ti/p/from-in"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex"
            >
              用手機打開 LINE
            </a>
          </div>

          {/* 右欄：聯絡方式 */}
          <div className="space-y-8">
            <h2 className="heading-lg text-dark-gray font-cormorant font-light">
              有任何問題？找我們
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-rose-gold pl-4 py-2">
                <p className="text-sm text-mid-gray font-noto-serif-tc mb-2">
                  📧 Email
                </p>
                <a
                  href="mailto:info@from-in.com.tw"
                  className="text-lg text-dark-gray hover:text-rose-gold transition-colors duration-300 font-semibold font-noto-serif-tc underline"
                >
                  info@from-in.com.tw
                </a>
              </div>

              <div className="border-l-4 border-rose-gold pl-4 py-2">
                <p className="text-sm text-mid-gray font-noto-serif-tc mb-2">
                  💬 LINE 官方帳號
                </p>
                <a
                  href="https://line.me/R/ti/p/from-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-dark-gray hover:text-rose-gold transition-colors duration-300 font-semibold font-noto-serif-tc underline"
                >
                  @from-in（推薦）
                </a>
              </div>

              <div className="border-l-4 border-rose-gold pl-4 py-2">
                <p className="text-sm text-mid-gray font-noto-serif-tc mb-2">
                  📘 Facebook
                </p>
                <a
                  href="https://www.facebook.com/from.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-dark-gray hover:text-rose-gold transition-colors duration-300 font-semibold font-noto-serif-tc underline"
                >
                  From-in 純原妍所
                </a>
              </div>

              <div className="border-l-4 border-rose-gold pl-4 py-2">
                <p className="text-sm text-mid-gray font-noto-serif-tc mb-2">
                  📷 Instagram
                </p>
                <a
                  href="https://www.instagram.com/from.in_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-dark-gray hover:text-rose-gold transition-colors duration-300 font-semibold font-noto-serif-tc underline"
                >
                  @from.in_official
                </a>
              </div>
            </div>

            <div className="bg-light-rice p-4 rounded-lg border border-border-light">
              <p className="text-sm text-mid-gray font-noto-serif-tc">
                🕐 <span className="font-semibold">服務時間</span><br/>
                週一至週五 09:00–18:00（週末假日除外）
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ 區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-lg text-dark-gray font-cormorant font-light text-center mb-12">
            常見問題
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border-light rounded-lg overflow-hidden hover:border-rose-gold transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-start justify-between gap-4 hover:bg-light-rice transition-colors duration-300"
                >
                  <span className="text-left text-dark-gray font-semibold font-noto-serif-tc">
                    {faq.q}
                  </span>
                  <span
                    className={`text-2xl text-rose-gold flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border-light bg-light-rice px-6 py-4"
                  >
                    <p className="text-mid-gray font-noto-serif-tc leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-mid-gray text-sm font-noto-serif-tc mb-4">
              還有其他問題嗎？
            </p>
            <a
              href="https://line.me/R/ti/p/from-in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-gold hover:text-dark-gray transition-colors duration-300 font-semibold underline"
            >
              直接在 LINE 上與我們聯絡 →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
