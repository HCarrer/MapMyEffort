import Image from 'next/image'

const YourNumbersText = () => {
  return (
    <div className="flex gap-x-10 w-full h-64">
      <div className="w-1/2">
        <div className="text-sm font-sans tracking-[.5em]">
          <span className="text-white">
            YOUR {' '}
          </span>
          <span className="text-light-blue">
            NUMBERS
          </span>
        </div>
        <div className="text-8xl font-anton ">
          <span className="text-white">
            AS YOU`VE NEVER {' '}
          </span>
          <span className="text-light-blue">
            SEEN
          </span>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <Image src='/assets/Measurements.svg' alt='Mountain Elevation Plotting' width={450} height={50} className="ml-auto mr-0"/>
      </div>
    </div>
  )
}

export default YourNumbersText