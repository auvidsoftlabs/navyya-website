import React from "react";
import { Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";
const logoUrl = new URL("../assets/logo.svg", import.meta.url).href;

export function Footer() {
  return (
    <footer className="w-full px-6 py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logoUrl} alt="Navyya Logo" className="h-10" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Design professional AV rooms smarter and faster with Navyya —
              AI-powered planning, 3D visualization, and standards-ready layouts
              at your fingertips.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="mb-4">Auvid Softlabs Pvt Ltd</h4>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>
                Second Floor, Innov8, SKCL Tech Square,
                <br />
                No.14, SIPCOT, Guindy Industrial Estate,
                <br />
                Chennai-600032
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <a
                href="tel:+919840720917"
                className="hover:text-primary transition-colors"
              >
                +91 98407 20917
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:hello@navyya.com"
                className="hover:text-primary transition-colors"
              >
                hello@navyya.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/navyya/"
                className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582867610089"
                className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 Auvid Softlabs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
