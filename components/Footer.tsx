'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-gray text-cream py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          <div>
            <Image
              src="/images/01-brand-identity/03-logo-textbased.png"
              alt="From-in Logo"
              width={120}
              height={60}
              className="mb-4"
            />
            <p className="text-sm text-cream/70 font-noto-serif-tc leading-relaxed">
              不是喝水而已，是喝對成分。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-rose-gold mb-4 font-noto-serif-tc uppercase">
              快速連結
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://from-in.com.tw/product"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream transition-colors duration-300 text-sm font-noto-serif-tc"
                >
                  商品
                </a>
              </li>
              <li>
                <a
                  href="https://from-in.com.tw/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream transition-colors duration-300 text-sm font-noto-serif-tc"
                >
                  品牌故事
                </a>
              </li>
              <li>
                <a
                  href="https://from-in.com.tw/member"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream transition-colors duration-300 text-sm font-noto-serif-tc"
                >
                  會員系統
                </a>
              </li>
              <li>
                <a
                  href="https://from-in.com.tw/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream transition-colors duration-300 text-sm font-noto-serif-tc"
                >
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-rose-gold mb-4 font-noto-serif-tc uppercase">
              社群
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/from.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream transition-colors duration-300 text-sm font-noto-serif-tc"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/from.in_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream transition-colors duration-300 text-sm font-noto-serif-tc"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://line.me/R/ti/p/from-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream transition-colors duration-300 text-sm font-noto-serif-tc"
                >
                  LINE Official
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-rose-gold mb-4 font-noto-serif-tc uppercase">
              聯絡方式
            </h3>
            <div className="space-y-2">
              <p className="text-cream/70 text-sm font-noto-serif-tc">
                📧 info@from-in.com.tw
              </p>
              <p className="text-cream/70 text-sm font-noto-serif-tc">
                💬 LINE: @from-in
              </p>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-xs font-noto-serif-tc">
              © {currentYear} From-in. All rights reserved.
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
