import { NavLinks } from "./NavLinks";
import { SidebarHeader } from "./SidebarHeader";
import { UserProfile } from "./UserProfile";

//TODO add a user section to the sidebar at the bottom of the page

export function Sidebar() {
  return (
    <div className="px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]">
      <SidebarHeader />
      <NavLinks />
      <UserProfile />
    </div>
  );
}
