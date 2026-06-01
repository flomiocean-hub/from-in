'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '1',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 簡單的表單驗證
    if (formData.name && formData.email && formData.phone) {
      // 實際應用中這裡會送到後端或第三方服務
      console.log('訂購資訊:', formData)
      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', quantity: '1' })
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <footer className="bg-dark-gray text-cream py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-12"
        >
          {/* 左欄：品牌簡介 */}
          <div>
            <Image
              src="/images/01-brand-identity/03-logo-textbased.png"
              alt="From-in Logo"
              width={120}
              height={60}
              className="mb-6"
            />
            <p className="text-lg text-cream/80 font-noto-serif-tc leading-relaxed mb-6">
              不是喝水而已，是喝對成分。
            </p>
            <p className="text-sm text-cream/70 font-noto-serif-tc leading-relaxed">
              26+ 國際認證成分、0 香料 0 色素 0 防腐劑，由內而外的真實保濕。
            </p>
          </div>

          {/* 右欄：訂購表單 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-cream/10 p-8 rounded-lg border border-cream/20"
          >
            <h3 className="text-xl font-semibold text-cream mb-6 font-noto-serif-tc">
              立即訂購
            </h3>

            {submitted ? (
              <div className="text-center py-6">
                <p className="text-rose-gold font-semibold font-noto-serif-tc mb-2">
                  ✓ 感謝您的訂購！
                </p>
                <p className="text-sm text-cream/70 font-noto-serif-tc">
                  我們會盡快與您聯繫確認訂單詳情
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="姓名"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-cream/20 border border-cream/30 text-cream placeholder-cream/50 rounded font-noto-serif-tc focus:outline-none focus:border-rose-gold"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="電子郵件"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-cream/20 border border-cream/30 text-cream placeholder-cream/50 rounded font-noto-serif-tc focus:outline-none focus:border-rose-gold"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="電話號碼"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-cream/20 border border-cream/30 text-cream placeholder-cream/50 rounded font-noto-serif-tc focus:outline-none focus:border-rose-gold"
                    required
                  />
                </div>

                <div>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-cream/20 border border-cream/30 text-cream rounded font-noto-serif-tc focus:outline-none focus:border-rose-gold"
                  >
                    <option value="1" className="bg-dark-gray">1 盒 (NT$1,790)</option>
                    <option value="2" className="bg-dark-gray">2 盒 (NT$3,480)</option>
                    <option value="3" className="bg-dark-gray">3 盒 (NT$5,070)</option>
                    <option value="6" className="bg-dark-gray">6 盒組合 (NT$9,900)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-rose-gold text-dark-gray font-semibold hover:bg-rose-gold/90 transition-all duration-300 rounded font-noto-serif-tc"
                >
                  提交訂單
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>

        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-xs font-noto-serif-tc">
              © {currentYear} From-in 純原妍所. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://from-in.com.tw/privacy"
                className="text-cream/50 hover:text-cream/70 transition-colors duration-300 text-xs font-noto-serif-tc"
              >
                隱私政策
              </a>
              <a
                href="https://from-in.com.tw/terms"
                className="text-cream/50 hover:text-cream/70 transition-colors duration-300 text-xs font-noto-serif-tc"
              >
                服務條款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
