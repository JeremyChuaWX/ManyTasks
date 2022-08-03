import AuthButton from "./auth-button";
import Avatar from "./avatar-component";

function Navbar() {
  return (
    <div className="h-20">
      <div className="flex h-full justify-end gap-4 py-2 px-4 items-center">
        <AuthButton />
        <Avatar />
      </div>
    </div>
  );
}

export default Navbar;
