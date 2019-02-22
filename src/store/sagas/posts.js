import { put, takeEvery, all  } from "redux-saga/effects";
import axios from "axios";

/*
  defining worker function to fetch posts
*/ 
export function* fetchPosts() {
  try {
    let response = yield axios({
      method: 'get',
      url: "https://jsonplaceholder.typicode.com/posts",
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    })

    const payload = response.data
    console.log("payload: ", payload);

    yield put({ type: "POSTS_API_CALL_SUCCESS", payload })
  } catch (e) {
    yield put({ type: "POSTS_API_CALL_FAILURE", e })
  } finally {

  }
}

/*
  defining worker function to fetch post
*/
export function* fetchPost(action) {
  try {
    let response = yield axios({
      method: 'get',
      url: "https://jsonplaceholder.typicode.com/posts/" + action.id,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    })

    const payload = response.data

    yield put({ type: "FETCH_POST_API_CALL_SUCCESS", payload })
  } catch (e) {
    yield put({ type: "FETCH_POST_API_CALL_FAILURE", e })
  } finally {

  }
}

/*
  defining watcher function to fetch posts
*/
export function* watchFetchPosts() {
  yield takeEvery('POSTS_API_CALL_INIT', fetchPosts)
}

/*
  defining watcher function to fetch post
*/
export function* watchFetchPost() {
  yield takeEvery('FETCH_POST_API_CALL_INIT', fetchPost)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchFetchPost()
  ])
}
