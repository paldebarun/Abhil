
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/cancellation" element={<CancellationPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </Router>
  );
};

export default App;
