"use client";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// 🔥 Full program data
const programs = {
  "startup-india": {
    title: "Start Up India Program",
    subtitle:
      "Designed to ignite India's next wave of unicorns with structured support, branding, and scalable systems.",
    description: [
      "The Start Up India Program by NIV Business Solutions is designed to ignite India’s next wave of unicorns. We help early-stage entrepreneurs establish their brand, streamline operations, and prepare for scalable growth.",
    ],
    points: [
      "End-to-end branding and packaging solutions",
      "Affordable printing services for startup budgets",
      "Access to expert design consultations",
      "Guidance on scaling from local to global markets",
      "Priority inclusion in our BRM ecosystem",
    ],
    image:
      "https://nivpap.com/wp-content/uploads/2025/09/Start-up-india-Program.webp",
  },

  "go-global": {
    title: "Go Global Program",
    subtitle:
      "Take your business to international markets with logistics, compliance, warehousing, and global branding support.",
    description: [
      "Expand your business beyond India with Go Global. We simplify exports by taking care of documentation, logistics, branding, and compliance so you can focus on growth.",
    ],
    points: [
      "End-to-end export support: registration, compliance, logistics",
      "Partnerships with leading logistics providers (DHL, FedEx, Bluedart)",
      "Packaging solutions designed for global standards",
      "Guidance on certifications and international regulations",
      "Seamless expansion to new markets with minimal hassle",
    ],
    image:
      "https://nivpap.com/wp-content/uploads/2025/09/Fo-Global-Program.webp",
  },

  "msme-plus": {
    title: "MSME Plus Program",
    subtitle:
      "A complete ecosystem for MSMEs including packaging, IT systems, analytics, and marketing solutions.",
    description: [
      "Running a small or medium enterprise is complex — MSMEplus simplifies it. We act as your single partner for printing, packaging, branding, and business growth solutions, reducing dependency and boosting efficiency.",
    ],
    points: [
      "One-stop business solution provider",
      "Cost-effective bundled services",
      "Reduced dependency on multiple vendors",
      "Reliable delivery and customer support",
      "Scalable support for growing businesses",
    ],
    image: "https://nivpap.com/wp-content/uploads/2025/09/MSME-program.webp",
  },
};

export default function ProgramPage({ params }) {
  const data = programs[params.slug];

  if (!data) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
 <section className="py-16 px-6 text-center bg-[#0b1225]">
  <h1 className="text-4xl font-semibold text-white mb-3">
    {data.title}
  </h1>

  <div className="text-gray-400 flex justify-center gap-2">
    <Link href="/" className="hover:text-white cursor-pointer">
      Home
    </Link>
    <span className="text-red-500">›</span>
    <span className="text-red-500">{data.title}</span>
  </div>
</section>


      {/* MAIN CONTENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Program Overview</h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            {data.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* POINTS */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">What You Get</h3>
            <ul className="space-y-4">
              {data.points.map((p, i) => (
                <li key={i} className="flex gap-3 items-start text-gray-300">
                  <CheckCircle className="text-red-500 mt-1 w-6 h-6" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          {/* <div className="mt-12">
            <Button className="bg-red-600 hover:bg-red-700 px-8 py-6 text-lg rounded-full">
              Apply Now →
            </Button>
          </div> */}
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center">
          <Image
            src={data.image}
            alt={data.title}
            width={550}
            height={550}
            className="rounded-xl shadow-xl object-contain"
          />
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-6 bg-[#0d0d0d] border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">
            Go Global – Application Form
          </h2>
          <p className="text-gray-400 mt-2">
            Collect exporters/importers looking for international expansion.
          </p>
        </div>

        {/* FORM */}
        <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          {/* Full Name */}
          <div>
            <label className="text-white block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="text-white block mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-white block mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="text-white block mb-1">Mobile Number</label>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white"
              required
            />
          </div>

          {/* Business Website */}
          <div>
            <label className="text-white block mb-1">Business Website</label>
            <input
              type="text"
              placeholder="Business Website"
              className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white"
              required
            />
          </div>

          {/* Annual Turnover */}
          <div>
            <label className="text-white block mb-1">Annual Turnover</label>
            <select className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white">
              <option>&lt;₹1 Cr</option>
              <option>₹1–5 Cr</option>
              <option>₹5–20 Cr</option>
              <option>₹20–50 Cr</option>
              <option>₹50 Cr+</option>
            </select>
          </div>

          {/* Logistics Requirement */}
          <div>
            <label className="text-white block mb-1">Logistics Requirement</label>
            <select className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white">
              <option>Air</option>
              <option>Sea</option>
              <option>Both</option>
            </select>
          </div>

          {/* Export Category */}
          <div>
            <label className="text-white block mb-1">Export Category</label>
            <select className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white">
              <option>Food & Agro</option>
              <option>Textiles</option>
              <option>FMCG</option>
              <option>Engineering</option>
              <option>IT</option>
              <option>Other</option>
            </select>
          </div>

          {/* Target Markets */}
          <div>
            <label className="text-white block mb-2">Target Markets</label>
            <div className="flex flex-wrap gap-4 text-white">
              {["US", "Europe", "Middle East", "Africa", "Asia-Pacific", "Other"].map(
                (item, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="checkbox" className="accent-red-600" />
                    {item}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Existing Export Certifications */}
          <div>
            <label className="text-white block mb-2">
              Existing Export Certifications
            </label>
            <div className="flex flex-wrap gap-4 text-white">
              {["FSSAI", "APEDA", "CE", "ISO", "None", "Other"].map(
                (item, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="checkbox" className="accent-red-600" />
                    {item}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="text-white block mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about your global expansion needs"
              className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-6">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full">
              Apply for Go Global
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
