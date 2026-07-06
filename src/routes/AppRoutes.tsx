import { Route, Routes } from 'react-router'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage, PlaceholderPage, LoginPage, SignupPage, ProfilePage, ServicedetailPage, BecomesellerPage, CheckoutPage, ForgotPasswordPage, CategoryPage } from '../pages'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<CategoryPage />} />
        <Route path="become-seller" element={<BecomesellerPage />} />
        <Route path="bookings" element={<PlaceholderPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="service/:category/:coachId" element={<ServicedetailPage />} />
        <Route path="checkout/:category/:coachId" element={<CheckoutPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<PlaceholderPage />} />
        <Route path="category" element={<CategoryPage />} />
      </Route>
    </Routes>
  )
}
