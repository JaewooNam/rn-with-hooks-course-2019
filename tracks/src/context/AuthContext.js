import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import tracker from '../api/tracker';
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signup':
      return { errorMessage: '', token: action.payload }
    default:
      return state
  }
}

// EXAMPLE ARROW FUNCTION
// const add = (a,b)=> {
//   return a + b
// }

// const add = (a,b)=> a + b

const signup = (dispatch) => async ({ email, password }) => {
  // make api request to sign up with that email and password
  // if we sign up, modify our state, and say that we are authenticated
  // if signing up fails, we probably need to reflext an error message
  try {
    const response = await trackerApi.post('/signup', { email, password })
    // console.log(response.data) // token
    await AsyncStorage.setItem('token', response.data.token) // for auto login
    // await AsyncStorage.getItem('token')
    dispatch({ type: 'signup', payload: response.data.token })

    // navigate to main flow
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
}


const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure buy showing error message (somehow)
  }
}

const signout = (dispatch) => {
  return () => {

  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' } // Initial State
)
