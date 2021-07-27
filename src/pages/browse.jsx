import React from "react";
import useContent from "../hooks/content";
export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  return <></>;
}
