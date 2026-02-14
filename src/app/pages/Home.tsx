import { Search, Briefcase, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { NewsSection } from "../components/NewsSection";
import { FeaturesSection } from "../components/FeaturesSection";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2563eb]/10 via-[#10b981]/10 to-[#f97316]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316] bg-clip-text text-transparent">
              Welcome to TrainLink
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Connecting Saudi students with the perfect internship opportunities to complete their graduation requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#10b981] text-white font-bold rounded-full hover:shadow-xl transition-all duration-200 hover:scale-105">
                Find Internships
              </button>
              <Link
                to="/about"
                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-full border-2 border-gray-300 hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-200 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* News Section */}
      <NewsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-3xl mx-auto">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who have found their perfect internship through TrainLink
            </p>
            <button className="px-10 py-4 bg-white text-[#2563eb] font-bold rounded-full hover:shadow-2xl transition-all duration-200 hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}