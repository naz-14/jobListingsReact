/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import PropTypes from "prop-types"
import uuid from "react-uuid"
import useFetch from "../../hooks/useFetch"

const JobList = ({ handleAddTag, tags = [] }) => {
  const { loading, data } = useFetch("/data/data.json")
  return (
    <>
      {loading && <div className="loading">Cargando....</div>}
      <div className="jobs-grid__container">
        <div className="wrapper">
          {data.map((job) => {
            const filterArray = tags.map(
              ({ tag }) =>
                job.position === tag ||
                job.role === tag ||
                job.level === tag ||
                job.languages.indexOf(tag) > -1 ||
                job.tools.indexOf(tag) > -1
            )
            const jobIncludeTags = filterArray.indexOf(false) === -1
            return (
              <div
                className={`job ${jobIncludeTags ? "" : "hide"}`}
                key={job.id}
              >
                <div className="job-left-content">
                  <div className="job-image-wrapper">
                    <img src={`${job.logo}`} alt="" className="job-image" />
                  </div>
                  <div className="job-description">
                    <p className="job-title">
                      {job.company}
                      {job.new === true ? (
                        <span className="pill new">New!</span>
                      ) : null}
                      {job.featured === true ? (
                        <span className="pill featured">Fetured</span>
                      ) : null}
                    </p>
                    <h2 className="job-position">{job.position}</h2>
                    <div className="job-details">
                      <ul>
                        <li className="detail">· {job.postedAt}</li>
                        <li className="detail">· {job.contract}</li>
                        <li className="detail">· {job.location}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="job-tags">
                  <p
                    className="job-tag role"
                    onClick={(e) => {
                      const newTag = {
                        id: uuid(),
                        tag: e.target.innerText,
                      }
                      handleAddTag(newTag)
                    }}
                  >
                    {job.role}
                  </p>
                  <p
                    className="job-tag level"
                    onClick={(e) => {
                      const newTag = {
                        id: uuid(),
                        tag: e.target.innerText,
                      }
                      handleAddTag(newTag)
                    }}
                  >
                    {job.level}
                  </p>
                  {job.languages.map((language) => (
                    <p
                      className="job-tag language"
                      onClick={(e) => {
                        const newTag = {
                          id: uuid(),
                          tag: e.target.innerText,
                        }
                        handleAddTag(newTag)
                      }}
                    >
                      {language}
                    </p>
                  ))}
                  {job.tools.map((tool) => (
                    <p
                      className="job-tag language"
                      onClick={(e) => {
                        const newTag = {
                          id: uuid(),
                          tag: e.target.innerText,
                        }
                        handleAddTag(newTag)
                      }}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
JobList.propTypes = {
  handleAddTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default JobList
