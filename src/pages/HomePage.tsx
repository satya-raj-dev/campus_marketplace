import { Categories } from '../components/categories'
import { SellerCta } from '../components/cta'
import { Hero } from '../components/hero'
import { HowItWorks } from '../components/howItWorks'
// import { PopularServices } from '../components/services'

export function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      {/* <PopularServices /> */}
      <SellerCta />
      <HowItWorks />
    </>
  )
}
