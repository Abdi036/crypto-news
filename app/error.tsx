"use client";

import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function error({ error, reset }: ErrorProps) {
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg text-primary-50">{error.message}</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
