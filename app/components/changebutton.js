"use client";

import { useState } from "react";

export default function ChangeButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/change");

      if (res.ok) {
        const data = await res.json();
        alert(
          `bg color: ${data.theme.bgColor}, font style: ${data.theme.fontStyle}`,
        );
        window.location.reload();
      } else {
        alert("something failed");
      }
    } catch (error) {
      alert("error! " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="bg-blue-500 text-white rounded-xl py-3 px-6 disabled:bg-gray-400"
    >
      {loading ? "Changing..." : "Change Theme"}
    </button>
  );
}
