import { UserProfile } from "@clerk/nextjs";

export const metadata = {
  title: "Traverse App | Profile",
  description: "Customize your profile right here.",
};

export default function ProfilePage() {
  return (
    <div className="mt-14">
      <UserProfile />;
    </div>
  );
}
