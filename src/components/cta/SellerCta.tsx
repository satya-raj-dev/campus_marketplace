import { UsersRound } from 'lucide-react'
import { AvatarStack, Button, Container, MotionSection } from '../common'

export function SellerCta() {
  return (
    <section className="py-10">
      <Container>
        <MotionSection className="overflow-hidden rounded-[2rem] border border-brand/20 bg-gradient-to-r from-indigo-50 via-white to-sky-50 p-6 shadow-xl shadow-slate-200/70 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-brand to-indigo-700 text-white shadow-xl shadow-brand/25">
                <UsersRound className="h-10 w-10" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-2xl font-black text-ink sm:text-3xl">
                  Have a skill to share?
                </h2>
                <p className="mt-2 max-w-xl text-base leading-7 text-muted">
                  Join hundreds of students earning through their talent.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Button to="/become-seller" size="lg" showArrow>
                Become a Seller
              </Button>
              <div className="flex items-center gap-4">
                <AvatarStack />
                <p className="max-w-36 text-sm font-semibold text-slate-700">
                  <span className="block text-ink">500+ students</span>
                  earning with us
                </p>
              </div>
            </div>
          </div>
        </MotionSection>
      </Container>
    </section>
  )
}
