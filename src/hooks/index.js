import { useState, useCallback } from "react";

export const useToggle = (initialValue = false) => {
  const [isOn, setIsOn] = useState(initialValue);

  const toggleHandler = useCallback(() => {
    setIsOn((v) => !v);
  }, []);

  return [isOn, toggleHandler];
};
