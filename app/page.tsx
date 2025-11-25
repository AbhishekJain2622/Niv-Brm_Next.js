"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Layers, Handshake, TrendingUp } from "lucide-react";
gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const logoRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const partnersRef = useRef<HTMLDivElement>(null)
  const supportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      )

      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" },
      )

      gsap.fromTo(
        ".solution-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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




 const programs = [
    { id: "startup-india", title: "Startup India", description: "Helping young startups scale from local dominance to global recognition with end-to-end business support.", image: "https://nivpap.com/wp-content/uploads/2025/09/Start-up-india-Program.webp", ctaText: "Know More" },
    { id: "go-global", title: "Go Global", description: "Take your business to international platforms with complete compliance, logistics, and warehousing support.", image: "https://nivpap.com/wp-content/uploads/2025/09/Fo-Global-Program.webp", ctaText: "Know More" },
    { id: "msme-plus", title: "MSME Plus", description: "Simplify your operations with a one-stop solution for printing, packaging, IT, and marketing.", image: "https://nivpap.com/wp-content/uploads/2025/09/MSME-program.webp", ctaText: "Explore More" },
  ];
  const solutions = [
    {
      id: "NivPAP",
      title: "NivPAP",
      description: "Production: packaging that converts.",
      image: "/Pap.jpg",
      link: "https://nivpap.com/",
    },
    {
      id: "NivMASS",
      title: "NivMASS",
      description: "Performance marketing & influencer funnels that scale revenue.",
      image: "/Mass.jpg",
      link: "https://nivmass.netlify.app/",
    },
    {
      id: "NivITHUB",
      title: "NivITHUB",
      description: "Integrations, dashboards & ERP + AI workflows to automate ops.",
      image: "/IT.jpg",
      link: "https://nivit.netlify.app/",
    },
  ]

  const partners = [
    {
      id: "NivRAW",
      title: "NivRAW",
      description: "Verified suppliers & SKU catalogs by industry segment.",
      image: "/RAW.jpg",
    },
    {
      id: "NivVRM",
      title: "NivVRM",
      description: "Visual workflows + AI agents for vendor & customer comms.",
      image: "/LoJISTICK.jpg",
    },
    {
      id: "NivLojisticks",
      title: "NivLojisticks",
      description: "Hub-spoke network + API aggregator for fast delivery.",
      image: "/VRM.jpg",
    },
  ]

  const support = [
    {
      id: "NivLegal",
      title: "NivLegal",
      description: "Company formation, GST & statutory filings (including EPR).",
      image: "/support.jpg",
    },
    {
      id: "Influx",
      title: "Influx",
      description: "Creator discovery, campaign management & payout automation.",
      image: "/support1.webp",
    },
    {
      id: "NivOWL",
      title: "NivOWL",
      description: " SOPs, cohort training & operational playbooks for teams.",
      image: "/support3.jpg",
    },
  ]

  const businessSegments = [
    {
      id: "cake-bakery",
      title: "Cake & Bakery",
      description:
        "Enhance your bakery creations with our premium packaging designed to preserve freshness and elevate presentation. From cakes to pastries, our solutions combine style, durability, and hygiene, ensuring your treats look as delightful as they taste while leaving a lasting impression on your customers.",
      image: "https://nivpap.com/wp-content/uploads/2025/09/cake-and-bakery.png",
    },
    {
      id: "restaurant-qsr",
      title: "Restaurant & QSR",
      description:
        "Deliver excellence with packaging that matches your brand’s standard. From quick service to fine dining, our innovative solutions ensure convenience, hygiene, and sustainability. Designed for performance and presentation, our packaging helps hotels and QSRs serve food that stays fresh, travels well, and delights customers every time.",
      image: "https://nivpap.com/wp-content/uploads/2025/09/QSR.webp",
    },
    {
      id: "sweet-farshan",
      title: "Sweet & Farshan",
      description:
        "Give your sweets the packaging they deserve. Our tailored solutions keep flavors intact while showcasing your products with elegance and care. Perfect for gifting or retail, our packaging adds value to your offerings, making every bite of tradition and taste a truly memorable experience for your customers.",
      image: "https://nivpap.com/wp-content/uploads/2025/09/Sweet-shops.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="py-8 flex justify-center">
        <div ref={logoRef}>
          <Image
            src="/logo.png"
            alt="NIV BRM Logo"
            width={150}
            height={40}
            priority
            className="object-contain"
          />
        </div>
      </header>

      <main>
        {/* --- Hero Section --- */}
        {/* <section className="min-h-[60vh] flex flex-col items-center justify-center px-6">
            <div className="hero-content w-full max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
                How can we help you today?
            </h1>

            <div className="relative">
                <div className="flex items-center gap-3 bg-[#2f2f2f] rounded-full px-6 py-4 hover:bg-[#3f3f3f] transition-colors">
                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <Input
                    type="text"
                    placeholder="Ask anything"
                    className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors">
                Explore Solutions
                </button>
                <button className="px-6 py-3 bg-[#2f2f2f] text-white font-medium rounded-full hover:bg-[#3f3f3f] transition-colors border border-gray-700">
                Start AI Assistant
                </button>
            </div>
            </div>
        </section> */}

<section className="relative w-full h-[60vh] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/image.jpg" // 👈 Make sure this image is in your /public folder
    alt="Hero Banner"
    layout="fill"
    objectFit="cover"
    priority // Good for images in the hero section
  />
</section>
{/*         
<section id="about-attractive" className="bg-black py-20 sm:py-24">
  <div className="container mx-auto px-6 lg:px-8">

    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-base font-semibold text-red-500 uppercase tracking-wider">
        Why NIV BRM?
      </h2>
      <p className="mt-2 text-3xl lg:text-4xl font-bold tracking-tight text-white sm:text-4xl text-balance">
        An Integrated Approach to Business Growth
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-400">
        We don't just offer services; we build comprehensive systems designed to scale your business. Our approach is built on three core pillars.
      </p>
    </div>


    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600/10">
          <Layers className="h-6 w-6 text-red-500" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">
          Integrated Solutions
        </h3>
        <p className="mt-2 text-base text-gray-400">
          From packaging to marketing and logistics, we combine services into one seamless system for your business.
        </p>
      </div>

 
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600/10">
          <Handshake className="h-6 w-6 text-red-500" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">
          Strategic Partnerships
        </h3>
        <p className="mt-2 text-base text-gray-400">
          We work as an extension of your team, deeply understanding your goals to provide proactive, tailored support.
        </p>
      </div>

      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600/10">
          <TrendingUp className="h-6 w-6 text-red-500" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">
          Accelerated Growth
        </h3>
        <p className="mt-2 text-base text-gray-400">
          Our ultimate measure of success is yours. We focus on delivering tangible results that drive revenue and market share.
        </p>
      </div>
    </div>
  </div>
</section> */}
        {/* --- Solutions Section --- */}
        <section id="solutions" ref={solutionsRef} className="py-16 px-4 md:px-12">
            <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
                <a
                key={solution.id}
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="solution-card h-[300px] relative rounded-lg overflow-hidden group cursor-pointer">
                    <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{solution.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300"></div>
                </div>
                </a>
            ))}
            </div>
        </section>

        {/* --- Partners Section --- */}
        <section id="partners" ref={partnersRef} className="py-16 px-4 md:px-12">
            <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Partners</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
                <Link key={partner.id} href={`/learn-more/${partner.id}`}>
                <div className="partner-card h-[300px] relative rounded-lg overflow-hidden group cursor-pointer">
                    <img
                    src={partner.image || "/placeholder.svg"}
                    alt={partner.title}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{partner.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{partner.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300"></div>
                </div>
                </Link>
            ))}
            </div>
        </section>

        {/* --- Support Section --- */}
        <section id="support" ref={supportRef} className="py-16 px-4 md:px-12">
            <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Support</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {support.map((item) => (
                <Link key={item.id} href={`/learn-more/${item.id}`}>
                <div className="support-card h-[300px] relative rounded-lg overflow-hidden group cursor-pointer">
                    <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300"></div>
                </div>
                </Link>
            ))}
            </div>
        </section>
{/* --- Programs & Initiatives Section --- */}
<section id="programs" className="bg-black py-20 sm:py-24">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">Programs & Initiatives</h2>
      <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
        Specialized programs to fuel every stage of your business journey.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {programs.map((program) => (
        <div
          key={program.id}
          className="bg-[#1a1a1a] rounded-lg flex flex-col p-6 text-left"
        >
          <div className="overflow-hidden rounded-md mb-6">
            <Link href={`/programs/${program.id}`}>
              <Image
                src={program.image}
                alt={program.title}
                width={600}
                height={600}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          <div className="flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">
              <Link
                href={`/programs/${program.id}`}
                className="hover:text-red-500 transition-colors"
              >
                {program.title}
              </Link>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {program.description}
            </p>

            <div className="mt-auto">
              <Link
                href={`/programs/${program.id}`}
                className="inline-block w-full text-center px-5 py-2 text-sm font-medium border border-gray-700 rounded-full hover:bg-red-600 hover:border-red-600 transition-colors"
              >
                {program.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* --- Packages Section --- */}
      
  <section className="py-20 px-4 md:px-12 bg-black">


        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Packages</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
 Priority support, consolidated billing & Membership  discounts            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <div className="bg-[#1a1a1a] border-2 border-gray-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-red-900/20 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-red-600"> ₹1,080</span>
                <span className="text-gray-400">/one-time</span>
              </div>
              <p className="text-gray-400 mb-8">Perfect for small businesses getting started online</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">5-page responsive website</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Basic SEO optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Contact form integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Mobile-friendly design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">3 months support</span>
                </li>
              </ul>
              <Button className="w-full bg-transparent text-white border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 transition-colors">
                Get Started →
              </Button>
            </div>

            {/* Professional Package - Most Popular */}
            <div className="bg-[#1a1a1a] border-2 border-red-600 rounded-2xl p-8 relative hover:shadow-2xl hover:shadow-red-900/30 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-red-600">₹10,800</span>
                <span className="text-gray-400">/one-time</span>
              </div>
              <p className="text-gray-400 mb-8">Comprehensive solution for growing businesses</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">10-page custom website</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Advanced SEO & analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">E-commerce integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">CMS integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">6 months support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Performance optimization</span>
                </li>
              </ul>
              <Button className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors">Get Started →</Button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-[#1a1a1a] border-2 border-gray-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-red-900/20 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-red-600">₹1,08,000</span>
                <span className="text-gray-400">/one-time</span>
              </div>
              <p className="text-gray-400 mb-8">Tailored solutions for large organizations</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Unlimited pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Custom functionality</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Advanced security</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">API integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">12 months support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Dedicated project manager</span>
                </li>
              </ul>
              <Button className="w-full bg-transparent text-white border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 transition-colors">
                Get Quote →
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            {/* <Button
              variant="outline"
              className="border-2 border-gray-700 text-white hover:bg-red-600 hover:border-red-600 bg-transparent"
            >
              View All Packages
            </Button> */}
          </div>
        </div>
      </section>



      </main>

      {/* --- Footer --- */}
      
       <footer className="py-16 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo / Brand */}
          <div>
            <div ref={logoRef}>
  <Image
    src="/logo.png"        // ← your logo file (place it in /public)
    alt="NIV BRM Logo"
    width={70}            // adjust as needed
    height={10}            // adjust as needed
    priority               // improves loading performance
    className="object-contain"
  />
</div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Empowering businesses with intelligent solutions and trusted partnerships.
            </p>
          </div>

          {/* Solutions */}
        <div>
  <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
  <ul className="space-y-3 text-gray-400">
    {solutions?.map((solution) => (
      <li key={solution.id}>
        <Link
          href={solution.link} // 👈 use direct link
          className="hover:text-white transition-colors"
          target="_blank" // optional: opens in new tab
          rel="noopener noreferrer"
        >
          {solution.title}
        </Link>
      </li>
    ))}
  </ul>
</div>



          {/* Partners */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Partners</h4>
            <ul className="space-y-3 text-gray-400">
              {partners?.map((partner: any) => (
                <li key={partner.id}>
                  <Link
                    href={`/learn-more/${partner.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {partner.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400">
              {support?.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={`/learn-more/${item.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} NIV BRM. All rights reserved.</p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}





