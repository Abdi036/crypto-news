import React from "react";

export default function Filter() {
  return (
    <div className="border border-primary-800 flex flex-wrap xs:flex-nowrap justify-center xs:justify-start gap-2 xs:gap-4 p-2">
      <Button>Trending</Button>
      <Button>New to old</Button>
      <Button>Old to new</Button>
    </div>
  );
}

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 text-sm xs:text-base bg-primary-900 hover:bg-primary-700 text-primary-100 rounded transition-all">
      {children}
    </button>
  );
}
