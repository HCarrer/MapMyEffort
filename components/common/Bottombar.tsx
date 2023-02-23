import Link from "next/link"
import Image from 'next/image'
import { BOTTOMBAR_SECTIONS } from "../../constants/sections"

const Bottombar = () => {
  return (
    <div className="flex items-center gap-x-6 justify-center mb-4">
      <div className="flex flex-col">
        {BOTTOMBAR_SECTIONS.map((row) => {
          return (
            <div key={row.id} className="flex justify-end gap-x-8">
              {row.sections.map((section) => {
                return (
                  <Link  href={section.route} key={section.id}>
                    <p className="text-white text-xs font-normal tracking-widest mr- hover:text-light-blue">
                      {section.name}
                    </p>
                  </Link>
                )
              })}
            </div>
          )
        })}
      </div>
      <Link  href="https://www.strava.com" rel="no_referrer" target="_blank">
        <Image src='/assets/powered-by-strava.svg' alt='Mountain Elevation Plotting' width={90} height={50} className="ml-auto mr-0"/>
      </Link>
    </div>
  )
}

export default Bottombar