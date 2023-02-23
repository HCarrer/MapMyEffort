import Image from 'next/image'
import Link from 'next/link'

const BehindTheProject = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8">
      <span className="text-white font-anton text-4xl">
        WHO`S BEHIND THE PROJECT?
      </span>
      <div className="grid grid-cols-5 gap-x-8">
        <div className='col-span-1 aspect-square border-2 border-light-blue'>
          <Link href="https://www.linkedin.com/in/henrique-carrer-094563191/" rel='no_referrer' target="_blank">
            <Image src='/assets/Profile-picture.jpg' alt='Mountain Elevation Plotting' width={450} height={50} className="ml-auto mr-0"/>
          </Link>
        </div>
        <div className='col-span-4 text-white text-lg leading-6'>
          <p>
            Hello! I`m Henrique Carrer, a 23yr old junior Software Engineer with a lifetime passion for sports.
          </p>
          <p>
            On early September of 2022 I bought an entry level mountain bike in order to stay more active and become healthier. The passion was immediate! Three months later I invested in an used road bike so I could dive deeper into the cycling world.
          </p>
          <p>
            I started sharing all my activities with my closest friends and most of them had a feeling I was lacking: a big shock with the distances I was covering... I knew the distances were big, but how would they fit in a more relatable real world example?
          </p>
          <p>
            With that thought in mind and the desire of launching my first ever personal software project I decided I was going to create the platform you`re now on. Hope you enjoy it. {':)'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BehindTheProject