import Link from "next/link"
import { useRouter } from "next/router";
import Image from 'next/image'
import { MY_ACCOUNT_SECTION, SECTIONS } from "../../constants/sections"
import { useAuthentication } from "../../context/authenticationContext";
import { useState } from "react";

const Navbar = () => {
  const { userIsLogged } = useAuthentication()
  const router = useRouter()

  const [sectionOnHover, setSectionOnHover] = useState<string>('')

  return (
    <div className="flex justify-between mb-20">
      <div className="w-40 h-fit">
        <Link href='/'>
          <Image src='/assets/TEXT_logo_transparent_background_light_blue_no_space.png' alt='Light Blue Text Logo' width={159} height={62}/>
        </Link>
      </div>
      <div className="flex gap-x-8 items-center">
        {SECTIONS.map((section) => {
          return (
            <div key={section.id} className="relative w-fit h-fit overflow-hidden" onMouseLeave={() => setSectionOnHover('')}>
              <Link onMouseOver={() => setSectionOnHover(section.id)} href={section.route} className="transition duration-200 text-white text-xl font-semibold hover:text-light-blue">{section.name}</Link>
              <div className="grid grid-cols-2 w-full h-0.5">
                <div className={`transition-width duration-200 col-span-1 bg-light-blue ${sectionOnHover == section.id ? 'w-full' : 'w-0'} mr-0 ml-auto`}/>
                <div className={`transition-width duration-200 col-span-1 bg-light-blue ${sectionOnHover == section.id ? 'w-full' : 'w-0'}`}/>
              </div>
            </div>
          )
        })}
        {userIsLogged ? (
          <Link href={MY_ACCOUNT_SECTION.route} className={`transition duration-200 text-white text-xl font-semibold hover:text-light-blue ${MY_ACCOUNT_SECTION.route == router.pathname && 'text-light-blue font-bold underline'}`}>{MY_ACCOUNT_SECTION.name}</Link>
        ) : (
          <Link href='/'>
            <Image src='/assets/connect_with_strava.svg' alt='Light Blue Text Logo' width={130} height={50}/>
          </Link>
          // <div className={`transition duration-200 py-1 px-3 rounded-full bg-light-blue h-fit w-fit hover:shadow-2xl`}>
          //   <button className="text-white text-xl font-semibold">Connect to Strava</button>
          // </div>
          )}
      </div>
    </div>
  )
}

export default Navbar