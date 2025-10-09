"use client"

// v1.0.1 - Cache refresh

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const logoRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const partnersRef = useRef<HTMLDivElement>(null)
  const supportRef = useRef<HTMLDivElement>(null)

  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Transform Your Business",
      subtitle: "Innovative solutions for modern enterprises",
      image: "/modern-business-transformation.jpg",
    },
    {
      title: "Drive Innovation",
      subtitle: "Cutting-edge technology for competitive advantage",
      image: "/innovation-technology.jpg",
    },
    {
      title: "Scale with Confidence",
      subtitle: "Reliable platforms for sustainable growth",
      image: "/business-growth-scaling.jpg",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      )

      gsap.fromTo(
        ".slider-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" },
      )

      gsap.fromTo(
        ".solution-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: solutionsRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".partner-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".support-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: supportRef.current,
            start: "top 80%",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-black">
      <div ref={logoRef} className="py-8">
        <img src="/logo.png" alt="NIV BRM Logo" className="h-12 w-auto mx-auto" />
      </div>

      <section ref={sliderRef} className="relative h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="slider-content absolute inset-0 flex items-center justify-center text-center text-white">
                  <div className="max-w-4xl px-6">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">{slide.title}</h1>
                    <p className="text-xl lg:text-2xl mb-8 text-pretty">{slide.subtitle}</p>
                    <Button size="lg" className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-200">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section id="solutions" ref={solutionsRef} className="py-12 px-4 md:px-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Solutions</h2>
        </div>
        <div className="relative">
          <div
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="solution-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/BUSINESS SOLUTIONS.jpg" alt="RAP" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">RAP</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Resource Allocation Platform - Optimize your resource management
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
            <div className="solution-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/IT.jpg" alt="BAT" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">BAT</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Business Analytics Tools - Advanced analytics for data-driven decisions
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
            <div className="solution-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/LoJISTICK.jpg" alt="Prof" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Prof</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Professional Services - Expert consulting and implementation
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
            <div className="solution-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/Mass.jpg" alt="More Solutions" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">More Solutions</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Discover additional solutions tailored to your needs
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" ref={partnersRef} className="py-12 px-4 md:px-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Partners</h2>
        </div>
        <div className="relative">
          <div
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="partner-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/Pap.jpg" alt="KRM" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">KRM</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Knowledge Resource Management - Comprehensive knowledge solutions
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
            <div className="partner-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/RAW.jpg" alt="RAW" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">RAW</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Resource Allocation Workflow - Streamlined workflow management
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
            <div className="partner-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/VRM.jpg" alt="Logistics" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Logistics</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Supply Chain & Logistics - End-to-end logistics solutions
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
            <div className="partner-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/BUSINESS SOLUTIONS .jpg" alt="More Partners" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">More Partners</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Explore our extensive partner network</p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="support" ref={supportRef} className="py-12 px-4 md:px-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Support</h2>
        </div>
        <div className="relative">
          <div
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="support-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/IT.jpg" alt="CRM" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">CRM</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Customer Relationship Management - Advanced CRM solutions
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
            <div className="support-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/LoJISTICK.jpg" alt="Admin" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Admin</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Administrative Services - Comprehensive administrative support
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
            <div className="support-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/Mass.jpg" alt="Legal" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Legal</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Legal & Compliance - Expert legal guidance and compliance
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
            <div className="support-card flex-shrink-0 w-[300px] md:w-[400px] h-[225px] md:h-[300px] relative rounded-md overflow-hidden group/card cursor-pointer">
              <img src="/Pap.jpg" alt="More Support" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">More Support</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Discover additional support services available</p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover/card:w-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src="/logo.png" alt="NIV BRM Logo" className="h-12 w-auto mb-4" />
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering businesses with innovative solutions and comprehensive support services for sustainable
                growth.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    RAP
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    BAT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Prof
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NIV BRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}