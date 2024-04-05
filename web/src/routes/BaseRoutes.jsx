import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Booking from "../pages/Booking"
import BookingDetails from "../pages/BookingDetails"

const BaseRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-details" element={<BookingDetails />} />
    </Routes>
  )
}

export default BaseRoutes