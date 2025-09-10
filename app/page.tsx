'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center space-x-2">
              <Image
                src="/SBLogo.png"
                alt="Sunbreak Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="font-bold text-xl text-gray-900">Sunbreak</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-sunbreak-orange transition">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-sunbreak-orange transition">How It Works</a>
              <a 
                href="https://apps.apple.com/app/id6752121964"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition flex items-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sunbreak-light via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-blue-100/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Sleep Well,
            <span className="bg-gradient-to-r from-sunbreak-orange to-yellow-500 bg-clip-text text-transparent"> Live Intentionally</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Block distracting apps at bedtime. Wake naturally with sunrise.
          </p>
          <p className="text-lg text-gray-500 mb-8 animate-fade-in-up animation-delay-200">
            100% Free • No Subscriptions • No Gimmicks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <a 
              href="https://apps.apple.com/app/id6752121964"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition transform hover:scale-105 flex items-center space-x-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download for iOS</span>
            </a>
          </div>
          
          {/* Phone Mockup */}
          <div className="mt-16 relative">
            <div className="mx-auto w-64 h-[520px] bg-gray-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden border-6 border-gray-800">
              <div className="absolute top-0 inset-x-0 h-4 bg-gray-900"></div>
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-800 rounded-full"></div>
              
              {/* Breathing glow effect */}
              <div className="absolute inset-4 top-12 rounded-[2rem] animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-yellow-400/30 rounded-[2rem] blur-sm"></div>
              </div>
              
              {/* Night to dawn gradient overlay */}
              <div className="absolute inset-4 top-12 bg-gradient-to-t from-gray-900 via-orange-900/60 to-orange-400 rounded-[2rem] flex items-center justify-center animate-pulse">
                <div className="text-white text-center p-8 relative z-10">
                  <div className="text-6xl mb-4">🌅</div>
                  <h3 className="text-2xl font-bold mb-2">Sunbreak</h3>
                  <p className="text-sm opacity-90">Apps blocked until sunrise</p>
                  <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <p className="text-xs mb-2">Time until wake:</p>
                    <p className="text-3xl font-bold">7h 32m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Effective Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for better sleep habits. Nothing you don't.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🌙"
              title="Bedtime Protection"
              description="Set your bedtime once. Apps automatically block when it's time to sleep."
            />
            <FeatureCard
              icon="🌅"
              title="Sunrise Wake Times"
              description="Wake naturally with the sun. Apps unlock based on your local sunrise time."
            />
            <FeatureCard
              icon="⏰"
              title="Wake Buffer"
              description="Add 0-120 minutes after sunrise to prevent morning doom scrolling."
            />
            <FeatureCard
              icon="🚨"
              title="Emergency Access"
              description="One 15-minute emergency unlock per week for when you really need it."
            />
            <FeatureCard
              icon="📱"
              title="Choose Your Apps"
              description="Select which apps to block. Keep essentials like calls always available."
            />
            <FeatureCard
              icon="✨"
              title="100% Free"
              description="No subscriptions, no ads, no in-app purchases. Just better sleep."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Set Your Bedtime"
              description="Choose when you want to start winding down. That's it - no complex schedules."
            />
            <StepCard
              number="2"
              title="Select Apps to Block"
              description="Pick the apps that keep you up. Social media, games, videos - your choice."
            />
            <StepCard
              number="3"
              title="Sleep Better"
              description="Apps block at bedtime and unlock after sunrise. Build better sleep habits naturally."
            />
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sunbreak-orange to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sleep Well, Live Intentionally
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Transform your nights to transform your days
          </p>
          <a 
            href="https://apps.apple.com/app/id6752121964"
            className="inline-flex items-center space-x-3 bg-white text-sunbreak-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>Download Sunbreak Free</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/SBLogo.png"
                alt="Sunbreak Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="font-bold text-xl">Sunbreak</span>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="hover:text-sunbreak-orange transition">Privacy</a>
              <a href="/terms" className="hover:text-sunbreak-orange transition">Terms</a>
              <a href="https://x.com/WilsonLimSet" target="_blank" rel="noopener noreferrer" className="hover:text-sunbreak-orange transition">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Sunbreak. Made with ❤️ for better sleep.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-sunbreak-orange to-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

