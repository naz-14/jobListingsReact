import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import TagsBar from "../TagsBar/TagsBar"

const Header = ({ tags, handleRemoveTag, handleRemoveAllTags }) => {
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
      <div className="bg-header" style={style.container(matches)} />
      <header className="site-header">
        {tags.length !== 0 ? (
          <TagsBar
            tags={tags}
            handleRemoveTag={handleRemoveTag}
            handleRemoveAllTags={handleRemoveAllTags}
          />
        ) : (
          ""
        )}
      </header>
    </>
  )
}
Header.propTypes = {
  handleRemoveTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveAllTags: PropTypes.func.isRequired,
}
export default Header
