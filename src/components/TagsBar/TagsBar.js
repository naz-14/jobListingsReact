import React from "react"
import PropTypes from "prop-types"

const TagsBar = ({ tags, handleRemoveTag, handleRemoveAllTags }) => (
  <>
    <div className="tags-bar wrapper">
      <div className="tags-container">
        {tags.map(({ id, tag }) => (
          <div className="tag-wrapper" key={id}>
            <li className="tag-in-bar" id={id}>
              {tag}
            </li>
            <button
              className="remove-tag"
              type="button"
              onClick={() => handleRemoveTag(id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="clearAllContainer">
        <button
          className="clear-all"
          type="button"
          onClick={() => handleRemoveAllTags()}
        >
          Clear All
        </button>
      </div>
    </div>
  </>
)
TagsBar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveTag: PropTypes.func.isRequired,
  handleRemoveAllTags: PropTypes.func.isRequired,
}
export default TagsBar
