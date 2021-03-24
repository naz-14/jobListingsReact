const tagsReducer = (state, action = { payload: { tag: "" } }) => {
  const { tag } = action.payload
  let alreadyIncluded = []
  let newState = []
  switch (action.type) {
    case "add":
      alreadyIncluded = state.map((object) => object.tag === tag)
      if (alreadyIncluded.indexOf(true) > -1) {
        return state
      }
      return [...state, action.payload]
    case "remove":
      newState = state.filter((object) => object.id !== action.payload)
      return newState
    case "removeAll":
      console.log("remove all")
      return newState
    default:
      return state
  }
}

export default tagsReducer
