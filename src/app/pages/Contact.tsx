import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="w-full">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316] bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#2563eb]/5 via-[#10b981]/5 to-[#f97316]/5 p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#2563eb] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#10b981] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#f97316] transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#2563eb] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316] text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
              <p className="text-gray-600 leading-relaxed">
                Have questions about TrainLink? We're here to help you find the perfect internship opportunity.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#2563eb]">
                  <div className="w-12 h-12 bg-[#2563eb]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@trainlink.sa</p>
                    <p className="text-gray-600">support@trainlink.sa</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#10b981]">
                  <div className="w-12 h-12 bg-[#10b981]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+966 11 234 5678</p>
                    <p className="text-gray-600">+966 50 123 4567</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#f97316]">
                  <div className="w-12 h-12 bg-[#f97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Office</h3>
                    <p className="text-gray-600">
                      King Fahd Road<br />
                      Riyadh, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[#2563eb] to-[#10b981] p-6 rounded-2xl text-white">
                <h3 className="font-bold text-xl mb-4">Business Hours</h3>
                <div className="space-y-2 text-white/90">
                  <p>Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p>Friday - Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
