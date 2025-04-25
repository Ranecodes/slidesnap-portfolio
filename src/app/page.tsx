// Import necessary modules and components
import Hero from "./components/Hero";
import SlideGallery from "./components/SlideGallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section id="home" className="">
        <Hero /> {/* Add Hero component here */}
      </section>

      {/* Slide Gallery Section */}
      <section id="gallery" className="mt-16">
        <SlideGallery /> {/* Add SlideGallery component here */}
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="mt-16">
        <Contact /> {/* Add Contact component here */}
      </section>

      {/* Footer Section */}
      <footer className="mt-16 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; 2025 SlideSnap Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
