/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react"
import { useAuthentication } from "../context/authenticationContext";



const ExchangeToken = () => {
  const router = useRouter()
  const { handleAuthentication, authentication } = useAuthentication()

  useEffect(() => {
    if(!router.query.code) return
    handleAuthentication(router.query.code.toString())
  }, [router.query.code])

  useEffect(() => {
    if (!authentication) return
    router.push('/activities')
  }, [authentication])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border">
        <p>Please wait a minute while we proceed with the rest of the authentication</p>
      </div>
      {/* <Link href={"/activities"}>Check my activities</Link> */}
    </div>
  )
}

export default ExchangeToken