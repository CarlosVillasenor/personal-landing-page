import { useEffect, useState } from "react";

/**
 * Tracks which page <section> is currently active in the viewport.
 *
 * The hook observes all `section` elements on the page with an
 * `IntersectionObserver` and updates state when a section intersects the
 * viewport. The observer uses a centered root margin so the active section
 * changes around the middle area of the screen.
 *
 * @returns The `id` of the currently active section.
 */

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    // Get all sections on the page
    const sections = document.querySelectorAll("section");

    // Create an IntersectionObserver to observe when sections enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set the active section to the id of the intersecting section
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
