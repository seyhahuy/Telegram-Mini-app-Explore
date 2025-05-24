/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import { usePathname,useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [storedValue, setStoredValue] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save to localStorage
      localStorage.setItem("groupId", "1234");

      // Read from localStorage
      const value = localStorage.getItem("groupId");
      setStoredValue(value);
    }
  }, []);
  return (
    <div>
      <h1>Welcome to the Telegram Mini App!</h1>
      {storedValue && <p>Hello, {storedValue}</p>}
      asd
    </div>
  );
}
