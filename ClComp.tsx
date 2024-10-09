"use client";

import {useEffect, useState} from "react";
import {utils} from "./utils";

export const ClComp: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  if (isMounted) utils();

  return (
    <>
      <p></p>
    </>
  );
};
