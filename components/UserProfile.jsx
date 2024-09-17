import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export async function UserProfile() {
  const user = await currentUser();
  // console.log(user.emailAddresses[0].emailAddress);

  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}
