import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeMetric, setActiveMetric] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { value: '<50ms', label: 'Query Latency', desc: 'Instant record access' },
    { value: '300+', label: 'Patients Managed', desc: 'Across 10 clinics' },
    { value: '80%', label: 'Deployment Reduction', desc: '15min → 3min' },
  ]

  const features = [
    {
      icon: '⚡',
      title: 'Sub-50ms Query Performance',
      tech: 'AWS RDS MySQL • Read Replicas',
      desc: 'Optimized database with read replicas managing 300+ patient records with instant query response times.',
    },
    {
      icon: '🔒',
      title: 'AWS S3 + Docker Pipeline',
      tech: 'SSE-S3 Encryption • GitHub Actions CI/CD',
      desc: 'Secure document storage with automated deployment pipeline reducing deployment time by 80% (15min → 3min).',
    },
    {
      icon: '⚙️',
      title: 'Spring Boot + React Stack',
      tech: 'Java Backend • TypeScript Frontend',
      desc: 'Full-stack architecture serving 5 surgeons across 10 clinics with responsive dashboard interface.',
    },
  ]

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('arancksj@gmail.com')
    alert('📧 Email copied to clipboard: arancksj@gmail.com')
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')

    try {
      const response = await fetch('https://formsubmit.co/arancksj@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          _subject: 'New ClinicalOps Demo Request',
          _template: 'table'
        })
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', organization: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav" style={{ opacity: Math.min(scrollY / 100, 1) }}>
        <div className="nav-content">
          <div className="logo">
            <span className="logo-bracket">{'['}</span>
            ClinicalOps
            <span className="logo-bracket">{']'}</span>
          </div>
          <div className="nav-center">
            <a href="https://github.com/arancksj22" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aranckjomraj/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <button onClick={handleEmailCopy} className="social-icon" title="Copy Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </button>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#tech">Technology</a>
            <a href="#demo" className="nav-cta">Request Demo</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="badge">Production-Tested Across 10 Clinics</div>
          <h1 className="hero-title">
            Patient Management
            <br />
            <span className="hero-title-accent">Built for Scale</span>
          </h1>
          <p className="hero-subtitle">
            Centralized operations platform for multi-clinic surgical practices.
            <br />
            Enterprise reliability. Surgical precision.
          </p>
          <div className="hero-cta">
            <a href="#demo"><button className="btn-primary">Schedule Consultation</button></a>
            <a href="#tech"><button className="btn-secondary">View Technical Specs →</button></a>
          </div>
        </div>

        {/* Social Icons Sidebar */}
        <div className="hero-social-sidebar">
          <a href="https://github.com/arancksj22" target="_blank" rel="noopener noreferrer" className="sidebar-icon" title="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/aranckjomraj/" target="_blank" rel="noopener noreferrer" className="sidebar-icon" title="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <button onClick={handleEmailCopy} className="sidebar-icon" title="Copy Email">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
            </svg>
          </button>
        </div>

        {/* Animated Metrics */}
        <div className="metrics-display">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`metric-card ${activeMetric === idx ? 'active' : ''}`}
            >
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-desc">{metric.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stat">
          <div className="stat-value">5</div>
          <div className="stat-label">Surgeons</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <div className="stat-value">10</div>
          <div className="stat-label">Clinics</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <div className="stat-value">300+</div>
          <div className="stat-label">Patients</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <div className="stat-value">2GB+</div>
          <div className="stat-label">Secure Storage</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <div className="section-label">Platform Capabilities</div>
          <h2 className="section-title">
            Built for Operational Excellence
          </h2>
        </div>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <div className="feature-tech">{feature.tech}</div>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack" id="tech">
        <div className="tech-content">
          <div className="tech-header">
            <div className="section-label">Full Stack Implementation</div>
            <h2 className="section-title">Production Technology Stack</h2>
            <p className="tech-subtitle">
              Secure Spring Boot application serving 5 surgeons across 10 clinics, centralizing
              patient management and post-operative follow-ups for 300+ patients.
            </p>
          </div>
          
          <div className="tech-stack-visual">
            <div className="tech-layer">
              <div className="layer-label">Frontend Layer</div>
              <div className="tech-badges">
                <span className="tech-badge primary">React.js</span>
                <span className="tech-badge primary">TypeScript</span>
                <span className="tech-badge">Responsive Dashboard</span>
              </div>
            </div>
            
            <div className="tech-layer">
              <div className="layer-label">Backend & Database</div>
              <div className="tech-badges">
                <span className="tech-badge primary">Spring Boot</span>
                <span className="tech-badge primary">AWS RDS MySQL</span>
                <span className="tech-badge">Automated Backups</span>
                <span className="tech-badge">Read Replicas</span>
                <span className="tech-badge primary">AWS S3</span>
                <span className="tech-badge">SSE-S3 Encryption</span>
              </div>
            </div>
            
            <div className="tech-layer">
              <div className="layer-label">DevOps & Deployment</div>
              <div className="tech-badges">
                <span className="tech-badge primary">Docker</span>
                <span className="tech-badge primary">GitHub Actions CI/CD</span>
                <span className="tech-badge">Automated Testing</span>
                <span className="tech-badge">Render Deployment</span>
                <span className="tech-badge">Zero Downtime</span>
              </div>
            </div>
          </div>

          <div className="tech-metrics">
            <div className="tech-metric">
              <div className="tech-metric-value">&lt;50ms</div>
              <div className="tech-metric-label">Query Latency</div>
            </div>
            <div className="tech-metric">
              <div className="tech-metric-value">300+</div>
              <div className="tech-metric-label">Patient Records</div>
            </div>
            <div className="tech-metric">
              <div className="tech-metric-value">80%</div>
              <div className="tech-metric-label">Deploy Time Reduction</div>
            </div>
            <div className="tech-metric">
              <div className="tech-metric-value">2GB+</div>
              <div className="tech-metric-label">Medical Documents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="demo-section" id="demo">
        <div className="demo-content">
          <div className="demo-header">
            <h2 className="demo-title">Request a Demo</h2>
            <p className="demo-subtitle">
              See how ClinicalOps can streamline your surgical practice operations.
              We'll get back to you within 24 hours.
            </p>
          </div>
          
          <form className="demo-form" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Dr. Jane Smith"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  placeholder="jane.smith@clinic.com"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="organization">Organization / Practice Name *</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleFormChange}
                required
                placeholder="Premier Surgical Associates"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                placeholder="Tell us about your practice and specific needs..."
              />
            </div>
            
            <button 
              type="submit" 
              className="form-submit"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending...' : 
               formStatus === 'success' ? '✓ Request Sent!' :
               formStatus === 'error' ? 'Error - Try Again' :
               'Submit Request'}
            </button>

            {formStatus === 'success' && (
              <div className="form-message success">
                Thank you! We'll contact you shortly to schedule your demo.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="form-message error">
                Something went wrong. Please email us directly at arancksj@gmail.com
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-bracket">{'['}</span>
              ClinicalOps
              <span className="logo-bracket">{']'}</span>
            </div>
            <p className="footer-tagline">
              Enterprise patient management for modern surgical practices.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <div className="footer-column-title">Product</div>
              <a href="#features">Features</a>
              <a href="#tech">Technology</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            © 2025 ClinicalOps. Built with precision.
          </div>
          <div className="footer-made">
            Made with <span className="heart">♥</span> by Aranck Jomraj
          </div>
          <div className="footer-tech">
            Powered by AWS • Spring Boot • React
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
