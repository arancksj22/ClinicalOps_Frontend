import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  FileText, 
  Shield, 
  Users,
  Calendar,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileStack,
  Clock,
  Lock,
  Stethoscope,
  Activity,
  Database
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
    <div className="app-container">
      {/* Navigation */}
      <motion.nav 
        className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="logo-container">
              <div className="logo-icon">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="logo-text">
                ClinicalOps
              </span>
            </div>
            
            <div className="navbar-links">
              <a href="#features" className="nav-link">Features</a>
              <a href="#benefits" className="nav-link">Benefits</a>
              <a href="#contact" className="nav-link">Contact</a>
              <motion.button 
                className="nav-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo
              </motion.button>
            </div>

            <button 
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mobile-menu-content">
              <a href="#features" className="mobile-menu-link">Features</a>
              <a href="#benefits" className="mobile-menu-link">Benefits</a>
              <a href="#contact" className="mobile-menu-link">Contact</a>
              <button className="mobile-menu-button-full">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        
        <div className="hero-content">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="hero-content-container"
          >
            <motion.h1 
              variants={fadeInUp}
              className="hero-title"
            >
              <span className="hero-title-blue">
                ClinicalOps
              </span>
              <br />
              <span className="hero-title-gray">Professional Healthcare</span>
              <br />
              <span className="hero-title-gray-light">Management Platform</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="hero-description"
            >
              A <span className="hero-description-highlight">secure</span>, <span className="hero-description-highlight">HIPAA-compliant</span> system for healthcare providers to manage patient records, appointments, and clinical workflows.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="hero-buttons"
            >
              <motion.button 
                className="hero-button-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                className="hero-button-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="hero-scroll-indicator"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section section-gray">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              variants={fadeInUp}
              className="section-title"
            >
              Why <span className="section-title-blue">ClinicalOps</span>?
            </motion.h2>

            <div className="pain-points-grid">
              <motion.div variants={fadeInUp} className="pain-point-card">
                <div className="pain-point-icon pain-point-icon-red">
                  <FileStack className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="pain-point-title">Excessive Paperwork</h3>
                <p className="pain-point-description">Data scattered across multiple systems and physical files</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="pain-point-card">
                <div className="pain-point-icon pain-point-icon-orange">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="pain-point-title">Scheduling Challenges</h3>
                <p className="pain-point-description">Missed appointments and poor communication with patients</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="pain-point-card">
                <div className="pain-point-icon pain-point-icon-yellow">
                  <Lock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="pain-point-title">Security Concerns</h3>
                <p className="pain-point-description">Medical records stored without proper security measures</p>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="solution-card"
            >
              <h3 className="solution-title">ClinicalOps provides a comprehensive solution</h3>
              <p className="solution-description">Streamline your healthcare operations with our secure, professional platform</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="section-title">
                Powerful <span className="section-title-teal">Features</span>
              </h2>
              <p className="section-description">
                Everything you need to manage your healthcare practice efficiently
              </p>
            </motion.div>

            <div className="features-grid">
              <motion.div 
                variants={fadeInUp}
                className="feature-card"
                whileHover={{ y: -2 }}
              >
                <div className="feature-icon feature-icon-blue">
                  <FileText className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="feature-title">Centralized Management</h3>
                <p className="feature-description">Patient records and appointments in one secure dashboard</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="feature-card"
                whileHover={{ y: -2 }}
              >
                <div className="feature-icon feature-icon-green">
                  <Shield className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="feature-title">Secure Storage</h3>
                <p className="feature-description">HIPAA-compliant medical records with AWS S3 encryption</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="feature-card"
                whileHover={{ y: -2 }}
              >
                <div className="feature-icon feature-icon-blue">
                  <Database className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="feature-title">Cloud Database</h3>
                <p className="feature-description">Scalable AWS RDS with MySQL for reliable data management</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="feature-card"
                whileHover={{ y: -2 }}
              >
                <div className="feature-icon feature-icon-purple">
                  <Activity className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="feature-title">Easy Deployment</h3>
                <p className="feature-description">Docker containerization with automated CI/CD pipelines</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section section-gray">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="section-title">
                Proven <span className="section-title-blue">Impact</span>
              </h2>
              <p className="section-description">
                See the real results our healthcare partners are achieving
              </p>
            </motion.div>

            <div className="benefits-grid">
              <motion.div 
                variants={fadeInUp}
                className="benefit-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="benefit-number benefit-number-blue">300+</div>
                <h3 className="benefit-title">Patient Records</h3>
                <p className="benefit-description">Securely managed and easily accessible</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="benefit-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="benefit-number benefit-number-green">40%</div>
                <h3 className="benefit-title">Fewer Errors</h3>
                <p className="benefit-description">Reduction in scheduling and administrative mistakes</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="benefit-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="benefit-number benefit-number-blue">15+</div>
                <h3 className="benefit-title">Healthcare Providers</h3>
                <p className="benefit-description">Clinics and doctors already using our platform</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="section-title">
                How It <span className="section-title-teal">Works</span>
              </h2>
              <p className="section-description">
                Get started in three simple steps
              </p>
            </motion.div>

            <div className="how-it-works-steps">
              <motion.div variants={fadeInUp} className="how-it-works-step">
                <div className="step-number step-number-blue">
                  1
                </div>
                <div className="step-content">
                  <h3 className="step-title">Account Setup</h3>
                  <p className="step-description">Healthcare providers create their secure account and configure practice settings</p>
                </div>
                <div className="step-icon">
                  <Users className="w-24 h-24 text-blue-700" />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="how-it-works-step">
                <div className="step-number step-number-green">
                  2
                </div>
                <div className="step-content">
                  <h3 className="step-title">Data Management</h3>
                  <p className="step-description">Securely upload patient records and begin managing all healthcare data in one place</p>
                </div>
                <div className="step-icon">
                  <FileText className="w-24 h-24 text-green-700" />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="how-it-works-step">
                <div className="step-number step-number-purple">
                  3
                </div>
                <div className="step-content">
                  <h3 className="step-title">Clinical Workflow</h3>
                  <p className="step-description">Efficiently schedule appointments and track surgical follow-ups with automated reminders</p>
                </div>
                <div className="step-icon">
                  <Calendar className="w-24 h-24 text-purple-700" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="contact-title"
            >
              Interested in ClinicalOps for your clinic?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="contact-description"
            >
              Reach out to learn more or book a free demo to see how we can transform your healthcare management
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="contact-buttons"
            >
              <motion.a
                href="mailto:hello@clinicalops.com"
                className="contact-button-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.a>
              
              <motion.a
                href="https://github.com/clinicalops"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-icon">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="logo-text">ClinicalOps</span>
            </div>
            
            <div className="footer-links">
              <a href="#" className="footer-link">Home</a>
              <a href="https://github.com/clinicalops" className="footer-link">GitHub</a>
              <a href="mailto:hello@clinicalops.com" className="footer-link">Contact</a>
            </div>
            
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="footer-social-link">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="footer-divider">
            <p className="footer-copyright">© 2025 ClinicalOps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;