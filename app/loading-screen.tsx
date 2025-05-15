"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [jokeIndex, setJokeIndex] = useState(0)

  const spaceJokes = [
    "Why did the astronaut break up with his girlfriend? He needed space!",
    "How do you organize a space party? You planet!",
    "What do you call a designer in space? A flying saucer!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What's a UI designer's favorite place? The grid-iron!",
    "Why did the responsive website go to therapy? It had too many breakpoints!",
    "How many designers does it take to change a lightbulb? Does it have to be a lightbulb?",
    "Why did the developer go broke? He used up all his cache!",
    "What's a designer's favorite tree? The pixel-perfect pine!",
    "Why don't designers ever get lost? They always follow the user flow!",
  ]

  useEffect(() => {
    // Change jokes every 4 seconds
    const jokeInterval = setInterval(() => {
      setJokeIndex((prevIndex) => (prevIndex + 1) % spaceJokes.length)
    }, 4000)

    // Update progress bar - complete in exactly 8 seconds
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        // Linear progress to reach 100% in 8 seconds
        const newProgress = prevProgress + 100 / (8000 / 100) // 100 updates over 8000ms
        return Math.min(newProgress, 100)
      })
    }, 100) // Update every 100ms

    return () => {
      clearInterval(progressInterval)
      clearInterval(jokeInterval)
    }
  }, [spaceJokes.length])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-500">
      <div className="stars absolute inset-0"></div>
      <div className="relative w-48 h-48 mb-6">
        <div className="astronaut absolute w-24 h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float cursor-pointer"></div>
        <div className="planet absolute w-8 h-8 rounded-full bg-blue-500 animate-orbit"></div>
      </div>
      <div className="text-white text-2xl mb-4">Preparing for launch...</div>
      <div className="w-64 h-1 bg-gray-800 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-purple-600 transition-all duration-200" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="text-gray-400 text-center max-w-md min-h-12 px-4">{spaceJokes[jokeIndex]}</div>

      <style jsx>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 60px 110px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 80px 150px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 100px 20px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 120px 50px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 4s ease-in-out infinite;
        }
        
        .astronaut {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%23E6E6E6' d='M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm0 44c-7.732 0-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14s-6.268 14-14 14z'/%3E%3Cpath fill='%23FFFFFF' d='M32 12c-11.046 0-20 8.954-20 20s8.954 20 20 20s20-8.954-20-20s-8.954-20-20-20zm0 30c-5.514 0-10-4.486-10-10s4.486-10 10-10s10 4.486 10 10s-4.486 10-10 10z'/%3E%3Cpath fill='%23444444' d='M38 32c0 3.314-2.686 6-6 6s-6-2.686-6-6s2.686-6 6-6s6 2.686 6 6z'/%3E%3Cpath fill='%23F5A623' d='M42 10h4v8h-4z'/%3E%3Cpath fill='%23F5A623' d='M18 10h4v8h-4z'/%3E%3Cpath fill='%23F5A623' d='M32 46v10c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-10h8z'/%3E%3Cpath fill='%23F5A623' d='M40 46v10c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-10h8z'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
        }
        
        .planet {
          background: radial-gradient(circle at 30% 30%, #6b93d6, #3a539b);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, -60%); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
