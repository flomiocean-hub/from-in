'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolling
          ? 'bg-cream/95 backdrop-blur-sm border-b border-border-light'
          : 'bg-cream'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Image
            src="/images/01-brand-identity/02-logo-horizontal.png"
            alt="From-in Logo"
            width={120}
            height={40}
            className="h-auto"
          />
        </div>

        <ul className="hidden md:flex gap-8 text-mid-gray">
          <li>
            <a
              href="#product"
              className="hover:text-dark-gray transition-colors duration-300"
            >
              商品
            </a>
          </li>
          <li>
            <a
              href="#story"
              className="hover:text-dark-gray transition-colors duration-300"
            >
              品牌故事
            </a>
          </li>
          <li>
            <a
              href="#ingredients"
              className="hover:text-dark-gray transition-colors duration-300"
            >
              成分知識
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-dark-gray transition-colors duration-300"
            >
              常見問題
            </a>
          </li>
        </ul>

        <a
          href="https://line.me/R/ti/p/from-in"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-cream transition-all duration-300 text-sm"
        >
          加入 LINE
        </a>
      </div>
    </nav>
  )
}
