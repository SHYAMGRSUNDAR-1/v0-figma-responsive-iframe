"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const isMobileOrTabletPortrait = useMediaQuery("(max-width: 1024px) and (orientation: portrait)")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Only render content after component is mounted to avoid hydration errors
  if (!isMounted) {
    return null
  }

  return (
    <main className="w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        {isMobileOrTabletPortrait ? (
          // Mobile Embed
          <div style={{ left: 0, width: "100%", height: "100%", position: "relative" }}>
            <iframe
              src="https://embed.figma.com/proto/zb93RKmH3dnUzTSotZPd15/Shyam-Sundar-Portfolio?content-scaling=fixed&disable-default-keyboard-nav=1&embed-host=iframely&hide-ui=1&hotspot-hints=0&node-id=2180-2224&page-id=2180%3A2223&scaling=scale-down-width&theme=light"
              style={{ top: 0, left: 0, width: "100%", height: "100%", position: "absolute", border: 0 }}
              allowFullScreen
            />
          </div>
        ) : (
          // Desktop Embed
          <div style={{ left: 0, width: "100%", height: "100%", position: "relative" }}>
            <iframe
              src="https://embed.figma.com/proto/zb93RKmH3dnUzTSotZPd15/Shyam-Sundar-Portfolio?content-scaling=fixed&disable-default-keyboard-nav=1&embed-host=iframely&hide-ui=1&hotspot-hints=0&node-id=2043-135&page-id=2043%3A134&scaling=scale-down-width&theme=light"
              style={{ top: 0, left: 0, width: "100%", height: "100%", position: "absolute", border: 0 }}
              allowFullScreen
            />
          </div>
        )}
      </div>
    </main>
  )
}
