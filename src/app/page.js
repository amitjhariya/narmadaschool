import React from 'react';
import { School2, GraduationCap, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

function App () {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <School2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Narmada School</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Academics</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Admissions</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Login
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Shaping Tomorrow&apos;sLeaders Today</h1>
            <p className="text-xl mb-8 text-blue-100">Welcome to PVT. NARMADA SCHOOL OF EXCELLENCE, where we nurture young minds and foster academic excellence in a supportive learning environment.</p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
          alt="School Building"
          className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-20 md:opacity-10"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence in Education</h3>
              <p className="text-gray-600">Comprehensive curriculum designed to nurture academic growth and personal development.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Dedicated teachers committed to providing personalized attention and guidance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art infrastructure supporting both academic and extracurricular activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Achievement Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We take pride in our growing community and the success of our students.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">44</div>
              <div className="text-gray-600">Total Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Grade Levels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our School?</h2>
          <p className="text-xl text-blue-100 mb-8">Take the first step towards your child&apos;sbright future.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
            Start Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <School2 className="h-8 w-8" />
                <span className="text-xl font-bold">Narmada School</span>
              </div>
              <p className="text-sm">Nurturing excellence, fostering growth, and building future leaders.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Admissions</a></li>
                <li><a href="#" className="hover:text-white">Academics</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>UDISE: 23420402506</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@narmadaschool.edu</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© 2024 PVT. NARMADA SCHOOL OF EXCELLENCE. All rights reserved.</p>
            <p className="mt-2">This site is designed, developed, maintained and hosted by National Informatics Centre (NIC)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;