import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">🌍 Crossafrique Hydrogen</h3>
            <p className="text-gray-400 mb-4">
              Fueling Africa&#39;s Growth with Clean Hydrogen. We&#39;re committed to developing sustainable
              hydrogen solutions across the African continent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Blog & Publications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Hydrogen Production
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Storage & Distribution
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Industrial Applications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Consulting Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Clean Energy Way, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-emerald-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+254 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-emerald-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@crossafriquehydrogen.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 text-center">
            © {currentYear} Crossafrique Hydrogen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
