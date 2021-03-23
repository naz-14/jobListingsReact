import React, { useReducer } from "react"
import Header from "./components/Header/Header"
import JobList from "./components/JobList/JobList"
import TagsBar from "./components/TagsBar/TagsBar"
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

  return (
    <div className="App">
      <Header />
      <TagsBar tags={tags} />
      <JobList handleAddTag={handleAddTag} tags={tags} />
    </div>
  )
}

export default App
