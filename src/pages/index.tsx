import { useSession } from "next-auth/react";
import AuthButton from "../components/auth-button";
import TaskListComponent from "../components/tasklist-component";
import CenterLayout from "../layouts/centerlayout";
import Header from "../components/header";

function Home() {
  const { status } = useSession();

  if (status === "authenticated")
    return (
      <>
        <Header />
        <TaskListComponent />
      </>
    );

  if (status === "loading")
    return (
      <CenterLayout>
        <p>loading...</p>
      </CenterLayout>
    );

  return (
    <CenterLayout>
      <h1 className="font-bold text-4xl italic underline pb-4">ManyTasks</h1>
      <AuthButton />
    </CenterLayout>
  );
}

export default Home;
