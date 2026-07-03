import React, { useState, useEffect } from 'react'
import { Button, Container } from '../components/common'
import { useNavigate, useParams } from 'react-router'
import { getServiceDetail } from '../firebase'
import type { ServiceDetailData } from '../data/types'
import { ShoppingCart, ArrowLeft, CheckCircle2 } from 'lucide-react'

export function CheckoutPage() {
  const navigate = useNavigate()
  const { category, coachId } = useParams<{ category: string; coachId: string }>()
  const [serviceData, setServiceData] = useState<ServiceDetailData | null>(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    branch: '',
    year: '',
    hostel: '',
    phoneNumber: '',
    projectRequirements: '',
    deliveryInstructions: '',
    agreeTerms: false
  })
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (!category || !coachId) return
      
      try {
        const data = await getServiceDetail(coachId, category)
        setServiceData(data)
      } catch (error) {
        console.error('Error fetching service:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [category, coachId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value, type, checked } = target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate checkout process
    setTimeout(() => {
      setIsProcessing(false)
      alert('Order placed successfully! 🎉')
      navigate('/')
    }, 2000)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted">Loading...</p>
      </div>
    )
  }

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted mb-4">Service not found</p>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    )
  }

  const { hero, about } = serviceData

  return (
    <section className="py-8">
      <Container>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted hover:text-ink mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Service</span>
        </button>

        <h1 className="text-3xl font-bold text-ink mb-8">
          <ShoppingCart className="inline-block mr-2 h-8 w-8 text-brand" />
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-2xl font-semibold text-ink mb-6">Your Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-ink">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="rollNumber" className="block text-sm font-medium text-ink">
                    Roll Number *
                  </label>
                  <input
                    id="rollNumber"
                    name="rollNumber"
                    type="text"
                    required
                    placeholder="e.g., 22CS1001"
                    value={formData.rollNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="branch" className="block text-sm font-medium text-ink">
                    Branch *
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand bg-white"
                  >
                    <option value="">Select your branch</option>
                    <option value="CSE">Computer Science & Engineering (CSE)</option>
                    <option value="ECE">Electronics & Communication Engineering (ECE)</option>
                    <option value="EE">Electrical Engineering (EE)</option>
                    <option value="ME">Mechanical Engineering (ME)</option>
                    <option value="CE">Civil Engineering (CE)</option>
                    <option value="BS">Chemical Engineering (BS)</option>
                    <option value="MME">Metallurgical & Materials Engineering (MME)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="year" className="block text-sm font-medium text-ink">
                    Year *
                  </label>
                  <select
                    id="year"
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand bg-white"
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="hostel" className="block text-sm font-medium text-ink">
                    Hostel *
                  </label>
                  <input
                    id="hostel"
                    name="hostel"
                    type="text"
                    required
                    placeholder="e.g., Hostel - 1"
                    value={formData.hostel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-ink">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="e.g., +91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="projectRequirements" className="block text-sm font-medium text-ink">
                  Project Requirements *
                </label>
                <textarea
                  id="projectRequirements"
                  name="projectRequirements"
                  required
                  placeholder="Tell us about your project, requirements, expectations, etc."
                  rows={4}
                  value={formData.projectRequirements}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="deliveryInstructions" className="block text-sm font-medium text-ink">
                  Delivery Instructions
                </label>
                <textarea
                  id="deliveryInstructions"
                  name="deliveryInstructions"
                  placeholder="Any specific instructions about delivery, deadlines, etc."
                  rows={3}
                  value={formData.deliveryInstructions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand"
                />
              </div>

              <div className="flex items-start gap-3 pt-4">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  required
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-brand rounded focus:ring-brand"
                />
                <label htmlFor="agreeTerms" className="text-sm text-muted">
                  I agree to the <span className="text-brand font-medium hover:underline cursor-pointer">Terms & Conditions</span> and understand that all payments are final and subject to the seller's policies.
                </label>
              </div>

              <Button type="submit" className="w-full mt-8 text-lg py-4" showArrow disabled={isProcessing}>
                {isProcessing ? 'Processing Order...' : 'Place Order & Pay ₹499'}
              </Button>
            </form>
          </div>

          {/* Sidebar: Price Box */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand" />
                Order Summary
              </h3>

              <div className="mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={hero.imageurl || 'https://via.placeholder.com/60'}
                    alt={hero.title}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-ink truncate">{hero.title}</p>
                    <p className="text-sm text-muted truncate">{about.name}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Service Fee</span>
                  <span className="text-ink">₹499</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Platform Fee</span>
                  <span className="text-ink">₹0</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Taxes (if applicable)</span>
                  <span className="text-ink">₹0</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-ink">Total Amount</span>
                  <span className="text-2xl font-bold text-brand">₹499</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs text-center text-muted">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto mb-1" />
                  Secure Payment
                </p>
                <p className="text-xs text-center text-muted mt-1">
                  Your payment is protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
