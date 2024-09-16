import { FaCampground } from "react-icons/fa6";

export function SidebarHeader() {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <FaCampground className="w-8 h-8 text-primary" />
      <h2 className="text-3xl font-extrabold text-primary mr-auto">Traverse</h2>
    </div>
  );
}
