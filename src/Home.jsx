import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, Baby, Heart, Shield, Home, Users, Wifi, Car, ChefHat, Shirt, Check, Menu, X, Award, Clock, Smile, Leaf, Sun, Moon, Calendar, User, Mail, MessageSquare, ArrowRight, PlayCircle, Quote, TrendingUp } from 'lucide-react';
import ayur from "./assets/ayur.png"
const AyurcareWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <Baby className="w-6 h-6" />, title: "Abhyangam (Oil Massage)", desc: "Traditional Ayurvedic oil massage therapy for complete body rejuvenation and healing" },
    { icon: <Heart className="w-6 h-6" />, title: "Baby Massage & Oil Bath", desc: "Gentle therapeutic massage and herbal oil bath for healthy newborn development" },
    { icon: <Star className="w-6 h-6" />, title: "Face Pack & Massage", desc: "Natural herbal face treatments for glowing skin and relaxation" },
    { icon: <Shield className="w-6 h-6" />, title: "Kesh Dhupan", desc: "Traditional hair care treatment with medicinal herbs and oils" },
    { icon: <Home className="w-6 h-6" />, title: "Vetu Kuli", desc: "Therapeutic herbal steam bath for detoxification and healing" },
    { icon: <Users className="w-6 h-6" />, title: "Abdominal Binding", desc: "Professional post-delivery abdominal support and body contouring" }
  ];

  const benefits = [
    "Complete recovery support for mother",
    "Proper physical health for baby", 
    "Family bonding and emotional support",
    "Comfortable healing environment",
    "Reduced complications risk",
    "Growth and development monitoring",
    "Mental and physical health care",
    "Infection prevention (VTE)",
    "Quality breast milk production",
    "Post-delivery rehabilitation",
    "24/7 professional care",
    "Nutritional guidance and support"
  ];

  const facilities = [
    { icon: <Home className="w-5 h-5" />, text: "A/C & Non A/C 2 BHK Luxury Apartments" },
    { icon: <Heart className="w-5 h-5" />, text: "Lady Doctor Consultation 3x/week" },
    { icon: <Phone className="w-5 h-5" />, text: "24x7 Doctor Phone Consulting" },
    { icon: <ChefHat className="w-5 h-5" />, text: "Homely Nutritious Meals (Veg & Non-Veg)" },
    { icon: <Shirt className="w-5 h-5" />, text: "Professional Laundry Service" },
    { icon: <Wifi className="w-5 h-5" />, text: "High-Speed Free WiFi" },
    { icon: <Users className="w-5 h-5" />, text: "Kids Play Area & Entertainment" },
    { icon: <Home className="w-5 h-5" />, text: "Mini Store & Essentials" },
    { icon: <Car className="w-5 h-5" />, text: "Secure Parking Space" }
  ];

  const packages = [
    {
      duration: "20 Days",
      rooms: [
        { type: "Normal Room (Ground Floor)", price: "₹41,000", ac: "₹42,500" },
        { type: "Normal Room (1st Floor)", price: "₹44,500", ac: "₹49,000" },
        { type: "Suite Room (Ground Floor)", price: "₹52,500", ac: "₹58,500" },
        { type: "Suite Room (1st Floor)", price: "₹62,000", ac: "₹60,000" }
      ]
    },
    {
      duration: "30 Days",
      rooms: [
        { type: "Normal Room (1st Floor)", price: "₹50,500", ac: "₹70,000" },
        { type: "Suite Room", price: "₹72,000", ac: "₹74,000" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Priya Nair",
      rating: 5,
      text: "Exceptional care and treatment. The staff was incredibly supportive throughout my recovery period.",
      location: "Kochi"
    },
    {
      name: "Meera Joseph",
      rating: 5, 
      text: "Professional service with traditional Ayurvedic care. Highly recommend for postnatal care.",
      location: "Thrissur"
    },
    {
      name: "Anjali Kumar",
      rating: 5,
      text: "Clean facilities, nutritious food, and excellent medical care. Perfect for new mothers.",
      location: "Calicut"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Mothers", icon: <Smile className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Care Support", icon: <Clock className="w-6 h-6" /> },
    { number: "100%", label: "Natural Treatment", icon: <Leaf className="w-6 h-6" /> }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Expert Care",
      desc: "Experienced professionals with years of Ayurvedic expertise"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Treatment", 
      desc: "Customized care plans tailored to individual needs"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Facilities",
      desc: "Modern amenities combined with traditional healing"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Support",
      desc: "Comfortable environment for the entire family"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="relative flex items-center">
              <img src={ayur} alt="" className="h-16 w-auto" />
              <div className="absolute inset-0 w-8 h-8 bg-yellow-500 rounded-full opacity-20 animate-ping"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">AYURCARE</h1>
              <p className="text-xs text-blue-700">Wellness Center</p>
            </div>
          </div>
        </div>

            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-900 hover:text-yellow-500 transition-colors duration-300 font-medium">Home</a>
              <a href="#services" className="text-blue-900 hover:text-yellow-500 transition-colors duration-300 font-medium">Services</a>
              <a href="#packages" className="text-blue-900 hover:text-yellow-500 transition-colors duration-300 font-medium">Packages</a>
              <a href="#testimonials" className="text-blue-900 hover:text-yellow-500 transition-colors duration-300 font-medium">Reviews</a>
              <a href="#contact" className="text-blue-900 hover:text-yellow-500 transition-colors duration-300 font-medium">Contact</a>
            </div>

            <button 
              className="md:hidden transform hover:scale-110 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-blue-900 hover:text-yellow-500 hover:bg-blue-50 rounded transition">Home</a>
              <a href="#services" className="block px-3 py-2 text-blue-900 hover:text-yellow-500 hover:bg-blue-50 rounded transition">Services</a>
              <a href="#packages" className="block px-3 py-2 text-blue-900 hover:text-yellow-500 hover:bg-blue-50 rounded transition">Packages</a>
              <a href="#testimonials" className="block px-3 py-2 text-blue-900 hover:text-yellow-500 hover:bg-blue-50 rounded transition">Reviews</a>
              <a href="#contact" className="block px-3 py-2 text-blue-900 hover:text-yellow-500 hover:bg-blue-50 rounded transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8 animate-fade-in-up">
              <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  AYURCARE
                </span>
                <br />
                <span className="text-2xl sm:text-3xl text-blue-100">Wellness Center</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                Experience the perfect blend of traditional Ayurvedic wisdom and modern postnatal care. Complete recovery support for mother and baby in a nurturing environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#packages" className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  View Packages
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:9387104611" className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Call: 9387104611
                </a>
              </div>
            </div>

            <div className="relative lg:block animate-fade-in-up delay-300">
              <div className="relative w-full h-96 bg-gradient-to-br from-yellow-400/20 to-blue-600/20 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-full animate-float"></div>
                <div className="absolute top-20 right-16 w-16 h-16 bg-blue-300/30 rounded-full animate-float delay-75"></div>
                <div className="absolute bottom-20 left-16 w-24 h-24 bg-yellow-300/20 rounded-full animate-float delay-150"></div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white">
                    <Heart className="w-24 h-24 mx-auto mb-4 text-yellow-400 animate-pulse" />
                    <h3 className="text-2xl font-bold">Caring Since 2019</h3>
                    <p className="text-blue-100">Traditional Ayurvedic Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/30 rounded-full animate-float delay-75"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-float delay-150"></div>
          <div className="absolute bottom-40 right-16 w-12 h-12 bg-white/10 rounded-full animate-float delay-300"></div>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-blue-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Why Choose <span className="text-yellow-500">Postnatal Care?</span>
            </h2>
            <p className="text-lg text-blue-700 max-w-4xl mx-auto leading-relaxed">
              The postnatal period is crucial for both mother and baby's health. Our comprehensive Ayurvedic care ensures optimal recovery, bonding, and long-term wellness through time-tested traditional methods combined with modern medical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group flex items-center space-x-3 p-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 50}ms`}}>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Check className="w-4 h-4 text-blue-900" />
                </div>
                <span className="text-blue-900 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-yellow-400">AYURCARE?</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Experience the perfect combination of traditional Ayurvedic wisdom and modern healthcare facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group text-center animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-blue-900 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Our <span className="text-yellow-500">Ayurvedic Services</span>
            </h2>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              Experience authentic Ayurvedic treatments designed specifically for postnatal care and recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in-up border border-blue-100" style={{animationDelay: `${index * 100}ms`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center text-yellow-400 mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-blue-700 leading-relaxed">{service.desc}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 p-8 rounded-3xl shadow-2xl text-white animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-yellow-400">Complete Package</span> Includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <p>Premium essential oils & herbs</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <p>Quality soaps & baby care products</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <p>Organic Cheru payar powder</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <p>Face & foot massage therapy</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <p>24/7 safety responsibility</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <p>Experienced professional care team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              World-Class <span className="text-yellow-500">Facilities</span>
            </h2>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              Modern amenities and comfort designed to support your recovery journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {facilities.map((facility, index) => (
              <div key={index} className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up border border-blue-100" style={{animationDelay: `${index * 75}ms`}}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl flex items-center justify-center text-yellow-400 group-hover:rotate-12 transition-transform shadow-md">
                  {facility.icon}
                </div>
                <span className="text-blue-900 font-medium flex-1">{facility.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-3xl text-blue-900 shadow-2xl animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-8 text-center">Premium Meal Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-blue-900 mr-3" />
                  <h4 className="text-2xl font-bold">For New Mother</h4>
                </div>
                <p className="text-lg leading-relaxed">6 specially designed nutritious meals per day including traditional postnatal nutrition recipes for optimal recovery and milk production</p>
              </div>
              <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-900 mr-3" />
                  <h4 className="text-2xl font-bold">For Family</h4>
                </div>
                <p className="text-lg leading-relaxed">3 wholesome meals per day with both vegetarian and non-vegetarian options prepared with fresh, local ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="text-yellow-400">Package</span> Details
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Choose the perfect package that suits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 animate-fade-in-up border-4 border-yellow-400/20" style={{animationDelay: `${index * 200}ms`}}>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 p-8 relative">
                  <h3 className="text-3xl font-bold text-center">{pkg.duration} Package</h3>
                  <div className="absolute top-4 right-4">
                    <Star className="w-8 h-8 text-blue-900 animate-spin-slow" />
                  </div>
                </div>
                <div className="p-8">
                  {pkg.rooms.map((room, roomIndex) => (
                    <div key={roomIndex} className="border-b border-blue-100 py-6 last:border-b-0 group-hover:bg-blue-50/50 transition-colors rounded-lg px-4">
                      <h4 className="font-bold text-blue-900 text-lg mb-4">{room.type}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 rounded-xl text-center">
                          <p className="text-sm opacity-80 mb-1">Non-AC</p>
                          <p className="text-2xl font-bold text-yellow-400">{room.price}</p>
                        </div>
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 p-4 rounded-xl text-center">
                          <p className="text-sm opacity-80 mb-1">AC</p>
                          <p className="text-2xl font-bold">{room.ac}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-400/10 border-2 border-yellow-400/30 rounded-2xl p-8 backdrop-blur-sm animate-fade-in-up">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-blue-900" />
              </div>
              <div>
                <p className="text-blue-100 leading-relaxed">
                  <strong className="text-yellow-400">Important Note:</strong> All packages include gas, water, complete medical care, nutritious meals, and 24/7 support. Additional charges apply only for gas cylinder refills. Experience premium postnatal care with traditional Ayurvedic treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              What Our <span className="text-yellow-500">Mothers Say</span>
            </h2>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              Real experiences from mothers who trusted us with their postnatal care journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in-up border border-blue-100" style={{animationDelay: `${index * 150}ms`}}>
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-yellow-500 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-blue-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center text-yellow-400 mr-4">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/90 to-yellow-500/80"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-900/10 p-12 rounded-3xl backdrop-blur-sm animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Award className="w-20 h-20 text-blue-900 animate-bounce" />
                <div className="absolute inset-0 w-20 h-20 bg-blue-900/20 rounded-full animate-ping"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Successfully Entering Our <span className="text-white">5th Year!</span>
            </h2>
            <p className="text-xl text-blue-800 mb-8 leading-relaxed">
              Over 500 satisfied mothers have trusted us with their postnatal care journey. We continue to set the standard for excellence in traditional Ayurvedic postnatal care.
            </p>
            <div className="flex justify-center space-x-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-12 h-12 text-blue-900 fill-current animate-pulse" style={{animationDelay: `${star * 200}ms`}} />
              ))}
            </div>
            <p className="text-lg text-blue-800 font-medium">
              Thank you for your continued trust and support in our mission to provide exceptional care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Book Your <span className="text-yellow-500">Consultation</span>
            </h2>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              Take the first step towards comprehensive postnatal care with our expert team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Quick Consultation Form</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-blue-700 font-medium mb-2">Your Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-blue-700 font-medium mb-2">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all" placeholder="Your phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Expected Due Date / Delivery Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-blue-700 font-medium mb-2">Message / Special Requirements</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all h-32 resize-none" placeholder="Tell us about your specific needs or questions"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="animate-fade-in-up delay-200">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 rounded-3xl text-white shadow-2xl">
                  <h4 className="text-2xl font-bold mb-6 text-yellow-400">Why Book Early?</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Guaranteed Availability</h5>
                        <p className="text-blue-100 text-sm">Secure your preferred dates and room type</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <User className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Personalized Care Plan</h5>
                        <p className="text-blue-100 text-sm">Customized treatment based on your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Peace of Mind</h5>
                        <p className="text-blue-100 text-sm">Stress-free planning for your recovery period</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-2xl text-blue-900 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 animate-spin-slow" />
                  <h4 className="text-xl font-bold mb-2">Limited Availability</h4>
                  <p className="font-medium">Book now to secure your spot in our premium care program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">
              Get In <span className="text-yellow-400">Touch</span>
            </h2>
            <p className="text-xl text-blue-100">
              Ready to begin your postnatal care journey with us?
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center animate-fade-in-up border border-yellow-400/20">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-blue-900 mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Call Us</h3>
              <p className="text-2xl font-bold mb-2">9387104611</p>
              <p className="text-blue-100">Available 24/7 for emergencies</p>
            </div>
            
            <div className="group bg-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center animate-fade-in-up delay-100 border border-yellow-400/20">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-blue-900 mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Visit Us</h3>
              <p className="text-lg mb-2">Ullanam Road, Koottumoochi</p>
              <p className="text-lg mb-2">Kodakkad, Kerala</p>
              <p className="text-blue-100">Easy accessible location</p>
            </div>

            <div className="group bg-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center animate-fade-in-up delay-200 border border-yellow-400/20">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-blue-900 mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Email Us</h3>
              <p className="text-lg mb-2">info@ayurcare.com</p>
              <p className="text-lg mb-2">support@ayurcare.com</p>
              <p className="text-blue-100">Quick response guaranteed</p>
            </div>
          </div>

          <div className="text-center animate-fade-in-up delay-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9387104611" className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-10 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Call Now for Booking
              </a>
              <button className="group border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Schedule Visit
              </button>
            </div>
            <p className="text-blue-100 mt-6 text-lg">
              Join the 500+ mothers who chose AYURCARE for their postnatal care journey
            </p>
          </div>
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full animate-float delay-75"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-300/10 rounded-full animate-float delay-150"></div>
          <div className="absolute bottom-40 right-16 w-20 h-20 bg-white/10 rounded-full animate-float delay-300"></div>
        </div>
      </section>

      <footer className="bg-blue-950 text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Heart className="w-10 h-10 text-yellow-400 animate-pulse" />
                  <div className="absolute inset-0 w-10 h-10 bg-yellow-400/20 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AYURCARE</h3>
                  <p className="text-blue-200">Wellness Center</p>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed mb-6 max-w-md">
                Providing exceptional postnatal care with traditional Ayurvedic treatments and modern facilities since 2019. Your trusted partner in motherhood.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center hover:bg-yellow-400/30 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center hover:bg-yellow-400/30 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center hover:bg-yellow-400/30 transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-blue-200 hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-yellow-400 transition-colors">Services</a></li>
                <li><a href="#packages" className="text-blue-200 hover:text-yellow-400 transition-colors">Packages</a></li>
                <li><a href="#testimonials" className="text-blue-200 hover:text-yellow-400 transition-colors">Reviews</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Services</h4>
              <ul className="space-y-2">
                <li className="text-blue-200">Abhyangam Massage</li>
                <li className="text-blue-200">Baby Care</li>
                <li className="text-blue-200">Face Treatments</li>
                <li className="text-blue-200">Hair Care</li>
                <li className="text-blue-200">Herbal Baths</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-blue-200">© 2024 AYURCARE Wellness Center. All rights reserved.</p>
                <p className="text-blue-300 text-sm mt-1">Fueling the Future, Powering Progress</p>
              </div>
              <div className="flex items-center space-x-4">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200 text-sm">Successfully serving since 2019</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .delay-75 { animation-delay: 75ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>

  )
 }
  export default AyurcareWebsite