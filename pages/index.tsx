import YourNumbersText from "../components/pages/index/YourNumbersText";
import Separator from "../components/pages/index/Separator";
import FAQ from "../components/pages/index/FAQ";

// const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export default function Home() {

  return (
    <>
      <div className="px-40 w-full">
        <YourNumbersText/>
        <Separator/>
        <FAQ/>
      </div>
    </>
  );
}
