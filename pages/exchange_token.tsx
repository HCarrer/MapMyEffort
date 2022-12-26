/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react"
import { useCode } from "../context/authCodeContext";
import { getAuthToken } from "../instances/auth";


const ExchangeToken = () => {
  const router = useRouter()
  const { handleAuthCode, authCode, handleRefreshToken } = useCode()

  useEffect(() => {
    if(!router.query.code) return
    handleAuthCode(router.query.code.toString())
  }, [router.query.code])
  
  useEffect(() => {
    if(!authCode) return
    post()
  }, [authCode])

  const post = async () => {

    const { data }  = await getAuthToken(authCode)
    handleRefreshToken(data.data.access_token)
  }

  return (
    <>
      <span>just wait a minute</span>
      <Link href={"/activities"}>Go to next page</Link>
    </>
  )
}

export default ExchangeToken