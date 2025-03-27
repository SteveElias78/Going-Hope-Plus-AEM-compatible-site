"use client"

import { useState } from "react"

export default function GoingHomePlus() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (item: string) => {
    if (activeDropdown === item) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(item)
    }
  }

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto pattern ghp-pattern pattern--visible">
      <div className="pattern__content flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-medium text-navy-600 mb-4">Independence, Dignity, Choice</h1>

          <p className="text-xl italic text-gray-600 mb-4">
            Transitioning individuals from hospitals, nursing facilities, and ICF-ID to community settings.
          </p>

          <div className="text-2xl font-bold text-coral-500 mb-6">749 Successful Transitions Since 2009!</div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            The Going Home Plus (GHP) project helps residents who have been living in hospitals, nursing facilities, and
            ICF/ID facilities move back into the community. For those residents who choose to live in the community, the
            GHP project will assist in finding housing (if the resident does not have a home to return to) and services
            (for example, help with cooking and bathing).{" "}
            <strong>Individuals from all islands are eligible to participate.</strong>
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The Going Home Plus (GHP) project is funded by the Centers for Medicare and Medicaid Services Money Follows
            the Person Rebalancing Demonstration grant through June 30, 2020. The project is a partnership between the
            Hawaii Department of Human Services Med-Quest Division and the University of Hawaii Center on Disability
            Studies.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#eligibility"
              className="bg-navy-600 hover:bg-navy-700 text-white font-medium py-3 px-5 rounded transition-colors"
            >
              GHP Eligibility Requirements
            </a>
            <a
              href="#services"
              className="bg-navy-600 hover:bg-navy-700 text-white font-medium py-3 px-5 rounded transition-colors"
            >
              GHP Services
            </a>
            <a
              href="#referral"
              className="bg-navy-600 hover:bg-navy-700 text-white font-medium py-3 px-5 rounded transition-colors"
            >
              GHP Referral Form
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="mb-6">
            <h2 className="text-center font-semibold text-navy-600 mb-2">GOING HOME PLUS</h2>
            <div className="h-0.5 bg-navy-600 opacity-30"></div>
          </div>

          <div className="flex flex-col gap-2">
            {["About", "Participants", "Providers", "Services", "Housing", "Hawaii Resources"].map((item) => (
              <button
                key={item}
                onClick={() => toggleDropdown(item)}
                className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded p-4 text-left transition-colors"
                aria-expanded={activeDropdown === item}
              >
                <span>{item}</span>
                <span
                  className={`text-xs transition-transform duration-200 ${activeDropdown === item ? "transform rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

