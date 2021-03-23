const tagsReducer = (state = [], action = { payload: { tag: "" } }) => {
  const { tag } = action.payload
  let alreadyIncluded = []
  switch (action.type) {
    case "add":
      alreadyIncluded = state.map((object) => object.tag === tag)
      if (alreadyIncluded.indexOf(true) > -1) {
        return state
      }
      return [...state, action.payload]
    default:
      return state
  }
}

export default tagsReducer
