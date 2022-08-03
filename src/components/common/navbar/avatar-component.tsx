import { useSession } from "next-auth/react";
import Image from "next/future/image";

function Avatar() {
  const { data: session } = useSession();
  const avatarUrl = session?.user?.image ?? "/avatar-blank.png";

  return (
    <div className="bg-slate-400 rounded-full overflow-hidden">
      <Image
        alt="avatar image"
        src={avatarUrl}
        width="40"
        height="40"
        quality="40"
      />
    </div>
  );
}

export default Avatar;
