import React from "react";

export default function Spinner({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <p className="text-bold text-primary-100 mt-2">{text}</p>
    </div>
  );
}
