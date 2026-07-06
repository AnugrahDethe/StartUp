import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';

const PrivacyPolicy = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030305] text-gray-200">
      {/* Navbar space / header */}
      <div className="fixed top-0 left-0 right-0 z-50 py-4 glass border-b border-white/5">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
      </div>

      <div className="relative pt-32 pb-24">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6 text-blue-400">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Privacy Policy</h1>
            <p className="text-gray-400">Effective Date: 7 July 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-invert prose-blue max-w-none glass p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <div className="space-y-8 text-gray-300 leading-relaxed">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p>Welcome to VivernLab.</p>
                <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect the information you provide when using our website or contacting us.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p>We may collect:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400 marker:text-blue-500">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Project Requirements</li>
                  <li>Messages submitted through contact forms</li>
                  <li>Website analytics (such as browser type, pages visited, and device information)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400 marker:text-blue-500">
                  <li>Respond to inquiries</li>
                  <li>Provide quotations</li>
                  <li>Deliver our services</li>
                  <li>Improve our website</li>
                  <li>Communicate regarding projects</li>
                  <li>Send updates (only if you choose to receive them)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
                <p>Our website may use cookies to improve user experience and analyze website traffic.</p>
                <p>You may disable cookies through your browser settings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p>We implement reasonable security measures to protect your personal information from unauthorized access or disclosure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p>We may use trusted third-party services including:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400 marker:text-blue-500">
                  <li>Google Analytics</li>
                  <li>Google Maps</li>
                  <li>Cloudflare</li>
                  <li>Vercel</li>
                  <li>Firebase</li>
                  <li>Stripe or Razorpay (if payment processing is enabled)</li>
                </ul>
                <p className="mt-4">These providers have their own privacy policies.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                <p>We do not sell your personal information.</p>
                <p>We only share information when necessary to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400 marker:text-blue-500">
                  <li>Deliver requested services</li>
                  <li>Comply with legal obligations</li>
                  <li>Process payments (if applicable)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p>You may request to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400 marker:text-blue-500">
                  <li>Access your information</li>
                  <li>Correct your information</li>
                  <li>Delete your information</li>
                </ul>
                <p className="mt-4">Please contact us through the website's contact form for any privacy-related requests.</p>
              </section>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
