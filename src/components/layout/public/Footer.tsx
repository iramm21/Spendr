"use client";

import React, { useState, useEffect } from "react";
import { FooterDesktop } from "./FooterDesktop";
import { FooterMobile } from "./FooterMobile";

export function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
}
