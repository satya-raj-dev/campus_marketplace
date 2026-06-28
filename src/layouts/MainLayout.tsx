import { Outlet } from 'react-router'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'

export function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
