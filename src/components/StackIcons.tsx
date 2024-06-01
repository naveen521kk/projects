import React from "react";

import StackIcon from "tech-stack-icons";

export function TechStackIcon({ icon }: { icon: string }) {
  return <StackIcon name={icon} style={{ width: "20px", height: "20px" }} />;
}
