"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface JoinFormProps {
  onClose: () => void
  serviceName: string
}

export function JoinForm({ onClose, serviceName }: JoinFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    // company: "",
    // role: "",
    // message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Join form submitted:", formData)
    alert("Thank you for your interest! We will be in touch shortly.")
    onClose()
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#1a1a1a] rounded-2xl p-8 relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-white mb-2">Join Our Network</h2>
        <p className="text-gray-400 mb-8">Get started with {serviceName}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="fullName" className="text-white mb-2 block">
              Full Name *
            </Label>
            <Input
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="bg-[#2f2f2f] border-gray-700 text-white"
              placeholder="Enter your full name"
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

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              {/* <Label htmlFor="company" className="text-white mb-2 block">
                Company
              </Label> */}
              {/* <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-[#2f2f2f] border-gray-700 text-white"
                placeholder="Your company name"
              /> */}
            </div>

            <div>
              {/* <Label htmlFor="role" className="text-white mb-2 block">
                Role
              </Label> */}
              {/* <Input
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="bg-[#2f2f2f] border-gray-700 text-white"
                placeholder="Your role/position"
              /> */}
            </div>
          </div>

          <div>
            {/* <Label htmlFor="message" className="text-white mb-2 block">
              Message
            </Label> */}
            {/* <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#2f2f2f] border-gray-700 text-white min-h-[120px]"
              placeholder="Tell us about your interest..."
            /> */}
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6">
              Submit Application
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
