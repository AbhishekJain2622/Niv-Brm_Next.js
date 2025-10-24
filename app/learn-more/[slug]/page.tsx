"use client"

import { useState } from "react"
import Link from "next/link"
import {
  PackageCheck,
  Eye,
  Brush,
  ShieldCheck,
  Thermometer,
  Droplets,
  Leaf,
  Megaphone,
  Sparkles,
  Gift,
  ShoppingBag,
  LucideIcon,
  CheckCircle, // New Icon
  Quote,         // New Icon
} from "lucide-react"

// UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// --- Your Form Components (assuming they exist at these paths) ---
import { VendorRegistrationForm } from "@/components/vendor-registration-form"
import { JoinForm } from "@/components/join-form"

// --- Placeholder Components ---
const Navigation = () => (
  <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-800 bg-[#0a0a0a] sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-white">
        NIV BRM
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link href="/#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link>
        <Link href="/#partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link>
        <Link href="/#support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
      </nav>
      <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
        Contact Us
      </Button>
    </div>
  </header>
)

const Footer = () => (
  <footer className="py-12 border-t border-gray-800 bg-black">
    <div className="container mx-auto px-6 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} NIV BRM. All rights reserved.</p>
      <div className="flex justify-center items-center gap-6 mt-4">
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
      </div>
    </div>
  </footer>
)
// --- End Placeholder Components ---

const contentData: Record<
  string,
  {
    title: string
    subtitle: string
    description: string[]
    idealFor: string[] // New data point
    features: { title: string; description: string; icon: LucideIcon }[]
    testimonial: { quote: string; author: string; company: string } // New data point
  }
> = {
  "cake-bakery": {
    title: "Cake & Bakery Solutions",
    subtitle: "Premium packaging designed to preserve freshness and elevate presentation.",
    description: [
      "In the competitive world of baking, presentation is just as crucial as taste. Our specialized packaging solutions for cakes and bakeries are crafted to meet the highest standards of quality, hygiene, and aesthetics.",
      "From sturdy cake boxes that ensure safe transport to elegant pastry containers that showcase your creations, we provide everything you need. Our materials are food-safe and designed to maintain the freshness and flavor of your baked goods, ensuring your customers enjoy them just as you intended.",
    ],
    idealFor: ["Home Bakers Scaling Up", "Artisanal Cake Shops", "Commercial Bakeries", "Pastry & Dessert Cafes"],
    features: [
      { title: "Preserve Freshness", description: "Airtight and durable materials to keep your products fresh.", icon: PackageCheck },
      { title: "Elegant Presentation", description: "Visually appealing designs that enhance your brand.", icon: Eye },
      { title: "Custom Branding", description: "Print your logo and design for a unique brand identity.", icon: Brush },
      { title: "Durable & Safe", description: "Strong construction for secure transport and handling.", icon: ShieldCheck },
    ],
    testimonial: {
      quote: "The quality and design of the boxes from NIV BRM elevated our brand instantly. Our customers constantly compliment the packaging!",
      author: "Priya Sharma",
      company: "The Cake Corner",
    },
  },
  "restaurant-qsr": {
    title: "Restaurant & QSR Packaging",
    subtitle: "Deliver excellence with packaging that matches your brand’s standard.",
    description: [
      "For restaurants and Quick Service Restaurants (QSRs), packaging is a critical part of the customer experience. Our innovative solutions are designed for performance, ensuring that your food stays fresh, travels well, and delights customers every time.",
      "We offer a wide range of products, from insulated containers for hot meals to eco-friendly options for the environmentally conscious brand. Our packaging is engineered for convenience, both for your staff during prep and for your customers on the go.",
    ],
    idealFor: ["Quick Service Restaurants", "Cloud Kitchens & Delivery", "Fine Dining Takeaway", "Food Trucks & Stalls"],
    features: [
      { title: "Temp Retention", description: "Insulated solutions for hot and cold food items.", icon: Thermometer },
      { title: "Leak-Proof Design", description: "Secure lids and seals to prevent spills during transit.", icon: Droplets },
      { title: "Eco-Friendly Options", description: "Sustainable and compostable materials available.", icon: Leaf },
      { title: "Brand Reinforcement", description: "Customizable packaging that carries your brand message.", icon: Megaphone },
    ],
    testimonial: {
      quote: "Switching to NIV BRM for our delivery packaging was a game-changer. Food arrives hotter, spills are zero, and our branding looks top-notch.",
      author: "Rohan Gupta",
      company: "Curry On The Go",
    },
  },
  "sweet-farshan": {
    title: "Sweet & Farshan Packaging",
    subtitle: "Give your traditional sweets the elegant packaging they deserve.",
    description: [
      "Traditional sweets and savories (farshan) are a cherished part of our culture, often associated with celebrations and gifting. Our packaging is designed to honor that tradition with elegance and care.",
      "We create beautiful boxes and containers that not only protect the delicate contents but also enhance their appeal. Using high-quality, food-grade materials, we ensure that the flavors and aromas are perfectly preserved.",
    ],
    idealFor: ["Traditional Sweet Shops", "Corporate Gifting Services", "Wedding & Event Caterers", "Festive Hamper Businesses"],
    features: [
      { title: "Aesthetic Designs", description: "Designs that reflect cultural and festive themes.", icon: Sparkles },
      { title: "Flavor Integrity", description: "Materials that won't alter the taste or aroma of the contents.", icon: ShieldCheck },
      { title: "Gifting Ready", description: "Premium look and feel, perfect for special occasions.", icon: Gift },
      { title: "Product Showcase", description: "Clear windows and inserts to display your sweets beautifully.", icon: ShoppingBag },
    ],
    testimonial: {
      quote: "Our festive sales doubled this year, and a big part of that was the premium, gift-ready boxes we got from NIV BRM. Absolutely stunning quality.",
      author: "Meera Patel",
      company: "Surat Sweets & Co.",
    },
  },
}

export default function LearnMorePage({ params }: { params: { slug: string } }) {
  const [showVendorForm, setShowVendorForm] = useState(false)
  const [showJoinForm, setShowJoinForm] = useState(false)

  const content = contentData[params.slug] || {
    title: "Service Not Found",
    subtitle: "The service you are looking for does not exist.",
    description: ["Please navigate back to the homepage and select a valid service from our business segments."],
    idealFor: [],
    features: [],
    testimonial: { quote: "", author: "", company: "" },
  }

  if (showVendorForm) {
    return <VendorRegistrationForm onClose={() => setShowVendorForm(false)} serviceName={content.title} />
  }

  if (showJoinForm) {
    return <JoinForm onClose={() => setShowJoinForm(false)} serviceName={content.title} />
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-[#111]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/30">
              Business Segment
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              {content.title}
            </h1>
            <p className="text-xl text-gray-400 text-pretty">{content.subtitle}</p>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <div className="text-gray-300 space-y-4 text-pretty">
                {content.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Ideal For Section */}
        <section className="py-16 bg-[#111]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Perfect For Your Business</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {content.idealFor.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">Key Features</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
                Tailored benefits for the {content.title.replace(" Solutions", "").replace(" Packaging", "")} industry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="text-center h-full bg-[#1a1a1a] border-gray-800 hover:border-red-600/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-pretty">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* NEW: Testimonial Section */}
        <section className="py-20 bg-[#111]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Quote className="w-12 h-12 text-red-600/50 mx-auto mb-4" />
                <p className="text-2xl font-medium text-white leading-relaxed text-balance">
                    "{content.testimonial.quote}"
                </p>
                <div className="mt-6">
                    <p className="font-semibold text-lg text-white">{content.testimonial.author}</p>
                    <p className="text-gray-400">{content.testimonial.company}</p>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">Ready to Elevate Your Brand?</h2>
            <p className="text-xl text-gray-400 mb-8 text-pretty">
              Let's discuss how our packaging solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                onClick={() => setShowVendorForm(true)}
              >
                Register as Vendor
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg"
                onClick={() => setShowJoinForm(true)}
              >
                Join Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}