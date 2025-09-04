'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Shield,
  Lock,
  EyeOff,
  Mail,
  Database,
  UserCheck,
  ChevronDown,
  FileText,
  Cookie,
  Server,
  Users,
  Globe,
  GanttChartSquare,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Section = ({ title, icon: Icon, children, index, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={fadeIn}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-16 relative"
    >
      <div className="absolute -left-4 top-0 h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
        <span className="text-blue-500 font-bold text-sm">{index + 1}</span>
      </div>
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-500/10 rounded-lg mr-4 backdrop-blur-sm">
          <Icon className="text-blue-500" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="ml-16">{children}</div>
    </motion.section>
  );
};

const FloatingNavigation = () => {
  const sections = [
    {
      id: 'information-collected',
      title: 'Information We Collect',
      icon: Database,
    },
    { id: 'information-use', title: 'How We Use Information', icon: UserCheck },
    { id: 'information-sharing', title: 'Information Sharing', icon: EyeOff },
    { id: 'data-security', title: 'Data Security', icon: Lock },
    { id: 'your-rights', title: 'Your Rights', icon: Mail },
    { id: 'cookies', title: 'Cookies & Tracking', icon: Cookie },
  ];

  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-24 right-8 z-40">
      <motion.div
        className="glass-container rounded-2xl overflow-hidden"
        animate={{ width: isOpen ? 240 : 52, height: isOpen ? 320 : 52 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-3 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
        >
          <GanttChartSquare className="text-blue-500" size={24} />
        </button>

        {isOpen && (
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Jump to Section
            </h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center w-full text-left p-2 rounded-lg transition-all text-sm ${
                      activeSection === section.id
                        ? 'bg-blue-500/10 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                    }`}
                  >
                    <section.icon size={14} className="mr-2" />
                    <span>{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const PrivacyPolicy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [0.2, 0.6]);
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.1], [4, 12]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          ></motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <motion.div
            className="mt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="mx-auto text-gray-400" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            opacity: backgroundOpacity,
            backdropFilter: `blur(${backgroundBlur}px)`,
          }}
          className="glass-container rounded-3xl p-8 md:p-12"
        >
          <div className="mb-10">
            <p className="text-gray-600 mb-6">
              At <span className="font-semibold text-blue-500">NextMedia</span>,
              we prioritize your privacy and are committed to protecting your
              personal data. This Privacy Policy outlines how we collect, use,
              disclose, and safeguard your information when you visit our
              website.
            </p>
            <motion.div
              className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/10"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <p className="text-sm text-blue-700/80">
                <strong>Quick Summary:</strong> We collect minimal data
                necessary to provide our services, never sell your personal
                information, and implement robust security measures to protect
                your data.
              </p>
            </motion.div>
          </div>

          <Section
            title="Information We Collect"
            icon={Database}
            index={0}
            id="information-collected"
          >
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, as well as
              automatically collected data when you use our services.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-white/50 p-4 rounded-xl border border-gray-200/50">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Information You Provide
                </h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                  <li>Account registration details</li>
                  <li>Contact information</li>
                  <li>Payment and billing data</li>
                  <li>Communications with us</li>
                  <li>Survey and feedback responses</li>
                </ul>
              </div>
              <div className="bg-white/50 p-4 rounded-xl border border-gray-200/50">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Automatically Collected
                </h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                  <li>Device and browser information</li>
                  <li>Usage data and analytics</li>
                  <li>IP address and location data</li>
                  <li>Cookies and similar technologies</li>
                  <li>Referral sources</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section
            title="How We Use Information"
            icon={UserCheck}
            index={1}
            id="information-use"
          >
            <p className="text-gray-600 mb-4">
              We use your information for the following purposes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {[
                {
                  title: 'Service Delivery',
                  desc: 'Providing and maintaining our services',
                },
                {
                  title: 'Communication',
                  desc: 'Responding to inquiries and sending updates',
                },
                {
                  title: 'Personalization',
                  desc: 'Customizing your experience',
                },
                {
                  title: 'Analytics',
                  desc: 'Improving our products and services',
                },
                {
                  title: 'Security',
                  desc: 'Protecting against fraudulent activities',
                },
                {
                  title: 'Marketing',
                  desc: 'Sending promotional communications (with consent)',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white/50 p-4 rounded-xl border border-gray-200/50"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600">
              We process your data based on legitimate business interests,
              contract fulfillment, or your explicit consent where required.
            </p>
          </Section>

          <Section
            title="Information Sharing"
            icon={EyeOff}
            index={2}
            id="information-sharing"
          >
            <p className="text-gray-600 mb-4">
              We may share your information in the following circumstances:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600 rounded-lg overflow-hidden">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100/50">
                  <tr>
                    <th className="px-4 py-3">Scenario</th>
                    <th className="px-4 py-3">Data Shared</th>
                    <th className="px-4 py-3">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      scenario: 'Service Providers',
                      data: 'Necessary information',
                      purpose: 'Operational support',
                    },
                    {
                      scenario: 'Legal Requirements',
                      data: 'As required by law',
                      purpose: 'Legal compliance',
                    },
                    {
                      scenario: 'Business Transfer',
                      data: 'User information',
                      purpose: 'Mergers & acquisitions',
                    },
                    {
                      scenario: 'With Your Consent',
                      data: 'Specified data',
                      purpose: 'As directed by you',
                    },
                  ].map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-200/50 even:bg-gray-50/30"
                    >
                      <td className="px-4 py-3 font-medium">{item.scenario}</td>
                      <td className="px-4 py-3">{item.data}</td>
                      <td className="px-4 py-3">{item.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4">
              We never sell your personal information to third parties for
              marketing purposes.
            </p>
          </Section>

          <Section
            title="Data Security"
            icon={Lock}
            index={3}
            id="data-security"
          >
            <p className="text-gray-600 mb-4">
              We implement comprehensive security measures to protect your data:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[
                {
                  title: 'Encryption',
                  desc: 'Data encrypted in transit and at rest',
                },
                {
                  title: 'Access Controls',
                  desc: 'Strict role-based access policies',
                },
                {
                  title: 'Regular Audits',
                  desc: 'Security assessments and penetration testing',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white/50 p-4 rounded-xl border border-gray-200/50 text-center"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Lock size={20} className="text-blue-500" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600">
              While we implement robust security measures, no method of
              transmission over the Internet is 100% secure. We continuously
              work to enhance our security practices.
            </p>
          </Section>

          <Section title="Your Rights" icon={Mail} index={4} id="your-rights">
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                'Access your personal data',
                'Correct inaccurate data',
                'Delete your personal data',
                'Restrict processing of your data',
                'Data portability',
                'Object to processing',
                'Withdraw consent',
              ].map((right, i) => (
                <motion.div
                  key={i}
                  className="flex items-start p-3 bg-white/50 rounded-xl border border-gray-200/50"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 text-sm">{right}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600">
              To exercise any of these rights, please contact us using the
              details provided below. We respond to all legitimate requests
              within one month.
            </p>
          </Section>

          <Section
            title="Cookies & Tracking"
            icon={Cookie}
            index={5}
            id="cookies"
          >
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to track activity
              on our website and store certain information.
            </p>
            <div className="rounded-xl border border-gray-200/50 overflow-hidden mb-4">
              <div className="grid grid-cols-4 bg-gray-100/50 p-3 text-xs font-medium text-gray-700">
                <div className="col-span-2">Type of Cookie</div>
                <div>Purpose</div>
                <div>Duration</div>
              </div>
              {[
                {
                  type: 'Essential',
                  purpose: 'Basic website functionality',
                  duration: 'Session',
                },
                {
                  type: 'Preferences',
                  purpose: 'Remember your settings',
                  duration: '1 Year',
                },
                {
                  type: 'Analytics',
                  purpose: 'Understand website usage',
                  duration: '2 Years',
                },
                {
                  type: 'Marketing',
                  purpose: 'Track advertising effectiveness',
                  duration: '90 Days',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 p-3 even:bg-gray-50/30 text-sm"
                >
                  <div className="col-span-2 font-medium text-gray-700">
                    {item.type}
                  </div>
                  <div className="text-gray-600">{item.purpose}</div>
                  <div className="text-gray-600">{item.duration}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              You can control cookies through your browser settings. However,
              disabling cookies may limit your ability to use certain features
              of our website.
            </p>
          </Section>

          <Section
            title="International Transfers"
            icon={Globe}
            index={6}
            id="international"
          >
            <p className="text-gray-600 mb-4">
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in
              place:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
              <li>Data transferred to countries with adequacy decisions</li>
              <li>Use of Standard Contractual Clauses where needed</li>
              <li>Implementation of additional technical security measures</li>
            </ul>
          </Section>

          <Section
            title="Data Retention"
            icon={Server}
            index={7}
            id="retention"
          >
            <p className="text-gray-600">
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which we collected it, including to
              satisfy any legal, accounting, or reporting requirements. Our
              retention periods are based on:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-4">
              <li>The amount and sensitivity of the personal data</li>
              <li>
                The potential risk of harm from unauthorized use or disclosure
              </li>
              <li>The purposes for which we process it</li>
              <li>Whether we can achieve those purposes through other means</li>
              <li>Applicable legal requirements</li>
            </ul>
          </Section>

          <Section
            title="Children's Privacy"
            icon={Users}
            index={8}
            id="children"
          >
            <p className="text-gray-600">
              Our website is not intended for children under the age of 16. We
              do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately, and we will take steps to remove that
              information.
            </p>
          </Section>

          <Section
            title="Policy Changes"
            icon={FileText}
            index={9}
            id="changes"
          >
            <p className="text-gray-600 mb-4">
              We may update this privacy policy from time to time. The updated
              version will be indicated by an updated "Last updated" date and
              the updated version will be effective as soon as it is accessible.
            </p>
            <p className="text-gray-600">
              We encourage you to review this privacy policy frequently to be
              informed of how we are protecting your information. If we make
              material changes, we will notify you either through the email
              address you have provided us or by placing a prominent notice on
              our website.
            </p>
          </Section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-16 p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact our Data Protection Officer:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Email</h4>
                <p className="text-blue-500">privacy@nextmedia.example.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Postal Address
                </h4>
                <p className="text-gray-600">
                  NextMedia Inc.
                  <br />
                  Attn: Data Protection Officer
                  <br />
                  123 Privacy Street
                  <br />
                  Data Protection City, DP 54321
                  <br />
                  United States
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <FloatingNavigation />
    </div>
  );
};

export default PrivacyPolicy;
