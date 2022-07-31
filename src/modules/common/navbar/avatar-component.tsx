import { useSession } from "next-auth/react";
import Image from "next/future/image";

function Avatar() {
  const { data: session } = useSession();
  const avatarUrl = session?.user?.image ?? "/avatar-blank.png";

  return (
    <Image
      alt="avatar image"
      src={avatarUrl}
      width="40"
      height="40"
      className="rounded-full relative overflow-hidden"
      quality="40"
    />
  );
}

export default Avatar;
