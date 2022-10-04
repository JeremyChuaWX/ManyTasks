import AuthButton from "./auth-button";

function Header() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center p-4">
      <h1 className="font-bold text-2xl underline italic">ManyTasks</h1>
      <ul className="justify-self-end flex justify-between">
        <li>
          <AuthButton />
        </li>
      </ul>
    </div>
  );
}

export default Header;
