// src/components/FloatingProjects.jsx
import React from "react";
import { motion } from "framer-motion";

const FloatingProjects = ({ className, isMobile }) => {
  const projects = [
    {
      title: "UniNest",
      description: "Student room finder",
      color: "from-green-400 to-emerald-600",
      link: "https://github.com/parthodas23/UniNest",
    },
    {
      title: "DesignFlow",
      description: "Online design editor",
      color: "from-blue-400 to-indigo-600",
    },
    {
      title: "SiteGen",
      description: "AI web app builder",
      color: "from-purple-400 to-fuchsia-600",
    },
  ];

  return isMobile ? (
    <div
      className="absolute bottom-50 w-full px-4 pointer-events-auto"
      style={{
        WebkitOverflowScrolling: "touch",
        overflowX: "auto",
      }}
    >
      <motion.div
        className="inline-flex space-x-4 pb-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ minWidth: "max-content" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg p-4 backdrop-blur-sm bg-opacity-80 border border-gray-100 cursor-pointer"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2 + index * 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.97,
              boxShadow: "0 5px 10px -3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${project.color} mb-3`}
            ></div>
            <h3 className="font-medium text-gray-800">{project.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{project.description}</p>
            <div className="text-right text-xs text-indigo-500 mt-2">
              <a href={project.link} className="hover:underline">
                view project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  ) : (
    <div
      className={`absolute bottom-10 left-0 right-0 flex justify-center gap-6 md:gap-8 pointer-events-auto ${className}`}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-lg p-4 w-44 md:w-48 backdrop-blur-sm bg-opacity-80 border border-gray-100 cursor-pointer"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 2 + index * 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 },
          }}
        >
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${project.color} mb-3`}
          ></div>
          <h3 className="font-medium text-gray-800">{project.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{project.description}</p>
          <div className="text-right text-xs text-indigo-500 mt-2">
            <a href={project.link} className="hover:underline">
              {project.title === "UniNest" ? "view project →" : "Creating"}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingProjects;
