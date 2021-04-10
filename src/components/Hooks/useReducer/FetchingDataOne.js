import React,{useReducer,useEffect} from 'react'
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: { }
}

const success = 'FETCH_SUCCESS'
const failed = 'FETCH_FAILED'

const reducer = (state,action) => {
  switch(action.type){
    case success:
      return {
        loading: false,
        error: '',
        post: action.payload
      }
    case failed:
      return {
        loading: false,
        error:'Somethig Wrong',
        post: null
      }  
    default:
      return state  
  }
}

function FetchingDataOne() {

  const[state,dispatch] = useReducer(reducer,initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(res => {
       dispatch({type:success,payload:res.data})
     })
     .catch(error => {
       dispatch({type:failed})
     })
   }, [])

  return (

    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default FetchingDataOne
