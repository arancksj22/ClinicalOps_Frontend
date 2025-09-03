import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  FileText, 
  Shield, 
  Cloud, 
  Zap,
  Users,
  Calendar,
  TrendingUp,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                ClinicalOps
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <motion.button 
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Demo
              </motion.button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-lg border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-blue-600">Features</a>
              <a href="#benefits" className="block text-gray-600 hover:text-blue-600">Benefits</a>
              <a href="#contact" className="block text-gray-600 hover:text-blue-600">Contact</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 rounded-full">
                Book Demo
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e0f2fe%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                ClinicalOps
              </span>
              <br />
              <span className="text-gray-800">Smarter Healthcare</span>
              <br />
              <span className="text-gray-600 text-4xl md:text-5xl">Management for Clinics</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              A <span className="text-blue-600 font-semibold">secure</span>, <span className="text-teal-600 font-semibold">cloud-based</span> system for doctors to manage patients, appointments, and surgical follow-ups.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="pt-16"
            >
              <ChevronDown className="w-8 h-8 text-gray-400 mx-auto animate-bounce" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
            >
              Why <span className="text-blue-600">ClinicalOps</span>?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-red-500 text-5xl mb-4">📄</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Too Much Paperwork</h3>
                <p className="text-gray-600">Data scattered across multiple systems and physical files</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-orange-500 text-5xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Scheduling Chaos</h3>
                <p className="text-gray-600">Missed appointments and poor communication with patients</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-yellow-500 text-5xl mb-4">🔓</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Insecure Records</h3>
                <p className="text-gray-600">Medical records stored without proper security measures</p>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">ClinicalOps solves this with one secure platform</h3>
              <p className="text-blue-100 text-lg">Streamline your healthcare operations with our comprehensive solution</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Powerful <span className="text-teal-600">Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage your healthcare practice efficiently
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                variants={fadeInUp}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Centralized Management</h3>
                <p className="text-gray-600">Patient records and appointments in one secure dashboard</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Storage</h3>
                <p className="text-gray-600">HIPAA-compliant medical records with AWS S3 encryption</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Cloud Database</h3>
                <p className="text-gray-600">Scalable AWS RDS with MySQL for reliable data management</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Deployment</h3>
                <p className="text-gray-600">Docker containerization with automated CI/CD pipelines</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Proven <span className="text-blue-600">Impact</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the real results our healthcare partners are achieving
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-3">300+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient Records</h3>
                <p className="text-gray-600">Securely managed and easily accessible</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-teal-600 mb-3">40%</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fewer Errors</h3>
                <p className="text-gray-600">Reduction in scheduling and administrative mistakes</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-3">15+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthcare Providers</h3>
                <p className="text-gray-600">Clinics and doctors already using our platform</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                How It <span className="text-teal-600">Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started in three simple steps
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Sign Up & Setup</h3>
                  <p className="text-gray-600 text-lg">Doctors and clinics create their secure account and configure their practice settings</p>
                </div>
                <div className="flex-shrink-0">
                  <Users className="w-24 h-24 text-blue-500" />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Upload & Manage</h3>
                  <p className="text-gray-600 text-lg">Securely upload patient records and begin managing all healthcare data in one place</p>
                </div>
                <div className="flex-shrink-0">
                  <FileText className="w-24 h-24 text-teal-500" />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Schedule & Track</h3>
                  <p className="text-gray-600 text-lg">Efficiently schedule appointments and track surgical follow-ups with automated reminders</p>
                </div>
                <div className="flex-shrink-0">
                  <Calendar className="w-24 h-24 text-blue-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Interested in ClinicalOps for your clinic?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
            >
              Reach out to learn more or book a free demo to see how we can transform your healthcare management
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="mailto:hello@clinicalops.com"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.a>
              
              <motion.a
                href="https://github.com/clinicalops"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ClinicalOps</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="https://github.com/clinicalops" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="mailto:hello@clinicalops.com" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 ClinicalOps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;