import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Գլխավոր' },
    { id: 'about', label: 'Մեր մասին' },
    { id: 'menu', label: 'Մենյու' },
    { id: 'gallery', label: 'Պատկերասրահ' },
    { id: 'contact', label: 'Կապ' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className={`transition-colors ${isScrolled ? 'text-amber-700' : 'text-white'}`}>
                Տավերնա Երևան
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-200 font-medium ${
                  isScrolled
                    ? 'text-stone-700 hover:text-amber-700'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:010600006"
              className="flex items-center space-x-2 bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>010 600006</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-stone-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-stone-700 hover:text-amber-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:010600006"
              className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors mt-4"
            >
              <Phone className="w-4 h-4" />
              <span>010 600006</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
