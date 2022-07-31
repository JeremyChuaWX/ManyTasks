import { useSession } from "next-auth/react";
import Image from "next/image";

function Avatar() {
  const { data: session } = useSession();
  const avatarUrl = session?.user?.image ?? "/avatar-blank.png";

  return (
    <div className="w-10 h-10 rounded-full relative overflow-hidden">
      <Image
        alt="avatar image"
        src={avatarUrl}
        layout="fill"
        objectFit="contain"
        quality="40"
      />
    </div>
  );
}

export default Avatar;
