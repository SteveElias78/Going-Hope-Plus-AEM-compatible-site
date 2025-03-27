// AEM-compatible hero banner component
// Note: Client-side animations simplified for AEM compatibility
export default function HeroBanner() {
  return (
    <div className="cmp-hero-banner">
      <div className="cmp-hero-banner__background">
        {/* Decorative background elements - static for AEM compatibility */}
        <div className="cmp-hero-banner__decoration cmp-hero-banner__decoration--left-top"></div>
        <div className="cmp-hero-banner__decoration cmp-hero-banner__decoration--left-bottom"></div>
        <div className="cmp-hero-banner__decoration cmp-hero-banner__decoration--right-top"></div>
        <div className="cmp-hero-banner__decoration cmp-hero-banner__decoration--right-bottom"></div>

        {/* Mid-century modern geometric shapes */}
        <div className="cmp-hero-banner__shape cmp-hero-banner__shape--diamond"></div>
        <div className="cmp-hero-banner__shape cmp-hero-banner__shape--circle"></div>
      </div>

      <div className="cmp-hero-banner__container">
        <div className="cmp-hero-banner__content">
          {/* Left side decorative element */}
          <div className="cmp-hero-banner__side cmp-hero-banner__side--left">
            <div className="cmp-hero-banner__bar cmp-hero-banner__bar--tall"></div>
            <div className="cmp-hero-banner__bar cmp-hero-banner__bar--short"></div>
          </div>

          {/* Center content - the hero image */}
          <div className="cmp-hero-banner__image-container">
            {/* 
              AEM-compatible image reference
              In AEM, this would be replaced with an AEM image component
              that references the DAM asset
            */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20Option%20Minimalist%20Aesthetic%20Photo%20Collage%20Banner%20Option%207.png-iM3Xi9boBjfy8VSSHcUdKVj1lI5MUS.jpeg"
              alt="Going Home Plus - Independence, Dignity, Choice"
              className="cmp-hero-banner__image"
            />

            {/* Subtle border frame */}
            <div className="cmp-hero-banner__frame"></div>
          </div>

          {/* Right side decorative element */}
          <div className="cmp-hero-banner__side cmp-hero-banner__side--right">
            <div className="cmp-hero-banner__bar cmp-hero-banner__bar--short"></div>
            <div className="cmp-hero-banner__bar cmp-hero-banner__bar--tall"></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="cmp-hero-banner__wave">
        <div className="cmp-hero-banner__wave-inner"></div>
      </div>
    </div>
  )
}

