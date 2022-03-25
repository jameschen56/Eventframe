import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addOneEvent } from "../../../store/event";
import "./CreateEvent.css";

const CreateEvent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [errorValidator, setErrorValidator] = useState([]);

  useEffect(() => {
    const errors = [];
    if (!title) errors.push("Please provide a title");
    if (!description) errors.push("Please provide a description");
    // if (!imageUrl.length) errors.push("Please provide a valid URL");
    // if (imageUrl.length > 0 && !imageUrl.match(/^https?:\/\/.+\/.+$/))
    //   errors.push("Please provide a valid URL");
    if (!imageUrl.length) errors.push("Image file must end in a jpeg/jpg/gif/png format");
    if (imageUrl.length > 0 && !imageUrl.match(/\.(jpeg|jpg|gif|png)$/))
      errors.push("Image file must end in a jpeg jpg gif or png format");
    if (!eventDate) errors.push("Please provide a date");
    if (!location) errors.push("Please provide a location");
    setErrorValidator(errors);
  }, [title, imageUrl, description, eventDate, location, dispatch]);

  const toCreateEvent = () => {
    history.push("/");
  };

  const newEventSubmit = (e) => {
    e.preventDefault();
    const payload = {
      user_Id: user.id,
      title,
      imageUrl,
      description,
      eventDate,
      location,
    };
    dispatch(addOneEvent(payload))
      .then((res) => {
        if (res) history.push("/");
      })
      .catch(async (err) => {
        const errors = await err.json();
        // console.log('SSSSSSS' , errors)
      });
  };

  return (
    <div className="main-create-event-container">
      <form className="create-event" onSubmit={newEventSubmit}>
        <h1>Event Details</h1>
        <ul>
          {errorValidator.map((error) => (
            <li className="error-list" key={error}>
              {error}
            </li>
          ))}
        </ul>
        <div className="title-input">
          <label> Title </label>
          <input
            id="form-label-title"
            placeholder="Be clear and descriptive"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="create_event_input-bar"
          />
        </div>
        <div className="description-input">
          <label> Description </label>
          <textarea
            id="form-label-Date"
            placeholder="Please tell us more about this event .."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="create_event_description_input-bar"
          />
        </div>
        <div className="image-input">
          <label> Image Url</label>
          <input
            id="form-label-image"
            type="text"
            placeholder="Image Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="create_event_input-bar"
          />
        </div>
        <div className="title-input">
          <label> Date </label>
          <input
            id="form-label-Date"
            type="date"
            placeholder="Date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="create_event_input-bar"
          />
        </div>
        <div className="title-input">
          <label> Location </label>
          <input
            id="form-label-location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="create_event_input-bar"
          />
        </div>
        <button
          className="cancel-event-button"
          type="submit"
          onClick={toCreateEvent}
          // disabled={errorValidator.length > 0}
        >
          Cancel
        </button>
        <button
          className="create-event-button"
          type="submit"
          disabled={errorValidator.length > 0}
          >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
