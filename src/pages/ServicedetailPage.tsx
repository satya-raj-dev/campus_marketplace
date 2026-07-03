import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import {
  Star,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ChevronDown,
  ChevronUp,
  Calendar,
} from 'lucide-react'
import { Container, Button } from '../components/common'
import { getServiceDetail } from '../firebase'
import type { ServiceDetailData } from '../data/types'
import { cn } from '../utils/cn'

export function ServicedetailPage() {
  const { coachId, category } = useParams<{ coachId: string; category: string }>()
  const [serviceData, setServiceData] = useState<ServiceDetailData | null>(null)
  const [loading, setLoading] = useState(true)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  // Sample FAQs
  const faqs = [
    { id: '1', question: 'How does this work?', answer: 'You can book the service, and the seller will contact you soon.' },
    { id: '2', question: 'Refund Policy?', answer: 'We offer a 7-day money-back guarantee if you are not satisfied.' },
    { id: '3', question: 'Need Custom Offer?', answer: 'Contact the seller directly to discuss your requirements.' },
  ]

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  useEffect(() => {
    const fetchData = async () => {
      if (coachId && category) {
        const data = await getServiceDetail(coachId, category)
        setServiceData(data)
      }
      setLoading(false)
    }

    fetchData()
  }, [coachId, category])

  if (loading) {
    return (
      <section className="min-h-[calc(100vh-200px)] py-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4" />
          <p className="text-muted">Loading service details...</p>
        </div>
      </section>
    )
  }

  if (!serviceData) {
    return (
      <section className="min-h-[calc(100vh-200px)] py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-ink">Service Not Found</h1>
          </div>
        </Container>
      </section>
    )
  }

  const { hero, about, aboutService, reviews, packages } = serviceData

  return (
    <section className="py-8">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted flex items-center gap-2">
          <span>Home</span>
          <span>/</span>
          <span className="capitalize">{category}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-ink mb-3">{hero.title}</h1>
                    <p className="text-muted leading-relaxed mb-4">{hero.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-amber-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-current" />
                        ))}
                        <span className="text-ink font-semibold ml-1">4.8</span>
                        <span className="text-muted">({reviews.length} reviews)</span>
                      </div>
                      <span className="text-muted">•</span>
                      <span className="text-ink font-semibold">{hero.order_completed} Orders Completed</span>
                    </div>
                  </div>
                  <div className="w-full md:w-64">
                    {hero.imageurl && (
                      <img
                        src={hero.imageurl}
                        alt={hero.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* About This Service */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-ink mb-4">About This Service</h2>
              <p className="text-muted leading-relaxed mb-6">{aboutService.description}</p>

              {aboutService.highlight && aboutService.highlight.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-ink mb-3">What You'll Get</h3>
                  <ul className="space-y-2">
                    {aboutService.highlight.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {aboutService.ideal_for && aboutService.ideal_for.length > 0 && (
                <div>
                  <h3 className="font-semibold text-ink mb-3">Ideal For</h3>
                  <div className="flex flex-wrap gap-2">
                    {aboutService.ideal_for.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Packages */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-ink mb-6">Packages</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {packages.map((pkg, index) => (
                  <div
                    key={pkg.name}
                    className={cn(
                      'border rounded-xl p-6 flex flex-col',
                      index === 1
                        ? 'border-brand bg-brand/5 relative'
                        : 'border-slate-200'
                    )}
                  >
                    {index === 1 && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-ink mb-2">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-brand mb-4">{pkg.price}</p>
                    <ul className="flex-1 space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={cn(
                        'w-full',
                        index === 1 ? 'bg-brand hover:bg-brand-dark' : 'bg-white text-brand hover:bg-brand/10'
                      )}
                    >
                      Choose {pkg.name}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-ink mb-6">Reviews ({reviews.length})</h2>
              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-slate-100 pb-6 last:border-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-ink font-semibold">
                          {review.userid.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-ink">{review.userid}</p>
                          <div className="flex items-center gap-1.5 text-amber-500 text-sm">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={cn('h-3 w-3', star <= review.rating ? 'fill-current' : 'text-slate-200')}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted leading-relaxed">{review.description}</p>
                      <p className="text-xs text-muted mt-2">
                        {review.date.toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted">No reviews yet.</p>
              )}
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border border-slate-200 rounded-xl">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between font-medium text-ink"
                    >
                      {faq.question}
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-muted" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-4 pb-4 text-muted text-sm">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price and Book */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="mb-6">
                <p className="text-sm text-muted mb-1">Starting From</p>
                <p className="text-3xl font-bold text-brand">₹499</p>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-brand" />
                  <span className="text-muted">Delivery in 3-5 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-brand" />
                  <span className="text-muted">Unlimited Revisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand" />
                  <span className="text-muted">100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand" />
                  <span className="text-muted">Money-back guarantee</span>
                </div>
              </div>

              <Button className="w-full mb-3" showArrow to="/book-now">
                Book Now
              </Button>

              <Button className="w-full" variant="secondary">
                Chat with Seller
              </Button>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-center text-muted">
                  <ShieldCheck className="h-4 w-4 text-green-500 mx-auto mb-1" />
                  Secure Payment
                </p>
                <p className="text-xs text-center text-muted mt-1">
                  Your payment is safe with us
                </p>
              </div>
            </div>

            {/* Seller Info - NORMAL SCROLL! */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-semibold text-ink mb-4">About the Seller</h3>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={about.profile_picture || 'https://via.placeholder.com/80'}
                  alt={about.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-ink">{about.name}</p>
                  <p className="text-sm text-muted">
                    {about.branch}, {about.year}th Year
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-ink font-bold">{hero.order_completed}</p>
                  <p className="text-muted text-xs">Orders Completed</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-ink font-bold">92%</p>
                  <p className="text-muted text-xs">Response Rate</p>
                </div>
              </div>

              <Button className="w-full" variant="secondary">
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
