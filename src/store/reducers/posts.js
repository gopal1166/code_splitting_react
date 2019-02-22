/*
  store redux
*/
let initialState = {
  count: 0,
  posts: null,
  errors: null,
  post: null
}

const postsReducer = (state=initialState, action) => {
  switch (action.type) {

      case "POSTS_API_CALL_SUCCESS":
        return {
          ...state,
          posts: action.payload
        }

      case "POSTS_API_CALL_FAILURE":
        return {
          ...state,
          errors: action.e
        }

      case "FETCH_POST_API_CALL_SUCCESS":
        return {
          ...state,
          post: action.payload
        }

      case "FETCH_POST_API_CALL_FAILURE":
        return {
          ...state,
          errors: action.e
        }


    default:
      return state
  }
}

export default postsReducer;
