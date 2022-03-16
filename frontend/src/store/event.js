import { csrfFetch } from "./csrf"

const GET_EVENT = 'events/getEvent'
const GET_EVENTS = 'events/getEvents'

// ------- action creators ---------
const getEvents = (events) => {
    return {
        type: GET_EVENTS,
        events
    }
}

const getEvent = (event) => {
    return {
        type: GET_EVENT,
        event
    }
}

// ------- thunk action creators ---------
export const getAllEvents = () => async dispatch => {
    const response = await csrfFetch(`/api/events`);

    if(response.ok) {
        const data = await response.json()
        dispatch(getEvents(data))
        return data
    }
}

export const getSingleEvent = (id) => async dispatch => {
    const response = await csrfFetch(`/api/events/${id}`);

    if(response.ok) {
        const data = await response.json()
        dispatch(getEvent(data))
        return data
    }
}

// ------- reducer ---------
const eventsReducer = (state = {}, action ) => {
    let newState;
    switch(action.type) {
        case GET_EVENTS:
            newState = {...state };
            action.events.forEach((event) => {
                newState[event.id] = event
            })
            return newState;
        case GET_EVENT:
            newState = { ...state };
            newState[action.event.id] = action.event;
            return newState
        default:
            return state;
    }

}

export default eventsReducer;