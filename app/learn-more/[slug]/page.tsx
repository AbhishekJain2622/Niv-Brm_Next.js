"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { VendorRegistrationForm } from "@/components/vendor-registration-form"
import { JoinForm } from "@/components/join-form"

const contentData: Record<string, { title: string; description: string; features: string[]; image: string }> = {
  rap: {
    title: "Resource Allocation Platform (RAP)",
    description:
      "Our Resource Allocation Platform revolutionizes how organizations manage and distribute their resources. With advanced algorithms and real-time analytics, RAP ensures optimal resource utilization across all departments and projects.",
    features: [
      "Real-time resource tracking and allocation",
      "Advanced analytics and reporting dashboards",
      "Automated scheduling and conflict resolution",
      "Integration with existing project management tools",
      "Customizable workflows and approval processes",
      "Mobile app for on-the-go resource management",
    ],
    image: "/resource-allocation-platform-dashboard.jpg",
  },
  bat: {
    title: "Business Analytics Tools (BAT)",
    description:
      "Transform your data into actionable insights with our comprehensive Business Analytics Tools. BAT provides powerful visualization, predictive analytics, and AI-driven recommendations to help you make data-driven decisions.",
    features: [
      "Interactive dashboards and visualizations",
      "Predictive analytics and forecasting",
      "AI-powered insights and recommendations",
      "Custom report builder with drag-and-drop interface",
      "Real-time data processing and alerts",
      "Integration with multiple data sources",
    ],
    image: "/business-analytics-dashboard-charts.jpg",
  },
  prof: {
    title: "Professional Services (Prof)",
    description:
      "Our team of expert consultants provides comprehensive professional services to help your business achieve its goals. From strategy development to implementation, we're with you every step of the way.",
    features: [
      "Strategic planning and business consulting",
      "Digital transformation guidance",
      "Process optimization and automation",
      "Change management support",
      "Training and knowledge transfer",
      "Ongoing support and maintenance",
    ],
    image: "/professional-consulting-services-team.jpg",
  },
  krm: {
    title: "Knowledge Resource Management (KRM)",
    description:
      "Centralize and organize your organization's knowledge with our comprehensive KRM solution. Enable seamless knowledge sharing, collaboration, and discovery across your entire organization.",
    features: [
      "Centralized knowledge repository",
      "Advanced search and discovery",
      "Collaborative editing and version control",
      "AI-powered content recommendations",
      "Access control and permissions management",
      "Integration with communication tools",
    ],
    image: "/knowledge-management-system.png",
  },
  raw: {
    title: "Resource Allocation Workflow (RAW)",
    description:
      "Streamline your workflow processes with RAW. Our intelligent workflow management system automates routine tasks, reduces bottlenecks, and improves overall operational efficiency.",
    features: [
      "Visual workflow designer",
      "Automated task routing and assignment",
      "Real-time progress tracking",
      "Customizable approval workflows",
      "Integration with existing systems",
      "Performance metrics and analytics",
    ],
    image: "/workflow-automation-system.jpg",
  },
  logistics: {
    title: "Supply Chain & Logistics",
    description:
      "Optimize your supply chain operations with our end-to-end logistics solution. From inventory management to last-mile delivery, we provide the tools you need to run an efficient logistics operation.",
    features: [
      "Real-time inventory tracking",
      "Route optimization and planning",
      "Warehouse management system",
      "Supplier and vendor management",
      "Shipment tracking and notifications",
      "Analytics and performance reporting",
    ],
    image: "/logistics-supply-chain.png",
  },
  crm: {
    title: "Customer Relationship Management (CRM)",
    description:
      "Build stronger customer relationships with our advanced CRM solution. Track interactions, manage sales pipelines, and deliver exceptional customer experiences at every touchpoint.",
    features: [
      "360-degree customer view",
      "Sales pipeline management",
      "Marketing automation",
      "Customer support ticketing",
      "Email and communication tracking",
      "Reporting and analytics",
    ],
    image: "/customer-relationship-management-crm.jpg",
  },
  admin: {
    title: "Administrative Services",
    description:
      "Simplify your administrative tasks with our comprehensive administrative services platform. From document management to compliance tracking, we handle the details so you can focus on your core business.",
    features: [
      "Document management and storage",
      "Compliance tracking and reporting",
      "Employee onboarding and offboarding",
      "Expense management and approval",
      "Calendar and scheduling tools",
      "Automated reminders and notifications",
    ],
    image: "/administrative-services-management.jpg",
  },
  legal: {
    title: "Legal & Compliance",
    description:
      "Navigate complex legal and regulatory requirements with confidence. Our legal and compliance services provide expert guidance, risk assessment, and ongoing support to keep your business compliant.",
    features: [
      "Regulatory compliance monitoring",
      "Contract management and review",
      "Risk assessment and mitigation",
      "Legal document templates",
      "Compliance training and education",
      "Audit support and preparation",
    ],
    image: "/legal-compliance-services.jpg",
  },
}

export default function LearnMorePage({ params }: { params: { slug: string } }) {
  const [showVendorForm, setShowVendorForm] = useState(false)
  const [showJoinForm, setShowJoinForm] = useState(false)

  const content = contentData[params.slug] || {
    title: "Service Details",
    description: "Learn more about our comprehensive services and solutions.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    image: "/placeholder.svg?height=400&width=800",
  }

  if (showVendorForm) {
    return <VendorRegistrationForm onClose={() => setShowVendorForm(false)} serviceName={content.title} />
  }

  if (showJoinForm) {
    return <JoinForm onClose={() => setShowJoinForm(false)} serviceName={content.title} />
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="py-6 px-4 md:px-12 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg">Back to Home</span>
          </Link>
          <div className="text-2xl font-bold text-white">NIV BRM</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img src={content.image || "/placeholder.svg"} alt={content.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{content.title}</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed mb-12">{content.description}</p>

          <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#1a1a1a] p-4 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <Button
              size="lg"
              onClick={() => setShowVendorForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              Register as Vendor
            </Button>
            <Button
              size="lg"
              onClick={() => setShowJoinForm(true)}
              className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-lg"
            >
              Join Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 mt-16">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 NIV BRM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
