"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-forest text-white pattern footer-pattern pattern--visible">
      <div className="pattern__content container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-medium mb-4 border-b border-olive-400 pb-2">Contact Information</h3>
            <div className="space-y-2">
              <p className="font-medium">Oahu:</p>
              <p>(808) 692-8166 or 524-3370</p>
              <p className="font-medium mt-2">Neighbor Islands (toll free):</p>
              <p>1-800-316-8005</p>
              <p className="font-medium mt-2">Deaf or hard of hearing:</p>
              <p>(V/TT)</p>
              <p className="font-medium mt-2">Oahu:</p>
              <p>(808) 692-7182</p>
              <p className="font-medium mt-2">Neighbor Islands (toll free):</p>
              <p>1-800-603-1201</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 border-b border-olive-400 pb-2">GHP Sponsor</h3>
            <div className="flex flex-col items-center space-y-6 p-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-TXcSvxOUT3srd7ZyV0Vkg83135YUiX.png"
                alt="Department of Human Services Logo"
                width={150}
                height={150}
                className="mx-auto"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-mzjGYr5yDQbjflHrEsJfTbFBAzPFaA.png"
                alt="State of Hawaii Seal"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 border-b border-olive-400 pb-2">Quick Links</h3>
            <div className="grid grid-cols-1 gap-4">
              <Link href="#" className="hover:text-amber-300 transition-colors flex items-center">
                <span className="mr-2 text-coral-400">→</span> Forms
              </Link>
              <Link href="#" className="hover:text-amber-300 transition-colors flex items-center">
                <span className="mr-2 text-coral-400">→</span> FAQs
              </Link>
              <Link href="#" className="hover:text-amber-300 transition-colors flex items-center">
                <span className="mr-2 text-coral-400">→</span> KOLEA
              </Link>
              <Link href="#" className="hover:text-amber-300 transition-colors flex items-center">
                <span className="mr-2 text-coral-400">→</span> Hawaii Resources
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-olive-400">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-QqAgEfqyJADfoueDhLbPouhcrjzuFz.png"
              alt="Med-QUEST Logo"
              width={80}
              height={80}
              className="transition-transform hover:scale-105"
            />
            <div className="mt-4 text-center md:text-left">
              <p>Department of Human Services</p>
              <p className="font-medium">Med-QUEST Division</p>
              <button className="mt-4 bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded transition-colors border border-navy-400">
                CONTACT US
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase mb-4 text-amber-200">Website</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Nondiscrimination Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Report Website Problems
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Archive Site
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase mb-4 text-amber-200">About Med-QUEST</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Report Fraud, Waste, & Abuse
                </Link>
              </li>
            </ul>

            <h4 className="text-sm font-medium uppercase mb-4 mt-6 text-amber-200">State of Hawaii</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Hawaii.gov
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Human Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-300 transition-colors">
                  Statewide Search
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-olive-400 text-sm text-amber-100">
          <p>© 2024 STATE OF HAWAII MED-QUEST DIVISION ALL RIGHTS RESERVED</p>
          <button
            onClick={scrollToTop}
            className="flex items-center bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded transition-colors border border-navy-400"
          >
            SCROLL TO TOP <ArrowUp className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

