import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2563eb]/5 via-[#10b981]/5 to-[#f97316]/5 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation Links */}
          <nav className="flex items-center gap-2 text-gray-600">
            <Link
              to="/contact"
              className="px-4 py-2 font-semibold hover:text-[#2563eb] transition-colors duration-200"
            >
              Contact
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/about"
              className="px-4 py-2 font-semibold hover:text-[#10b981] transition-colors duration-200"
            >
              About
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/privacy"
              className="px-4 py-2 font-semibold hover:text-[#f97316] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-gray-600 font-medium">
            © 2026 TrainLink. All rights reserved.
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex justify-center">
          <Link to="/" className="flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563eb] via-[#10b981] to-[#f97316] flex items-center justify-center">
              <span className="text-white font-bold text-lg">TL</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316] bg-clip-text text-transparent">
              TrainLink
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
