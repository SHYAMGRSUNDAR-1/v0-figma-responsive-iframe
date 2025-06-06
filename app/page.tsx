"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const isMobileOrTabletPortrait = useMediaQuery("(max-width: 1024px) and (orientation: portrait)")

  // Define the embed host - this should match your domain
  const embedHost = "shyamgr-portfolio"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleIframeError = () => {
    setError("Failed to load Figma embed. Please try refreshing the page.")
  }

  // Only render content after component is mounted to avoid hydration errors
  if (!isMounted) {
    return null
  }

  return (
    <main className="w-full h-screen overflow-hidden">
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50 p-4 text-center">
          <div>
            <p className="text-white text-lg mb-4">{error}</p>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-white text-black rounded">
              Refresh
            </button>
          </div>
        </div>
      )}

      <div className="w-full h-full">
        {isMobileOrTabletPortrait ? (
          // Mobile Embed - Using the exact URL parameters you provided
          <iframe
            src={`https://embed.figma.com/proto/zb93RKmH3dnUzTSotZPd15/Shyam-Sundar-Portfolio?page-id=2180%3A2223&node-id=2180-2224&viewport=298%2C58%2C0.25&t=4WZBtxbFpJnVn9fQ-8&scaling=scale-down-width&content-scaling=fixed&hotspot-hints=0&disable-default-keyboard-nav=1&hide-ui=1&embed-host=${embedHost}`}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            allowFullScreen
            onError={handleIframeError}
          />
        ) : (
          // Desktop Embed - With proper embed-host parameter
          <iframe
            src={`https://embed.figma.com/proto/zb93RKmH3dnUzTSotZPd15/Shyam-Sundar-Portfolio?content-scaling=fixed&disable-default-keyboard-nav=1&hide-ui=1&hotspot-hints=0&node-id=2043-135&page-id=2043%3A134&scaling=scale-down-width&theme=light&embed-host=${embedHost}`}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            allowFullScreen
            onError={handleIframeError}
          />
        )}
      </div>
    </main>
  )
}
