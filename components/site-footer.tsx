import Link from "next/link";
import Image from "next/image";
import { Linkedin, MapPin, Mail } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#clients", label: "Clients" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#certifications", label: "Certifications" },
  ];

  return (
    <footer className="relative">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500" />

      <div className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-blue-100">
        {/* Main content */}
        <div className="container max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 grid gap-10 md:grid-cols-3">
          {/* Logo & Social */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <OptimizedImage
                src="/logo.jpg?height=64&width=64"
                alt="IMS Logo"
                width={64}
                height={64}
                className="rounded-xl shadow-lg ring-2 ring-blue-600/30 hover:scale-105 transition-transform duration-300"
                priority
              />
              <h2 className="text-blue-200 font-extrabold text-base tracking-wide leading-tight">
                INTERNATIONAL MARKETING SERVICES
              </h2>
            </div>

            <p className="text-blue-300/80 text-sm italic max-w-xs leading-relaxed">
              Since 1985 —{" "}
              <span className="text-blue-100/90">
                Where Global Demand Meets Reliable Supply
              </span>
            </p>

            <div className="flex gap-4">
              <Link
                href="https://pk.linkedin.com/company/international-marketing-services-ims"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-800/30 hover:bg-blue-700/50 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-blue-300 uppercase tracking-wide border-b border-blue-800/60 pb-2">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-2 py-1 rounded-md text-blue-100/90 hover:text-white hover:bg-blue-800/40 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="text-center md:text-left max-w-md md:max-w-none mx-auto">
            <h3 className="font-semibold mb-4 text-blue-300 uppercase tracking-wide border-b border-blue-800/60 pb-2">
              Contact Us
            </h3>
            <div className="text-sm space-y-4">
              {[
                "A-149, Block C, North Nazimabad, Karachi-74700",
                "Office #418, Industrial Town Plaza, Sharah-e-Liaquat, Karachi-74000",
                "Shop #217/19, Saleh Market, Adamjee Road, Saddar Cantt, Rawalpindi-46000",
              ].map((address, idx) => (
                <div
                  key={idx}
                  className="flex items-start md:items-center gap-3 justify-center md:justify-start"
                >
                  <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100/90">{address}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="hover:text-white cursor-pointer transition-colors">
                  info@ims-pk.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800/50">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 py-4 text-xs text-blue-200/80 flex justify-center">
            <p>© {year} IMS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}



const DATA = [
  { item: "Stainless Steel Plate grade 430", category: "Metal" },
  { item: "Instrument Cable", category: "Electonics" },
  { item: "Compressor Chiller", category: "HVAC" },
  { item: "Combination Power Receptacle", category: "Electonics" },
  { item: "Helium Gas Cylinder", category: "Gases" },
  { item: "Laser Engraving Machine", category: "Industrial" },
  { item: "Gloves", category: "PPE" },
  { item: "Valve and Purifier", category: "Hardware" },
  { item: "Ducted PP Fume Hood", category: "Pharma/Laboratory" },
  { item: "Rozette OPEX", category: "Electonics" },
  { item: "AFL Lamps", category: "Airport" },
  { item: "Tool Kit", category: "Hardware" },
  { item: "Chiller Installation and Testing", category: "HVAC" },
  { item: "Tire Tubes and Flapper", category: "Rubber Goods" },
  { item: "Bag Filter", category: "Airport" },
  { item: "Hydraulic Metal Shearing Machine", category: "Industrial" },
  { item: "Gloves", category: "PPE" },
  { item: "Portable Crack Measurement Microscope", category: "Instrument" },
  { item: "Tractor Spare Parts", category: "Hardware" },
  { item: "Refrigerator", category: "Household Item" },
  { item: "Pump Head for Precision Tubing L/S Easy-Load", category: "Pharma/Laboratory" },
  { item: "Safety Shoes", category: "PPE" },
  { item: "Passenger Boarding Bridges", category: "Airport" },
  { item: "Chemical Storage Cabinet", category: "Pharma/Laboratory" },
  { item: "Furniture Item for CAA Officers Mess Rawal Road", category: "Household Item" },
  { item: "Carbon Steel Gate Valve", category: "Hardware" },
  { item: "Oshkosh Striker Spare Parts", category: "Airport" },
  { item: "IC", category: "Electonics" },
  { item: "Air Conditioner", category: "HVAC" },
  { item: "Microcontroller Chip", category: "Electonics" },
  { item: "Range Finder", category: "Instrument" },
  { item: "Air Conditioner", category: "HVAC" },
  { item: "Carrier Board (with CPU) & Docking Board", category: "Airport" },
  { item: "Bed Sheet", category: "Household Item" },
  { item: "Toilet Paper", category: "Household Item" },
  { item: "Tripod", category: "Hardware" },
  { item: "Panel Filters for Computer Room Air Conditioning", category: "Airport" },
  { item: "Trolley 10x7 sft with complete Hydraulic Loading", category: "Airport" },
  { item: "Bag Filter", category: "Airport" },
  { item: "Lathe Machine", category: "Industrial" },
  { item: "Portable Welding Machine", category: "Industrial" },
  { item: "Welding Rods", category: "Instrument" },
  { item: "Silicon and Joint Filling Materials", category: "Chemicals" },
  { item: "Auto Quick Saw", category: "Hardware" },
  { item: "Dehumidifier", category: "Hardware" },
  { item: "MS Pipes and Fittings for Chilled Water", category: "Metal" },
  { item: "AFLS LED Lights for Primary Runway", category: "Airport" },
  { item: "Clover Lapping Compounds", category: "Chemicals" },
  { item: "Critical Spares for Maintenance of York (Chiller)", category: "Airport" },
  { item: "Office Furniture for Additional Directors", category: "Household Item" },
  { item: "Equipment’s for CATI Cricket Ground", category: "Hardware" },
  { item: "Hydraulic Oil & Hydraulic Oil-Filters 10 Micron", category: "Lubricants" },
  { item: "PVC Box", category: "Electonics" },
  { item: "Counter Chairs", category: "Household Item" },
  { item: "Mess Articles (Dining & Serving)", category: "Household Item" },
  { item: "DENCO Precision AC Unit", category: "HVAC" },
  { item: "Public Address System", category: "Airport" },
  { item: "Gym Items", category: "Household Item" },
  { item: "Battery Bank for Scrubber", category: "Airport" },
  { item: "Vending Machine", category: "Commercial" },
  { item: "Coffee Machine", category: "Commercial" },
  { item: "York Chiller Parts", category: "Airport" },
  { item: "Photostat Paper Reams", category: "Stationary" },
  { item: "Outdoor Stadium Chairs", category: "" },
  { item: "Smart LED TV", category: "Household Item" },
  { item: "Oil and Air Filters", category: "Lubricants" },
];