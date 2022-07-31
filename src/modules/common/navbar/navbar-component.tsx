import AuthButton from "./auth-button";
import Avatar from "./avatar-component";

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-slate-400 to-transparent h-20">
      <div className="flex justify-end gap-4 py-2 px-4 items-center">
        <AuthButton />
        <Avatar />
      </div>
    </div>
  );
}

export default Navbar;
