import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editOneEvent } from "../../../store/event";

const EditEvent = ({ onClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const event = useSelector((state) => state.event[id]);
  // const event_Date =
  //   new Date(event.eventDate).toString().split(" ")[1] +
  //   " " +
  //   new Date(event.eventDate).toString().split(" ")[2] +
  //   " " +
  //   new Date(event.eventDate).toString().split(" ")[3];
  
  // console.log('%%%%%%%%%%%%%%%%%%', event_Date)

  const [title, setTitle] = useState(event?.title || "");
  const [imageUrl, setImageUrl] = useState(event?.imageUrl || "");
  const [description, setDescription] = useState(event?.description || "");
  const [eventDate, setEventDate] = useState(event?.eventDate.slice(0,10) || "");
  const [location, setLocation] = useState(event?.setLocation || "");
  const [errorValidator, setErrorValidator] = useState([]);

  console.log('^^^^^^^^^^^^', useState(event?.eventDate.slice(0,10) || "") )

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

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setImageUrl(event.imageUrl);
      setDescription(event.description);
      setEventDate(event.eventDate);
      setLocation(event.location);
    }
  }, [event]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...event,
      title,
      imageUrl,
      description,
      eventDate,
      location,
    };

    const updatedEvent = await dispatch(editOneEvent(payload));
    if (updatedEvent) {
      history.push(`/events/${event.id}`);
      onClose(false);
    }
  };
  return (
        <form className="edit-event" onSubmit={handleEditSubmit}>
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
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="edit_event_input-bar"
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
              className="edit_event_input-bar"
            />
          </div>
          <div className="description-input">
            <label> Description </label>
            <textarea
              id="form-label-Date"
              placeholder="Date"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="edit_event_description_input-bar"
            />
          </div>
          <div className="title-input">
            <label> Date </label>
            <input
              id="form-label-Date"
              placeholder='date'
              type="date"
              defaultValue={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="edit_event_input-bar"
            />
          </div>
          <div className="title-input">
            <label> Location </label>
            <input
              id="form-label-location"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="edit_event_input-bar"
            />
          </div>
          <button
            className="edit-event-button"
            type="submit"
            disabled={errorValidator.length > 0}
          >
            Submit
          </button>
          <button className="cancel-edit-button" onClick={onClose}>
            Cancel
          </button>
        </form>
  );
};

export default EditEvent;
