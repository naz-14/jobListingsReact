import React, { useEffect } from "react"
import PropTypes from "prop-types"

const TagsBar = ({ tags }) => {
  useEffect(() => console.log("cambiaron los tags"), [tags])
  return (
    <div className="tags-bar">
      {tags.map(({ id, tag }) => (
        <li key={id} className="tag-in=bar">
          {tag}
        </li>
      ))}
    </div>
  )
}
TagsBar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default TagsBar
