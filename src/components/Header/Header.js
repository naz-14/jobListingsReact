import React, { useEffect, useState } from "react"

const Header = () => {
  const mediaMatch = window.matchMedia("(min-width:768px)")
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    const handler = (e) => {
      setMatches(e.matches)
    }
    mediaMatch.addEventListener("change", handler)
    return () => {
      mediaMatch.removeEventListener("change", handler)
    }
  }, [mediaMatch])

  const style = {
    container: (isDesktop) => ({
      background: isDesktop
        ? "url('/img/bg-header-desktop.svg') #64a1a2 center/cover no-repeat"
        : "url('/img/bg-header-mobile.svg') #64a1a2 center/cover no-repeat",
    }),
  }
  return (
    <>
      <header className="site-header" style={style.container(matches)} />
    </>
  )
}

export default Header
