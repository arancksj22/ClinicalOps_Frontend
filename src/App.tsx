import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeMetric, setActiveMetric] = useState(0)

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
      title: 'Lightning Performance',
      desc: 'Sub-50ms query latency ensures patient records load instantly. AWS RDS with read replicas eliminates wait times during high-traffic hours.',
    },
    {
      icon: '🔒',
      title: 'Bank-Grade Security',
      desc: 'AWS S3 server-side encryption (SSE-S3) protects 2GB+ of medical documents. HIPAA-compliant infrastructure you can trust.',
    },
    {
      icon: '🔄',
      title: 'Zero Downtime',
      desc: 'Dockerized microservices with automated GitHub Actions CI/CD. Deploy updates in 3 minutes without interrupting operations.',
    },
    {
      icon: '🏥',
      title: 'Multi-Clinic Orchestration',
      desc: 'Centralize operations for 5+ surgeons across multiple locations. One dashboard, complete visibility.',
    },
  ]

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
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#tech">Technology</a>
            <a href="#contact" className="nav-cta">Request Demo</a>
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
            <button className="btn-primary">Schedule Consultation</button>
            <button className="btn-secondary">View Technical Specs →</button>
          </div>
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
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack" id="tech">
        <div className="tech-content">
          <div className="tech-header">
            <div className="section-label">Infrastructure</div>
            <h2 className="section-title">Enterprise-Grade Architecture</h2>
            <p className="tech-subtitle">
              Built on AWS with Spring Boot and React. Containerized deployment
              with automated CI/CD pipelines.
            </p>
          </div>
          <div className="tech-specs">
            <div className="spec-group">
              <div className="spec-title">Backend</div>
              <div className="spec-item">
                <span className="spec-dot"></span>
                Spring Boot Application Server
              </div>
              <div className="spec-item">
                <span className="spec-dot"></span>
                AWS RDS MySQL with Read Replicas
              </div>
              <div className="spec-item">
                <span className="spec-dot"></span>
                Automated Backup & Recovery
              </div>
            </div>
            <div className="spec-group">
              <div className="spec-title">Security</div>
              <div className="spec-item">
                <span className="spec-dot"></span>
                AWS S3 Server-Side Encryption (SSE-S3)
              </div>
              <div className="spec-item">
                <span className="spec-dot"></span>
                HIPAA-Compliant Data Storage
              </div>
              <div className="spec-item">
                <span className="spec-dot"></span>
                Role-Based Access Control
              </div>
            </div>
            <div className="spec-group">
              <div className="spec-title">DevOps</div>
              <div className="spec-item">
                <span className="spec-dot"></span>
                Docker Containerization
              </div>
              <div className="spec-item">
                <span className="spec-dot"></span>
                GitHub Actions CI/CD Pipeline
              </div>
              <div className="spec-item">
                <span className="spec-dot"></span>
                Zero-Downtime Deployments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Modernize Your Practice?</h2>
          <p className="cta-subtitle">
            Join surgical teams managing 300+ patients with enterprise reliability.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary-large">Schedule Demo</button>
            <button className="btn-secondary-large">Download Technical Brief</button>
          </div>
          <div className="cta-note">
            Trusted by multi-clinic surgical practices • Deployed May–July 2025
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
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
              <a href="#">Security</a>
              <a href="#">Pricing</a>
            </div>
            <div className="footer-column">
              <div className="footer-column-title">Company</div>
              <a href="#">About</a>
              <a href="#">Case Studies</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            © 2025 ClinicalOps. Built with precision.
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
