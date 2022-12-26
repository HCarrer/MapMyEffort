import Link from "next/link";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export default function Home() {

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-fit border border-black">
          <Link href={`http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=activity:read_all`}>Fazer Login</Link>
        </div>
      </div>
    </>
  );
}
