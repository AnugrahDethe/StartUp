import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { useEffect } from 'react';

const TermsConditions = ({ onBack }) => {
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6 text-indigo-400">
              <FileText size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Terms & Conditions</h1>
            <p className="text-gray-400">Effective Date: 7 July 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-invert prose-indigo max-w-none glass p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <div className="space-y-8 text-gray-300 leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance</h2>
                <p>By accessing or using Vivernlab's website or services, you agree to these Terms & Conditions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
                <p>Vivernlab provides services including:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400 marker:text-indigo-500">
                  <li>Website Development</li>
                  <li>Mobile App Development</li>
                  <li>Software Development</li>
                  <li>CRM Solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Project Scope</h2>
                <p>All projects are completed according to the agreed proposal or contract.</p>
                <p>Additional features or changes requested after approval may require additional time and cost.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                <p>Unless otherwise agreed:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400 marker:text-indigo-500">
                  <li>40% Advance</li>
                  <li>40% During Development</li>
                  <li>20% Before Final Delivery</li>
                </ul>
                <p className="mt-4">Work begins only after the initial payment is received.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <p>Upon receipt of the final payment, ownership of the completed project is transferred to the client unless otherwise specified in the agreement.</p>
                <p>Vivernlab may showcase completed projects in its portfolio unless the client requests confidentiality in writing.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Revisions</h2>
                <p>Reasonable revisions included in the agreed scope will be provided.</p>
                <p>Additional revisions beyond the agreed scope may incur additional charges.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Project Delays</h2>
                <p>Client delays in providing content, approvals, or feedback may affect the project timeline.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Warranty & Support</h2>
                <p>Support is provided according to the agreed maintenance plan or project contract.</p>
                <p>Third-party software issues are not covered unless specifically included.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p>Vivernlab is not responsible for indirect or consequential damages arising from the use of our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                <p>These Terms & Conditions are governed by the laws of India.</p>
              </section>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
