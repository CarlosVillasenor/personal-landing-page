"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./AnimatedOnScroll.module.css";

interface AnimatedOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const AnimatedOnScroll = ({
  children,
  className = "",
  threshold = 0.15,
  rootMargin = "0px 0px -50px 0px",
  once = true,
}: AnimatedOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return (
    <div
      ref={elementRef}
      className={`${styles.container} ${
        isVisible ? styles.visible : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
