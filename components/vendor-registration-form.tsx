"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface VendorRegistrationFormProps {
  onClose: () => void
  serviceName: string
}

export function VendorRegistrationForm({ onClose, serviceName }: VendorRegistrationFormProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Vendor registration submitted:", formData)
    alert("Thank you for registering! We will contact you soon.")
    onClose()
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#1a1a1a] rounded-2xl p-8 relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-white mb-2">Register as Vendor</h2>
        <p className="text-gray-400 mb-8">Join our partner network for {serviceName}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="companyName" className="text-white mb-2 block">
              Company Name *
            </Label>
            <Input
              id="companyName"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="bg-[#2f2f2f] border-gray-700 text-white"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <Label htmlFor="contactName" className="text-white mb-2 block">
              Contact Name *
            </Label>
            <Input
              id="contactName"
              required
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              className="bg-[#2f2f2f] border-gray-700 text-white"
              placeholder="Enter contact person name"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#2f2f2f] border-gray-700 text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-white mb-2 block">
                Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-[#2f2f2f] border-gray-700 text-white"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="website" className="text-white mb-2 block">
              Website
            </Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="bg-[#2f2f2f] border-gray-700 text-white"
              placeholder="https://yourcompany.com"
            />
          </div>

          <div>
            <Label htmlFor="description" className="text-white mb-2 block">
              Company Description *
            </Label>
            <Textarea
              id="description"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-[#2f2f2f] border-gray-700 text-white min-h-[120px]"
              placeholder="Tell us about your company and services..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6">
              Submit Registration
            </Button>
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 py-6 bg-transparent">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
