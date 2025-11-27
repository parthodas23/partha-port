// src/components/ProjectVault.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectVault = ({ onClose }) => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: "uninest",
      title: "UniNest",
      description: "Student room finder",
      link: "https://github.com/parthodas23/UniNest",
      features: [
        "Firebase auth with student profiles",
        "Room listings with BDT pricing",
        "Campus-focused UI with map pins",
        "Advanced student filters",
        "Dark mode & localStorage favorites",
        "Mock AI chatbot for queries",
      ],
      tech: ["React", "Firebase", "Google Maps API", "Swiper.js"],
    },
    {
      id: "designflow",
      title: "DesignFlow",
      description: "Online design editor",
      link: "/projects/designflow",
      features: [
        "Fabric.js canvas editor",
        "Shape/text/image manipulation",
        "Real-time auto-save",
        "AI image generation",
        "Premium membership flow",
        "Cloudinary uploads",
        "PayPal subscription",
      ],
      tech: [
        "Next.js",
        "Node.js",
        "Zustand",
        "Fabric.js",
        "MongoDB",
        "Shadcn UI",
      ],
    },
    {
      id: "sitegen",
      title: "SiteGen",
      description: "AI web app builder",
      link: "/projects/sitegen",
      features: [
        "AI-powered app generation",
        "Next.js 15 + React 19",
        "Inngest background jobs",
        "Cloud sandbox execution",
        "AI-assisted PR reviews",
        "Credit system with usage tracking",
        "Full Git workflow integration",
      ],
      tech: ["Next.js 15", "tRPC", "Clerk", "Inngest", "E2B", "Docker"],
    },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Project Vault</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 flex-1 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 overflow-hidden cursor-pointer transition-all ${
                  activeProject === project.id
                    ? "ring-4 ring-indigo-300 scale-[1.02] shadow-lg"
                    : "hover:shadow-md"
                }`}
                whileHover={{ y: -5 }}
                onClick={() => setActiveProject(project.id)}
              >
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                    <div className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded-full">
                      {project.id === "uninest"
                        ? "Student"
                        : project.id === "designflow"
                        ? "Design"
                        : "AI"}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-white text-gray-700 text-xs px-2 py-1 rounded border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-white text-gray-500 text-xs px-2 py-1 rounded border border-gray-200">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-indigo-600 text-sm font-medium">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 text-right">
                  <button
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.link.startsWith("http")) {
                        window.open(project.link, "_blank");
                      } else {
                        // Handle internal navigation
                        console.log(`Navigating to: ${project.link}`);
                      }
                    }}
                  >
                    {project.title === "UniNest"
                      ? "view project →"
                      : "Creating"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                {projects.map(
                  (project) =>
                    project.id === activeProject && (
                      <React.Fragment key={project.id}>
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                          <h2 className="text-2xl font-bold text-gray-800">
                            {project.title}
                          </h2>
                          <button
                            onClick={() => setActiveProject(null)}
                            className="text-gray-500 hover:text-gray-800 transition-colors"
                          >
                            ✕
                          </button>
                        </div>

                        <div className="p-6 flex-1 overflow-auto">
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                              Description
                            </h3>
                            <p className="text-gray-600">
                              {project.id === "uninest"
                                ? "Full-stack React + Firebase application for students to find rooms near their university with campus-focused features and student filters."
                                : project.id === "designflow"
                                ? "Canva-style design editor built with Next.js, Node.js microservices, and Fabric.js featuring real-time collaboration and premium membership flow."
                                : "AI-powered app builder that generates full-stack applications from simple prompts using programmable agents and cloud sandboxes."}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Features
                              </h3>
                              <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span className="text-gray-700">
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Technologies
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <span
                                    key={tech}
                                    className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>

                              <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                  Project Details
                                </h3>
                                <div className="space-y-2 text-gray-700">
                                  <p>
                                    <span className="font-medium">Status:</span>{" "}
                                    {project.id === "uninest"
                                      ? "Live"
                                      : "Active Development"}
                                  </p>
                                  <p>
                                    <span className="font-medium">
                                      Category:
                                    </span>{" "}
                                    {project.id === "uninest"
                                      ? "Student Housing"
                                      : project.id === "designflow"
                                      ? "Design Tool"
                                      : "AI Development"}
                                  </p>
                                  <p>
                                    <span className="font-medium">
                                      Repository:
                                    </span>{" "}
                                    {project.link}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                          <button
                            className="px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg"
                            onClick={() => setActiveProject(null)}
                          >
                            Back to Vault
                          </button>
                          <button
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            onClick={() => {
                              if (project.link.startsWith("http")) {
                                window.open(project.link, "_blank");
                              } else {
                                // Handle internal navigation
                                console.log(`Navigating to: ${project.link}`);
                              }
                              setActiveProject(null);
                            }}
                          >
                            View Project
                          </button>
                        </div>
                      </React.Fragment>
                    )
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-6 border-t border-gray-200 text-center text-sm text-gray-500">
          {projects.length} innovative projects in the vault • Built with
          passion and modern tech
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectVault;
