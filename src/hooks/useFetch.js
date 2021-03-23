import { useEffect, useState } from "react"
import getData from "../helpers/getData"

const useFetch = (url) => {
  const [state, setState] = useState({
    loading: true,
    data: [],
    error: null,
  })
  useEffect(() => {
    setTimeout(() => {
      getData(url).then((data) => {
        setState({
          loading: false,
          data,
          error: null,
        })
      })
    }, 2000)
  }, [url])
  return state
}

export default useFetch
