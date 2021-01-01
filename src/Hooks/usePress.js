import { useState, useEffect, useRef } from "react";

export default function usePress() {
  // Reference to the element we're listen for events from
  const ref = useRef();

  // Press state management
  const [pressed, setPressed] = useState(false);

  // Simple effect, just bind and unbind the event handlers
  useEffect(() => {
    const currentRef = ref.current;

    // Event handlers
    const enter = () => setPressed(true);
    const leave = () => setPressed(false);

    if (!currentRef) {
      console.warn(
        "Ref element from usePress hasn't been assigned. You might want to make sure you passed it to an element that supports passing up a Ref."
      );
      return;
    }

    currentRef.addEventListener("mousedown", enter, false);
    currentRef.addEventListener("mouseup", leave, false);
    return () => {
      currentRef.removeEventListener("mousedown", enter, false);
      currentRef.removeEventListener("mouseup", leave, false);
    };
  }, [setPressed, ref]);

  return [ref, pressed];
}
