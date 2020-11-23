import { useState, useEffect, useRef } from "react";

export default function useHover() {
  // Reference to the element we're listen for events from
  const ref = useRef();

  // Hover state management
  const [hovered, setHovered] = useState(false);

  // Simple effect, just bind and unbind the event handlers
  useEffect(() => {
    const currentRef = ref.current;

    // Event handlers
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    if (!currentRef) {
      console.warn(
        "Ref element from useHover hasn't been assigned. You might want to make sure you passed it to an element that supports passing up a Ref."
      );
      return;
    }

    currentRef.addEventListener("mouseenter", enter, false);
    currentRef.addEventListener("mouseleave", leave, false);
    return () => {
      currentRef.removeEventListener("mouseenter", enter, false);
      currentRef.removeEventListener("mouseleave", leave, false);
    };
  }, [setHovered, ref]);

  return [ref, hovered];
}
