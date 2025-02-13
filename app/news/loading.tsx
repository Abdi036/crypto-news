import Spinner from "@/components/Spinner";
import React from "react";

export default function loading({ text }: { text: string }) {
  return (
    <>
      <Spinner text={text} />
    </>
  );
}
