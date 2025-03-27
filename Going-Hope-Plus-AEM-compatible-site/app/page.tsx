import HeroBannerPlaceholder from "@/components/hero-banner-placeholder"
import GoingHomePlus from "@/components/going-home-plus"
import Breadcrumb from "@/components/breadcrumb"
import SuccessStories from "@/components/success-stories"

export default function Home() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Members & Applicants", href: "#" },
    { label: "Already Covered", href: "#" },
    { label: "Going Home Plus", href: "#" },
  ]

  return (
    <div>
      {/* Hero Banner Placeholder - Will be replaced with Canva-created image */}
      <HeroBannerPlaceholder />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Add some spacing between breadcrumb and Going Home Plus section */}
      <div className="h-8"></div>

      {/* Going Home Plus Section */}
      <GoingHomePlus />

      {/* Success Stories Section */}
      <SuccessStories />
    </div>
  )
}

