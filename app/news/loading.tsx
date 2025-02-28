import Spinner from "@/components/Spinner";
import React from "react";

export default function loading() {
  const text = "loading...";
  return (
    <>
      <Spinner text={text} />
    </>
  );
}
