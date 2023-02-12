import { useRouter } from "next/router";
import { useAuthentication } from "../context/authenticationContext";
import Navbar from "../components/common/navbar";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export default function Home() {
  const { userIsLogged } = useAuthentication()
  const router = useRouter()

  return (
    <>
      <Navbar/>
    </>
  );
}
