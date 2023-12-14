import React from "react";
// import ContactSection from "../components/core/ContactPage/ContactSection";
import Footer from "../components/common/Footer";
import ContactForm from "../components/core/ContactPage/ContactForm";
import ContactDetails from "../components/core/ContactPage/ContactDetails";
import ReviewSlider from "../components/common/ReviewSlider";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* Review Slider here */}
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
