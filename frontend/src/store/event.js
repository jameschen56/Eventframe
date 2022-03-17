import { csrfFetch } from "./csrf";

const GET_EVENT = "events/GET_EVENTS";
const GET_EVENTS = "events/GET_EVENT";
const EDIT_EVENT = "events/EDIT_EVENT";
const DELETE_EVENT = "events/DELETE_EVENT";

// ------- action creators ---------
const getEvents = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

const getEvent = (event) => {
  return {
    type: GET_EVENT,
    event,
  };
};

const editEvent = (event) => {
  return {
    type: EDIT_EVENT,
    event,
  };
};

const deleteEvent = (id) => {
  return {
    type: DELETE_EVENT,
    id,
  };
};

// ------- thunk action creators ---------
export const getAllEvents = () => async (dispatch) => {
  const response = await csrfFetch(`/api/events`);

  if (response.ok) {
    const data = await response.json();
    dispatch(getEvents(data));
    return data;
  }
};

export const getSingleEvent = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${id}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(getEvent(data));
    return data;
  }
};

export const editOneEvent = (event) => async (dispatch) => {
  
  const response = await csrfFetch(`/api/events/${event.id}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
  if (response.ok) {
    const data = await response.json();
    console.log('@@@@@@@@@@@@@', data)
    dispatch(editEvent(data));
    return data;
  }
};

export const deleteSingleEvent = (id) => async (dispatch) => {
  console.log("!!!!!!!!!!!!!!", id);
  const response = await csrfFetch(`/api/events/delete/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    await dispatch(deleteEvent(id));
    return response;
  }
};

// ------- reducer ---------
const eventsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_EVENTS:
      newState = { ...state };
      action.events.forEach((event) => {
        newState[event.id] = event;
      });
      return newState;
    case GET_EVENT:
      newState = { ...state };
      newState[action.event.id] = action.event;
      return newState;
    case EDIT_EVENT:
      newState = {...state};
      newState[action.event.id] = action.event;
      return newState;
    case DELETE_EVENT:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;
