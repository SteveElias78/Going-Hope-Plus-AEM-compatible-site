"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stories = [
  {
    id: 1,
    quote:
      "Be independent. Do things for self and not depend on others. I know what I need. Everything is perfect! I do what I like, I go where I like. I enjoy life! If I die, I will die happy. I'm 100% better than where I was.",
    role: "GHP Participant",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Success-Story-slide-1.jpg-ysAoJsCkPkrJSA0abgHGvmb7ja4St1.jpeg",
  },
  {
    id: 2,
    quote:
      "I'm happy. My peace of mind is back. I want to continue my peace in myself. I can go under the banyan tree and enjoy the breeze.",
    role: "GHP Participant",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Success-Story-slide-2.jpg-gdUiqur4Xj0QbtyfCvkAU7BsAartuw.jpeg",
  },
  {
    id: 3,
    quote:
      "I am happy to be back together with my family. I tried to do the things I used to do like exercise. I wanted to go back to church. Everyone at church was happy to see me again.",
    role: "GHP Participant & Spouse",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Success-Story-slide-9a.jpg-6YZAuBdofiIB4Enc6p9wOlnY5SxuFu.jpeg",
  },
  {
    id: 4,
    quote:
      "It's a lot better living on my own than being cared by someone else. I feel so much happier. I feel like I accomplished something. It's a better life as I can eat what I want and I get to spend time with my son.",
    role: "GHP Participant",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Success-Story-slide-5.jpg-gzzMEYEgvSnfdFr0CArzPPl9Fc6cne.jpeg",
  },
]

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextStory()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-amber-50 py-16 pattern success-pattern pattern--medium">
      <div className="pattern__content container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-navy-600">Success Stories</h2>

        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={prevStory}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Previous story"
          >
            <ChevronLeft size={24} className="text-navy-500" />
          </button>

          <button
            onClick={nextStory}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Next story"
          >
            <ChevronRight size={24} className="text-navy-500" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {stories.map((story) => (
                <div key={story.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8 relative border border-navy-300"
                  >
                    {/* Permanent gradient glow effect with new colors */}
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-50 to-olive-50 opacity-70 rounded-lg"></span>

                    <div className="md:w-1/3 flex-shrink-0 relative z-10">
                      <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-amber-200 relative">
                        {/* Permanent glow effect around the circular image with new colors */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-coral-400 to-amber-400 rounded-full blur-md opacity-70"></div>
                        <div className="absolute inset-0 rounded-full overflow-hidden z-10">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={`GHP Participant`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-4 relative z-10">
                        <h3 className="font-bold text-navy-600">GHP</h3>
                        <p className="text-coral-600">{story.role}</p>
                      </div>
                    </div>

                    <div className="md:w-2/3 relative z-10">
                      <blockquote className="text-gray-700 italic text-lg leading-relaxed">"{story.quote}"</blockquote>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-coral-500" : "bg-gray-300"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

