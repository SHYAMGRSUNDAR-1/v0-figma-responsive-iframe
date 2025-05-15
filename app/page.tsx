"use client"

import { useEffect, useState, useRef } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { LoadingScreen } from "./loading-screen"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const minLoadingTimeRef = useRef<NodeJS.Timeout | null>(null)
  const isMobileOrTabletPortrait = useMediaQuery("(max-width: 1024px) and (orientation: portrait)")

  useEffect(() => {
    setIsMounted(true)

    // Set minimum loading time of 8 seconds
    minLoadingTimeRef.current = setTimeout(() => {
      // Check if iframe is already loaded
      if (iframeLoaded) {
        setIsLoading(false)
      } else {
        // Set a flag that min time has passed
        minLoadingTimeRef.current = null
      }
    }, 8000) // Changed from 5000 to 8000

    return () => {
      if (minLoadingTimeRef.current) {
        clearTimeout(minLoadingTimeRef.current)
      }
    }
  }, [iframeLoaded])

  const handleIframeLoad = () => {
    setIframeLoaded(true)

    // If minimum time has already passed, hide loading screen
    if (!minLoadingTimeRef.current) {
      setIsLoading(false)
    }
    // Otherwise, the timeout will handle it
  }

  // Only render content after component is mounted to avoid hydration errors
  if (!isMounted) {
    return null
  }

  return (
    <main className="w-full h-screen overflow-hidden">
      {isLoading && <LoadingScreen />}

      <div className={`w-full h-full transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {isMobileOrTabletPortrait ? (
          // Mobile Embed
          <div style={{ left: 0, width: "100%", height: "100%", position: "relative" }}>
            <iframe
              src="https://embed.figma.com/proto/zb93RKmH3dnUzTSotZPd15/Shyam-Sundar-Portfolio?content-scaling=fixed&disable-default-keyboard-nav=1&embed-host=iframely&hide-ui=1&hotspot-hints=0&node-id=2180-2224&page-id=2180%3A2223&scaling=scale-down-width&theme=light"
              style={{ top: 0, left: 0, width: "100%", height: "100%", position: "absolute", border: 0 }}
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          </div>
        ) : (
          // Desktop Embed
          <div style={{ left: 0, width: "100%", height: "100%", position: "relative" }}>
            <iframe
              src="https://embed.figma.com/proto/zb93RKmH3dnUzTSotZPd15/Shyam-Sundar-Portfolio?content-scaling=fixed&disable-default-keyboard-nav=1&embed-host=iframely&hide-ui=1&hotspot-hints=0&node-id=2043-135&page-id=2043%3A134&scaling=scale-down-width&theme=light"
              style={{ top: 0, left: 0, width: "100%", height: "100%", position: "absolute", border: 0 }}
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          </div>
        )}
      </div>
    </main>
  )
}
