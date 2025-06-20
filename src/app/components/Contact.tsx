// src/app/components/Contact.tsx
import React, { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const emailAddress = "ranehobasi@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        setCopyStatus("Email copied!");
        console.log("Email copied to clipboard");

        // Clear the status message after 2 seconds
        setTimeout(() => {
          setCopyStatus("");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setCopyStatus("Copy failed. Please try again.");
      });
  };
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want stunning slide decks?
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-10">
            Let us create something amazing together.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div
              className="p-6 rounded-lg text-center w-full md:w-60 hover-lift cursor-pointer"
              style={{
                backgroundColor: "var(--card-background)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mx-auto mb-3 text-black"
                style={{ color: "var(--bd-text)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--bd-text)" }}
              >
                Email Me
              </h3>
              <div
                onClick={handleCopyEmail}
                className="text-black transition-colors hover-glow"
                style={{ color: "var(--bd-text)" }}
              >
                ranehobasi@gmail.com
              </div>
            </div>

            <div
              className="p-6 rounded-lg shadow-lg text-center w-full md:w-60 hover-lift"
              style={{
                backgroundColor: "var(--card-background)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mx-auto mb-3 text-black"
                style={{ color: "var(--bd-text)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--bd-text)" }}
              >
                Social Media
              </h3>
              <div className="flex justify-center space-x-4">
                <Link
                  href="https:linkedin.com/in/raneh-egbe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition-colors social-icon"
                  style={{ color: "var(--bd-text)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/Ranecodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition-colors social-icon"
                  style={{ color: "var(--bd-text)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://medium.com/@ranehobasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition-colors social-icon"
                  style={{ color: "var(--bd-text)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href={`mailto:${"ranehobasi@gmail.com"}`}
              className="text-white px-8 py-4 rounded-md text-lg font-semibold social-icon transition-colors shadow-lg cursor-pointer"
              style={{
                backgroundColor: "var(--btn-color)",
                color: "var(--btn-text)",
              }}
            >
              Get In Touch
            </Link>

            {copyStatus && (
              <div className="mt-2 text-sm font-medium text-green-600">
                {copyStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
