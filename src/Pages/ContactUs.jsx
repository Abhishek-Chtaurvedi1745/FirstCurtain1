import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formData;
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First Name is required!";
    else if (firstName.length < 2 || firstName.length > 20)
      newErrors.firstName = "First Name must be 2 to 20 characters!";
    else if (/\d/.test(firstName))
      newErrors.firstName = "First Name cannot contain numbers!";

    if (!lastName) newErrors.lastName = "Last Name is required!";
    else if (lastName.length < 2 || lastName.length > 20)
      newErrors.lastName = "Last Name must be 2 to 20 characters!";
    else if (/\d/.test(lastName))
      newErrors.lastName = "Last Name cannot contain numbers!";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.email = "Email is required!";
    else if (!emailRegex.test(email))
      newErrors.email = "Invalid email address!";

    const phoneRegex = /^[0-9]{4,15}$/;
    if (!phone) newErrors.phone = "Phone number is required!";
    else if (!phoneRegex.test(phone))
      newErrors.phone = "Invalide Phone number!";

    if (!message) newErrors.message = "Message is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSuccess("");
      return;
    }

    setLoading(true); 

    try {
      const res = await fetch("http://localhost:8800/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.firstName + " " + formData.lastName,
          mobile: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
      } else {
        setSuccess("");
        alert(data.message || "Failed to send message ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false); 
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-md border ${
      errors[field] ? "border-red-600" : "border-gray-400"
    }`;

  return (
    <>
      
      <section className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/assets/carpet.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-10 md:p-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <div className="flex items-center space-x-2 text-gray-300">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      <section className="bg-white relative">
        <div className="bg-white bg-opacity-90 relative pt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex flex-col lg:flex-row gap-16">

              <div className="lg:w-2/3">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <h2 className="text-4xl font-extrabold text-center">
                    Get in Touch
                  </h2>

                  {success && (
                    <p className="text-green-600 font-semibold text-center">
                      {success}
                    </p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className={inputClass("firstName")}
                        autoComplete="Off"
                      />
                      <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      {errors.firstName && (
                        <p className="text-red-600 text-sm">{errors.firstName}</p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className={inputClass("lastName")}
                      />
                      <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      {errors.lastName && (
                        <p className="text-red-600 text-sm">{errors.lastName}</p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        className={inputClass("email")}
                      />
                      <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      {errors.email && (
                        <p className="text-red-600 text-sm">{errors.email}</p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className={inputClass("phone")}
                      />
                      <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      {errors.phone && (
                        <p className="text-red-600 text-sm">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className={inputClass("message")}
                    ></textarea>
                    <FaComment className="absolute right-4 top-3 text-gray-500" />
                    {errors.message && (
                      <p className="text-red-600 text-sm">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex items-center justify-center gap-3 px-10 py-4 rounded-lg font-bold text-white
                      ${
                        loading
                          ? "bg-blue-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      }
                    `}
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>

              <div className="lg:w-1/3 pb-20">
                <div className="bg-[#0383b3] text-white p-10 rounded-2xl shadow-xl h-full">
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <p>Have questions? We’re here to help.</p>
                  <p className="mt-4">Email: firstcurtain@gmail.com</p>
                  <p>Phone: +6596905777</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
