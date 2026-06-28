
import { Route, Routes } from 'react-router'
 import { MainLayout } from '../layouts/MainLayout'
import { HomePage, PlaceholderPage, LoginPage, SignupPage, ProfilePage } from '../pages'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<PlaceholderPage />} />
        <Route path="become-seller" element={<PlaceholderPage />} />
        <Route path="bookings" element={<PlaceholderPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<PlaceholderPage />} />
      </Route>
    </Routes>
  )
}
