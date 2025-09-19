

import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 border-t border-gray-300 pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-4">
          <img src="/apple_logo.png" alt="Apple Logo" className="h-6 w-auto mb-2" />
          <nav className="text-xs flex gap-2 items-center mb-4">
            <span className="font-medium">&#x203A;</span>
            <span>iPhone</span>
            <span className="font-medium">&#x203A;</span>
            <span>iPhone 17 Pro</span>
          </nav>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-6">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-sm mb-2">Shop and Learn</h4>
            <ul className="space-y-1 text-xs">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>
            <h4 className="font-bold text-sm mt-4 mb-2">Apple Wallet</h4>
            <ul className="space-y-1 text-xs">
              <li>Wallet</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-sm mb-2">Account</h4>
            <ul className="space-y-1 text-xs">
              <li>Manage Your Apple Account</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
            <h4 className="font-bold text-sm mt-4 mb-2">Entertainment</h4>
            <ul className="space-y-1 text-xs">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-sm mb-2">Apple Store</h4>
            <ul className="space-y-1 text-xs">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Group Reservations</li>
              <li>Apple Camp</li>
              <li>Apple Trade In</li>
              <li>Ways to Buy</li>
              <li>Recycling Programme</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h4 className="font-bold text-sm mb-2">For Business</h4>
            <ul className="space-y-1 text-xs">
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
            <h4 className="font-bold text-sm mt-4 mb-2">For Education</h4>
            <ul className="space-y-1 text-xs">
              <li>Apple and Education</li>
              <li>Shop for Education</li>
              <li>Shop for University</li>
            </ul>
            <h4 className="font-bold text-sm mt-4 mb-2">For Healthcare</h4>
            <ul className="space-y-1 text-xs">
              <li>Apple and Healthcare</li>
            </ul>
            <h4 className="font-bold text-sm mt-4 mb-2">For Government</h4>
            <ul className="space-y-1 text-xs">
              <li>Apple and Government</li>
            </ul>
          </div>
          {/* Column 5 */}
          <div>
            <h4 className="font-bold text-sm mb-2">Apple Values</h4>
            <ul className="space-y-1 text-xs">
              <li>Accessibility</li>
              <li>Education</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supply Chain Innovation</li>
            </ul>
          </div>
          {/* Column 6 */}
          <div>
            <h4 className="font-bold text-sm mb-2">About Apple</h4>
            <ul className="space-y-1 text-xs">
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>
        <div className="mb-2 text-xs text-gray-600">
          More ways to shop: <a href="#" className="text-blue-600 underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 underline">other retailer</a> near you. Or call <a href="#" className="text-blue-600 underline">000800 040 1966</a>.
        </div>
        <hr className="my-2 border-gray-300" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-gray-600">
          <div>
            Copyright © 2025 Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="underline">Sales Policy</a>
            <span>|</span>
            <a href="#" className="underline">Legal</a>
            <span>|</span>
            <a href="#" className="underline">Site Map</a>
          </div>
          <div className="md:ml-auto">India</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;