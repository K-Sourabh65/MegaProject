import { React, useEffect } from "react"

export default function Logout() {

    useEffect(() => {
        localStorage.setItem('autentication', false)
        window.location.href = ('/');
      }, [])

  return (
    <>
    </>
  )
}
