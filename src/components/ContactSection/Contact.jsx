'use client';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '', // selected service
    serviceOther: '', // if "Others" is selected
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); // ✅ Loader state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    } else if (!/^[A-Za-z]{2,}$/.test(formData.firstName)) {
      newErrors.firstName = 'First name must be at least 2 letters.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    } else if (!/^[A-Za-z]{2,}$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name must be at least 2 letters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    } else if (formData.service === 'Others' && !formData.serviceOther.trim()) {
      newErrors.service = 'Please specify the service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setIsLoading(true); // ✅ Start loader

    try {
      const res = await axios.post('/api/contact', formData);
      if (res.status === 200 && res.data.success) {
        toast.success('✅ Your message has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          serviceOther: '',
          message: '',
        });
        setErrors({});
      } else {
        toast.error('❌ Failed to send message. Please try again later.');
      }
    } catch (err) {
      toast.error('⚠️ Something went wrong!');
    } finally {
      setIsLoading(false); // ✅ Stop loader
    }
  };

  return (
    <>
      <div className=" flex justify-center  pt-15 container-custom  bg-gradient-to-br">
        <div className=" xl:max-w-7xl [@media(min-width:1440px)_and_(max-width:1535px)]:max-w-6xl lg:max-w-4xl w-full mx-auto mt-16 md:mt-20 lg:mt-0">
          <div className="text-center mb-14 ">
            <h1 className="text-3xl md:text-5xl font-extrabold sm:text-5xl">
              Contact Us
            </h1>
          </div>

          <div
            className="rounded-2xl overflow-hidden bg-stone-50/10"
            style={{ boxShadow: '0 25px 70px rgba(0,0,0,0.5)' }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Contact Form */}
              <div className="w-full lg:w-1/2 p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-lg font-medium mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 block w-full border bg-white border-gray-300 rounded-lg shadow-sm py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-lg font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full border text-black bg-white border-gray-300 rounded-lg shadow-sm py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border bg-white text-black border-gray-300 rounded-lg shadow-sm py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-lg font-medium mb-2"
                    >
                      Services
                    </label>

                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          service: e.target.value,
                          serviceOther: '', // reset serviceOther when changing selection
                        }))
                      }
                      className="mt-1 block w-full border bg-white text-black border-gray-300 rounded-lg shadow-sm py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">-- Select a service --</option>
                      <option value="WEB DESIGN & DEVELOPMENT">
                        WEB DESIGN & DEVELOPMENT
                      </option>
                      <option value="VIDEOGRAPHY SERVICES">
                        VIDEOGRAPHY SERVICES
                      </option>
                      <option value="BRANDING & IDENTITY">
                        BRANDING & IDENTITY
                      </option>
                      <option value="PHOTOGRAPHY SERVICES">
                        PHOTOGRAPHY SERVICES
                      </option>
                      <option value="SOCIAL MEDIA MARKETING">
                        SOCIAL MEDIA MARKETING
                      </option>
                      <option value="CONTENT MARKETING">
                        CONTENT MARKETING
                      </option>
                      <option value="Others">Others</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service}
                      </p>
                    )}

                    {/* Show input only if "Others" is selected */}
                    {formData.service === 'Others' && (
                      <input
                        type="text"
                        name="serviceOther"
                        placeholder="Please specify"
                        value={formData.serviceOther}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            serviceOther: e.target.value,
                          }))
                        }
                        className="mt-2 block w-full border bg-white text-black border-gray-300 rounded-lg shadow-sm py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full border bg-white text-black border-gray-300 rounded-lg shadow-sm py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg 
                      bg-gradient-to-r from-purple-500 to-pink-500 
                      hover:from-purple-600 hover:to-pink-600
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                      transition-colors duration-300 ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Divider - Increased space for xl screens */}
              <div className="hidden lg:block w-9 xl:w-16 bg-transparent"></div>

              {/* Right Side - Get in Touch */}
              <div className="w-full lg:w-1/2 p-8 text-white  flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Get in Touch
                </h2>

                <div className="mb-6">
                  <p className=" text-base leading-relaxed">
                    Get in touch with us for any inquiries or support. Our
                    friendly team is here to guide you and respond as
                    soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 rounded-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Address</h3>
                      <p className="mt-1  text-base">
                        Arzoo building
                        <br />
                        (Sharjah Islamic Bank),
                        <br />
                        Al Qusais 2 , Dubai
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0  p-2 rounded-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Phone</h3>
                      <p className="mt-1  text-base">
                        +971 52 516 2071, +971564712381
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0  p-2 rounded-lg">
                      <svg
                        className="h-6 w-6 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="mt-1  text-base">info.nextdms@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
