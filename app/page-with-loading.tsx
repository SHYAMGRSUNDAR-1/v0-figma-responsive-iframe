"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { LoadingScreen } from "./loading-screen"

export default function HomeWithLoading() {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const isMobileOrTabletPortrait = useMediaQuery("(max-width: 1024px) and (orientation: portrait)")

  // Figma prototype URLs with proper embed format
  const DESKTOP_URL =
    "https://embed.figma.com/proto/zb93RKmH3dnUzTSotZPd15/Shyam-Sundar-Portfolio?content-scaling=responsive&disable-default-keyboard-nav=1&embed-host=iframely&hide-ui=1&hotspot-hints=0&node-id=2043-135&page-id=2043%3A134&scaling=contain&theme=light"

  const MOBILE_URL =
    "https://embed.figma.com/proto/zb93RKmH3dnUzTSotZPd15/Shyam-Sundar-Portfolio?page-id=2180%3A2223&node-id=2180-2224&viewport=669%2C162%2C0.99&t=dsCEsTCU3r7s1u5L-8&scaling=contain&content-scaling=fixed&hotspot-hints=0&disable-default-keyboard-nav=1&hide-ui=1&embed-host=iframely"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleIframeLoad = () => {
    // This is a backup in case the loading animation finishes before the iframe loads
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  // Only render content after component is mounted to avoid hydration errors
  if (!isMounted) {
    return null
  }

  return (
    <main className="w-full h-screen overflow-hidden">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`w-full h-full transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <iframe
          src={isMobileOrTabletPortrait ? MOBILE_URL : DESKTOP_URL}
          className="w-full h-full border-0"
          allowFullScreen
          onLoad={handleIframeLoad}
        />
      </div>
    </main>
  )
}
