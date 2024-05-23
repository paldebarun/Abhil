
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Faq from "./components/FAQ/Faq";
import Appointment from "./components/Appointment/Appointment";
import ScrollToTop from "./utils/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Donation from "./components/Donation/Donation";
import PaymentSuccess from "./components/Donation/PaymentSuccess";
import Checkout from "./components/Donation/CheckoutForm";
import PaymentPage from "./components/Donation/PaymentPage";
import TermsCondition from "./pages/TermsCondition";
import RefundPolicy from "./pages/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import { FaHeart } from "react-icons/fa";
import ChatBotPage from "./pages/ChatBotPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donation-now" element={<Checkout />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/cancellation" element={<CancellationPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/chat-bot" element={<ChatBotPage />} />
      </Routes>
      <Footer />
      <div className="fixed bottom-4 xs:bottom-8 left-4 xs:left-8 z-[9999]">
        <Link to={'/donation-now'}>
          <button className="w-14 xs:w-44 gap-x-2 flex items-center justify-center rounded-full bg-green-600 text-white text-lg font-semibold py-3 cursor-pointer z-[9999] shadow-md shadow-green-50"> <FaHeart /> <span className="max-xs:hidden">Donate now</span> </button>
        </Link>
      </div>
      <div className="fixed bottom-4 xs:bottom-8 right-4 xs:right-8 z-[9999]">
        <Link to={'/chat-bot'}>
          <button className="w-14 xs:w-44 gap-x-2 flex items-center justify-center rounded-full bg-yellow-600 text-white text-lg font-semibold py-3 cursor-pointer z-[9999] shadow-md shadow-green-50">  <span className="max-xs:hidden">Chat Bot</span> </button>
        </Link>
      </div>

      <ScrollToTop />
      <Toaster />
    </Router>
  );
};

export default App;
