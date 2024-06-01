import StackIcon from "tech-stack-icons";

export default function TechStackIcon({ icon }: { icon: string }) {
  return <StackIcon name={icon} style={{ width: "20px", height: "20px" }} />;
}
