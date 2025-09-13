import { useState } from "react";
import { ChevronDown } from "lucide-react";

const footerLinks = {
  "Shop and Learn": [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "AirTag",
    "Accessories",
    "Gift Cards",
  ],
  "Apple Wallet": ["Wallet"],
  Account: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  Entertainment: [
    "Apple One",
    "Apple TV+",
    "Apple Music",
    "Apple Arcade",
    "Apple Podcasts",
    "Apple Books",
    "App Store",
  ],
  "Apple Store": [
    "Find a Store",
    "Genius Bar",
    "Today at Apple",
    "Group Reservations",
    "Apple Camp",
    "Apple Trade In",
    "Ways to Buy",
    "Recycling Programme",
    "Order Status",
    "Shopping Help",
  ],
  "For Business": ["Apple and Business", "Shop for Business"],
  "For Education": ["Apple and Education", "Shop for Education", "Shop for University"],
  "For Healthcare": ["Apple and Healthcare"],
  "For Government": ["Apple and Government"],
  "Apple Values": [
    "Accessibility",
    "Education",
    "Environment",
    "Privacy",
    "Supply Chain Innovation",
  ],
  "About Apple": [
    "Newsroom",
    "Apple Leadership",
    "Career Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
    "Contact Apple",
  ],
};

function Footer() {
  const [open, setOpen] = useState(null);

  return (
    <footer className="bg-gray-50 text-gray-500 text-sm mt-10">
      {/* Legal Notes */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200 text-xs space-y-3">
        <p className="mb-2">
          Instant cashback is available with the purchase of an eligible product with
          qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum
          transaction value of ₹10001.00 applies. Click here to see instant cashback
          amounts and eligible devices. Instant cashback is available for up to two
          orders per rolling 90-day period with an eligible card. Card eligibility is
          subject to terms and conditions between you and your card issuer. Total
          transaction value is calculated after any trade-in credit or eligible discount
          is applied. Any subsequent order adjustment(s) or cancellation(s) may result
          in instant cashback being recalculated, and any refund may be adjusted to
          account for instant cashback clawback; this may result in no refund being made
          to you. Offer may be revised or withdrawn at any time without any prior
          notice.
          <a href="#" className="text-gray-700 underline pl-2">
            Additional terms apply
          </a>
          . Instant cashback is not available to business customers and cannot be
          combined with Apple Store for Education or Corporate Employee Purchase Plan
          pricing. Multiple separate orders cannot be combined for instant cashback.
        </p>
        <p className="mb-2">
          1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with
          iPhone 16 with pre-release AirPods firmware and iOS 26. Noise reduction was
          tested in accordance with IEC 60268-24. Comparison made against the
          best-selling wireless in-ear headphones commercially available at the time of
          testing. Performance depends on device settings, environment and many other
          factors.
        </p>
        <p className="mb-2">
          Apple Intelligence is available in beta. Some features may not be available in
          all regions or languages. For feature and language availability and system
          requirements, see
          <a href="#" className="text-gray-700 underline pl-2">
            support.apple.com/121115
          </a>
          .
        </p>
        <p>A subscription is required for Apple TV+.</p>
        <p className="mt-2">
          Features are subject to change. Some features, applications and services may
          not be available in all regions or all languages.
        </p>
      </div>

      {/* Mobile Accordion */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:hidden divide-y divide-gray-200">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <button
              onClick={() => setOpen(open === section ? null : section)}
              className="w-full flex justify-between items-center py-3 font-medium text-gray-700"
            >
              {section}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  open === section ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === section && (
              <ul className="pl-2 pb-3 space-y-2 text-gray-600">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto px-4 py-10 grid-cols-5 gap-8">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="font-semibold mb-2">{section}</h4>
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-200 text-xs text-gray-500">
        <p className="mb-4">
          More ways to shop:{" "}
          <a href="#" className="text-blue-600 underline">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-600 underline">
            other retailer
          </a>{" "}
          near you. Or call{" "}
          <a href="tel:0008000401966" className="text-blue-600 underline">
            000800 040 1966
          </a>.
        </p>
        <p>India</p>
      </div>
    </footer>
  );
}

export default Footer;
