import { Search, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useState } from "react";
import logoImage from "figma:asset/224652d8f99f4decc938e4f43dfe4e8acbaa4c78.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="TrainLink Logo" 
              className="h-20 w-auto hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link
              to="/"
              className={`text-lg font-bold transition-all duration-200 hover:text-[#2563eb] hover:scale-105 ${
                isActive("/") ? "text-[#2563eb]" : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg font-bold transition-all duration-200 hover:text-[#10b981] hover:scale-105 ${
                isActive("/about") ? "text-[#10b981]" : "text-gray-700"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-bold transition-all duration-200 hover:text-[#f97316] hover:scale-105 ${
                isActive("/contact") ? "text-[#f97316]" : "text-gray-700"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-[#2563eb] transition-colors" />
              <input
                type="text"
                placeholder="Search for internships..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#2563eb] hover:border-gray-300 transition-all duration-200"
              />
            </div>
          </div>

          {/* User Profile Icon */}
          <div className="hidden md:flex items-center">
            <button className="relative group">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gray-200 hover:ring-[#2563eb] transition-all duration-200 hover:scale-110">
                <img
                  src="https://images.unsplash.com/photo-1616147147027-60d49d3582c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHNhdWRpfGVufDF8fHx8MTc3MTA2MjAwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-[#2563eb] transition-colors" />
            <input
              type="text"
              placeholder="Search for internships..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#2563eb] hover:border-gray-300 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg font-bold py-2 transition-colors ${
                isActive("/") ? "text-[#2563eb]" : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg font-bold py-2 transition-colors ${
                isActive("/about") ? "text-[#10b981]" : "text-gray-700"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg font-bold py-2 transition-colors ${
                isActive("/contact") ? "text-[#f97316]" : "text-gray-700"
              }`}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1616147147027-60d49d3582c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHNhdWRpfGVufDF8fHx8MTc3MTA2MjAwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="User Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-gray-700">My Profile</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}