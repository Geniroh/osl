import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Booking from "../pages/Booking"
import BookingDetails from "../pages/BookingDetails"
import Payment from "../pages/Payment"
import PromoPage from "../pages/Promo"
import PaymentDetails from "../pages/PaymentDetails"

const BaseRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/promo" element={<PromoPage />} />
    </Routes>
  )
}

export default BaseRoutes