'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: '玻尿酸真的可以喝嗎？有效嗎？',
      a: '是的，玻尿酸可以喝。從-in 使用的是通過國際認証的玻尿酸成份（分子量小於10kDa），經臨床驗證能有效被人體吸收。定期飲用能改善肌膚保濕狀況，讓肌膚更飽滿、更有光澤。',
    },
    {
      q: '幾歲適合開始喝？',
      a: '18 歲以上都適合喝。特別推薦給：經常熬夜、對著螢幕工作的人；常吹冷氣、日曬者；追求肌膚飽水度的年輕上班族；以及想維持肌膚彈性的成熟肌膚人士。',
    },
    {
      q: '一天要喝幾包？多久會有感？',
      a: '建議每天喝 1–2 包（早晚各一包）。大多數使用者在 2–4 週內能感受到肌膚飽水度提升，4–8 週後效果更明顯（因人而異）。持續飲用效果更佳。',
    },
    {
      q: '可以和其他保養品一起使用嗎？',
      a: '可以。From-in 是內服玻尿酸飲品，與外用保養品互補。建議配合日常保濕乳液、精華液一起使用，由內而外雙重補水效果更好。',
    },
    {
      q: '有任何副作用或禁忌嗎？',
      a: '從-in 採用純淨配方，無香料、無色素、無防腐劑。一般無副作用，但如果對玻尿酸或任何成分過敏，建議先諮詢醫生。孕婦及哺乳期間建議先詢問醫師。',
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-dark-gray font-cormorant font-light mb-4">
            常見問題
          </h2>
          <p className="text-mid-gray font-noto-serif-tc">
            關於 From-in，你可能想知道的一切
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-mid-gray text-sm font-noto-serif-tc mb-4">
            還有其他問題嗎？
          </p>
          <a
            href="mailto:info@from-in.com.tw"
            className="text-rose-gold hover:text-dark-gray transition-colors duration-300 font-semibold underline"
          >
            直接寄信給我們 →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
