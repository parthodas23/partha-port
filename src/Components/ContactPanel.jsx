import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  FileText,
  PhoneCall,
} from "lucide-react";

const ContactPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white px-4 py-2 rounded-full shadow border border-gray-300 text-gray-700 flex items-center gap-2"
      >
        <span>Connect</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="space-y-3 text-sm text-gray-800">
              <li className="hover:bg-gray-100 px-3 py-2 rounded flex items-center gap-2">
                <Mail size={18} />
                <a
                  href="mailto:parthodasm@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  parthodasm@gmail.com
                </a>
              </li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded flex items-center gap-2">
                <Twitter size={18} />
                <a
                  href="https://x.com/Parthodasm23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Parthodasm23
                </a>
              </li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded flex items-center gap-2">
                <Linkedin size={18} />
                <a
                  href="https://www.linkedin.com/in/partha-das-b3754734b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded flex items-center gap-2">
                <Github size={18} />
                <a
                  href="https://github.com/parthodas23/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded flex items-center gap-2">
                <PhoneCall size={18} />
                <a
                  href="https://wa.me/8801740220509"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded flex items-center gap-2">
                <FileText size={18} />
                <a
                  href="https://drive.google.com/file/d/107xmPN9F0aA7ZXWKBh_tY2l-7iR9dt4D/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPanel;
