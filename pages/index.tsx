import YourNumbersText from "../components/pages/index/YourNumbersText";
import Separator from "../components/pages/index/Separator";
import FAQ from "../components/pages/index/FAQ";
import BehindTheProject from "../components/pages/index/BehindTheProject";
import Bottombar from "../components/common/Bottombar";

// const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export default function Home() {

  return (
    <>
      <div className="px-40 w-full">
        <YourNumbersText/>
        <Separator/>
        <FAQ/>
        <Separator/>
        <BehindTheProject/>
        <Separator isLast/>
        <Bottombar/>
      </div>
    </>
  );
}
