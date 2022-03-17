import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editOneEvent } from "../../../store/products";

const EditEvent = ({ onClose }) => {
  const dispatch = useDispatch();
  const history = useHistory()

}

export default EditEvent;