import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'Scan Webpage', hasDropdown: false },
    { name: 'Enter Data', hasDropdown: true },
    { name: 'Data Import', hasDropdown: false },
    { name: 'Edit Data', hasDropdown: true },
    { name: 'Reports', hasDropdown: true },
    { name: 'Dashboard', hasDropdown: true },
    { name: 'Ingestion', hasDropdown: true },
    { name: 'Workflow', hasDropdown: true },
    { name: 'Admin', hasDropdown: true },
    { name: 'Subscription', hasDropdown: true },
    { name: 'Accessibility Packages', hasDropdown: false },
    { name: 'Scan URLs', hasDropdown: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white">
        <div className="w-full">
          {/* Logo Section */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200 px-4">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <img 
                src="https://iaccessible.com/wp-content/uploads/2019/10/iaccessible_logo_color_noback-e1580507907938.png" 
                alt="iAccessible Logo" 
                className="h-10"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:block" style={{ backgroundColor: '#230070' }}>
            <div className="flex items-center justify-between py-4 px-4">
              <div className="flex items-center flex-wrap gap-x-6 gap-y-2">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <button className="flex items-center space-x-1 text-white hover:text-cyan-300 transition-colors text-sm font-medium py-2 px-1 whitespace-nowrap">
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown size={16} className="group-hover:text-cyan-300" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-purple-800 rounded-md transition-colors text-white"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden border-t border-purple-800" style={{ backgroundColor: '#230070' }}>
              <div className="py-4 space-y-2 px-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="block">
                    <button className="flex items-center justify-between w-full text-left text-white hover:text-cyan-300 hover:bg-purple-800 transition-colors text-sm font-medium py-3 px-2 rounded-md">
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </nav>
          )}
          
          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="lg:hidden" style={{ backgroundColor: '#230070' }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full p-4 text-white hover:bg-purple-800 transition-colors flex justify-center"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main 
        className="flex-1 p-8"
        style={{
          backgroundImage: 'url(https://iaccessible.com/wp-content/uploads/2019/06/Blue-Background-With-Halftone-Effect-min-1-e1559756884410.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Welcome to Accessible</h2>
          <p className="text-lg text-white/90 mb-8">
            Your comprehensive accessibility testing and compliance platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scan Webpage</h3>
              <p className="text-gray-600">Quickly scan any webpage for accessibility issues and get detailed reports.</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dashboard</h3>
              <p className="text-gray-600">View comprehensive analytics and track your accessibility progress over time.</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reports</h3>
              <p className="text-gray-600">Generate detailed accessibility reports and export data for compliance documentation.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#230070' }} className="text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Left side - Company info */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Reveio Software LLC</h3>
                <div className="space-y-1 text-sm text-white/90">
                  <p>University of Maryland Discovery District</p>
                  <p>5825 University Research Court, Suite 2850</p>
                  <p>College Park, MD 20740</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-white/90">✉</span>
                  <a href="mailto:info@iAccessible.com" className="text-white hover:text-cyan-300 transition-colors underline">
                    info@iAccessible.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white/90">📞</span>
                  <span className="text-white/90">(833) 922-2377</span>
                </div>
              </div>
            </div>

            {/* Right side - Powered by */}
            <div className="text-right">
              <p className="text-white/90">
                Powered by{' '}
                <a href="#" className="text-white hover:text-cyan-300 transition-colors font-semibold">
                  Reveio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;