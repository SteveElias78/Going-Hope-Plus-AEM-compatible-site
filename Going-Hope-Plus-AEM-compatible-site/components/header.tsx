"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Minus, Plus, RotateCcw } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [fontSize, setFontSize] = useState(16)

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 24))
  }

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12))
  }

  const resetFontSize = () => {
    setFontSize(16)
  }

  return (
    <header className="w-full pattern header-pattern pattern--medium" style={{ fontSize: `${fontSize}px` }}>
      <div className="pattern__content">
        <div className="bg-forest text-white py-2 px-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <span className="text-xs md:text-sm mr-2 text-amber-100">Text Size:</span>

              {/* Text size controls with new color scheme */}
              <div className="flex space-x-1">
                <button
                  onClick={decreaseFontSize}
                  className="relative group bg-amber-400 hover:bg-amber-500 text-white px-2 py-1 rounded-md transition-all duration-300"
                  aria-label="Decrease text size"
                >
                  <span className="relative z-10 flex items-center">
                    <Minus size={12} />
                  </span>

                  {/* Illuminated effect with new colors */}
                  <span className="absolute inset-0 bg-coral-400 rounded-md blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 border border-navy-400 rounded-md group-hover:border-navy-300 transition-colors duration-300"></span>
                </button>

                <button
                  onClick={increaseFontSize}
                  className="relative group bg-amber-400 hover:bg-amber-500 text-white px-2 py-1 rounded-md transition-all duration-300"
                  aria-label="Increase text size"
                >
                  <span className="relative z-10 flex items-center">
                    <Plus size={12} />
                  </span>

                  {/* Illuminated effect with new colors */}
                  <span className="absolute inset-0 bg-coral-400 rounded-md blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 border border-navy-400 rounded-md group-hover:border-navy-300 transition-colors duration-300"></span>
                </button>

                <button
                  onClick={resetFontSize}
                  className="relative group bg-amber-400 hover:bg-amber-500 text-white px-2 py-1 rounded-md transition-all duration-300"
                  aria-label="Reset text size"
                >
                  <span className="relative z-10 flex items-center">
                    <RotateCcw size={12} />
                  </span>

                  {/* Illuminated effect with new colors */}
                  <span className="absolute inset-0 bg-coral-400 rounded-md blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 border border-navy-400 rounded-md group-hover:border-navy-300 transition-colors duration-300"></span>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Link
                href="#"
                className="text-xs md:text-sm text-amber-100 hover:text-white transition-colors relative group"
              >
                <span className="relative z-10">Human Services</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-coral-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-amber-100 hover:text-white transition-colors relative group"
              >
                <span className="relative z-10">Hawaii.gov</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-coral-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-b border-navy-200">
          <div className="container mx-auto py-3 px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-3 md:mb-0">
              <Link href="/" className="flex items-center">
                <div className="flex space-x-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-MpFrU78a07bfRaqDOsfrnFZ3Ezw9od.png"
                    alt="State of Hawaii Seal"
                    width={50}
                    height={50}
                    className="transition-transform hover:scale-105 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-sZgTlWe1xwr67aEFBtnDrnmMVdDgWE.png"
                    alt="Department of Human Services Logo"
                    width={50}
                    height={50}
                    className="transition-transform hover:scale-105 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-SVcmumNkjpRIEiXbg4hrdXc2RKHafa.png"
                    alt="Med-QUEST Logo"
                    width={50}
                    height={50}
                    className="transition-transform hover:scale-105 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-sm text-gray-600">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-usWEq7EWfk7oSevbRwz5lPoJa4IrH0.png"
                      alt="State of Hawaiʻi Department of Human Services"
                      width={250}
                      height={15}
                      className="h-4 w-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-DzugXNkKV0I5LcGotewtCTwN00mpS0.png"
                      alt="Med-QUEST Division"
                      width={250}
                      height={30}
                      className="h-6 w-auto"
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="relative w-full md:w-auto">
              <Input
                type="search"
                placeholder="SEARCH SITE"
                className="pl-8 pr-3 py-1 border border-navy-300 rounded-md w-full md:w-56 h-8 text-sm"
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
            </div>
          </div>
        </div>

        <nav className="bg-white border-b border-navy-200 py-2">
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4">
              {["HOME", "ABOUT", "MEMBERS & APPLICANTS", "PLANS & PROVIDERS", "RESOURCES", "FAQ"].map((item) => (
                <li key={item} className="my-1">
                  <Link
                    href="#"
                    className="block py-2 px-3 md:px-4 text-center text-sm hover:text-coral-500 transition-all duration-300 bg-amber-50 rounded-md shadow-sm hover:shadow-md relative overflow-hidden group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-100 to-coral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute inset-0 border border-navy-200 rounded-md group-hover:border-navy-300 transition-colors duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

