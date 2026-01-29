import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-5">
              OfficeArc
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              OfficeArc designs and delivers high-quality office furniture that
              supports productivity, comfort, and modern work environments.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About OfficeArc
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-medium mb-5">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=chairs" className="hover:text-white transition">
                  Office Chairs
                </Link>
              </li>
              <li>
                <Link href="/products?category=desks" className="hover:text-white transition">
                  Work Desks
                </Link>
              </li>
              <li>
                <Link href="/products?category=storage" className="hover:text-white transition">
                  Storage Solutions
                </Link>
              </li>
              <li>
                <Link href="/products?category=conference" className="hover:text-white transition">
                  Conference Furniture
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-medium mb-5">Customer Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-white transition">
                  Delivery & Installation
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-white transition">
                  Warranty & Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} OfficeArc. All rights reserved.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;