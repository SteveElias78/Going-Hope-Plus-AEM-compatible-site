import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  items: {
    label: string
    href: string
  }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="container mx-auto px-4 py-6">
      <ol className="flex flex-wrap items-center text-sm text-gray-600 justify-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center mx-1 my-1">
            {index > 0 && <ChevronRight className="mx-2 text-coral-300" size={14} />}
            <Link
              href={item.href}
              className="px-3 py-2 rounded-md bg-amber-50 shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              <span className="relative z-10 hover:text-coral-600 transition-colors">{item.label}</span>

              {/* Illuminated border effect with new colors */}
              <span className="absolute inset-0 border border-navy-200 rounded-md group-hover:border-navy-300 transition-colors duration-300"></span>

              {/* Glow effect on hover with new colors */}
              <span className="absolute inset-0 bg-gradient-to-r from-amber-100 to-coral-100 opacity-0 group-hover:opacity-70 rounded-md transition-opacity duration-300"></span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

