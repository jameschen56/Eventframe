import { csrfFetch } from "./csrf";

const GET_EVENT = "events/GET_EVENTS";
const GET_EVENTS = "events/GET_EVENT";
const ADD_EVENT = "events/ADD_EVENT";
const EDIT_EVENT = "events/EDIT_EVENT";
const DELETE_EVENT = "events/DELETE_EVENT";
const FILTER_EVENTS = "event/filterEvents"

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

const addEvent = (event) => {
  return {
    type: ADD_EVENT,
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

const filterEventsAction = (events) => {
  return {
    type: FILTER_EVENTS,
    payload: events,
  }
}

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
    dispatch(editEvent(data));
    return data;
  }
};

export const addOneEvent = (event) => async (dispatch) => {
  const response = await csrfFetch('/api/events/new', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addEvent(data))
    return data
  }
}

export const deleteSingleEvent = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/delete/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    await dispatch(deleteEvent(id));
    const res = await response.json()
    return res;
  }
};

export const searchEvents = (searchString) => async dispatch => {
  const response = await csrfFetch(`/api/events/search/${searchString}`);

  if (response.ok) {
    const events = await response.json();
    dispatch(filterEventsAction(events));
  }
};

// ------- reducer ---------
const eventsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_EVENTS:
      newState = {};
      newState = action.events.reduce((events, event) => {
        events[event.id] = event;
        return events
      }, {});
      return newState;
    case GET_EVENT:
      newState = { ...state };
      newState[action.event.id] = action.event;
      return newState;
    case ADD_EVENT:
      newState = { ...state };
      newState[action.event.id] = action.event;
      return newState
    case EDIT_EVENT:
      newState = {...state};
      newState[action.event.id] = action.event;
      return newState;
    case DELETE_EVENT:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    case FILTER_EVENTS:
      newState = { ...state };
      newState = action.payload.reduce((events, event) => {
        events[event.id] = event;
        return events
      }, {});
      return newState
    default:
      return state;
  }
};

export default eventsReducer;
