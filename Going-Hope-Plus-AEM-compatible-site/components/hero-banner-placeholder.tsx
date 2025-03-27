export default function HeroBannerPlaceholder() {
  // Updated hero banner dimensions: 1920px × 300px (16:2.5 aspect ratio)
  return (
    <div className="w-full relative pattern hero-pattern pattern--visible">
      <div className="pattern__content max-w-7xl mx-auto px-4 py-4">
        <div
          className="w-full h-[150px] md:h-[200px] lg:h-[300px] bg-gray-200 rounded-lg flex items-center justify-center"
          style={{
            backgroundImage: "linear-gradient(135deg, #e6f7ff, #f0f9ff)",
            boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.1)",
          }}
        >
          <div className="text-center p-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">Hero Banner Placeholder</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Recommended dimensions: <strong>1920px × 300px</strong> (16:2.5 aspect ratio)
            </p>
            <p className="text-gray-500 mt-1 text-xs md:text-sm">
              For best results on all devices, use a high-resolution image
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

