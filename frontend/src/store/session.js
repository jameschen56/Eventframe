import { csrfFetch } from './csrf'

const SET_SESSION = 'session/SET_SESSION'
const REMOVE_SESSION = 'session/REMOVE_SESSION'

/* ----- ACTIONS ------ */
const setSession = (user) => {
  return {
    type: SET_SESSION,
    user
  }
}

const removeSession = () => {
  return {
    type: REMOVE_SESSION
  }
}

/* ------ THUNK ACTIONS ------ */
export const login = ({credential, password}) => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: "POST",
    body: JSON.stringify({
      credential,
      password
    })
  })
  if (response.ok) {
    const data = await response.json();
    dispatch(setSession(data.user))
    return response;
  }
}

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setSession(data.user));
  return response;
}

export const signup = (user) => async (dispatch) => {
  const { username, email, password} = user;
  const response = await csrfFetch('/api/users', {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password
    })
  })
  const data = await response.json()
  dispatch(setSession(data.user))
  return response;
}

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: "DELETE"
  })

  dispatch(removeSession())
  return response;
}


/* ------ REDUCER ------ */

const initialState = { user: null }

export default function sessionReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_SESSION:
      newState = { user: action.user}
      return newState;
    case REMOVE_SESSION:
      return initialState;
    default:
      return state;
  }
}

