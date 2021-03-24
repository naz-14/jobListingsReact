import React, { useReducer } from "react"
import Header from "./components/Header/Header"
import JobList from "./components/JobList/JobList"
import tagsReducer from "./reducers/tagsReducer"

function App() {
  const tagsInit = () => []
  const [tags, dispatch] = useReducer(tagsReducer, [], tagsInit)
  const handleAddTag = (tag) => {
    const action = {
      type: "add",
      payload: tag,
    }
    dispatch(action)
  }
  const handleRemoveTag = (id) => {
    const action = {
      type: "remove",
      payload: id,
    }
    dispatch(action)
  }

  const handleRemoveAllTags = () => {
    const action = {
      type: "removeAll",
      payload: "",
    }
    dispatch(action)
  }

  return (
    <div className="App">
      <Header
        tags={tags}
        handleRemoveTag={handleRemoveTag}
        handleRemoveAllTags={handleRemoveAllTags}
      />
      <JobList handleAddTag={handleAddTag} tags={tags} />
    </div>
  )
}

export default App
