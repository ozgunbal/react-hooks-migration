import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Field from "./Field";

const sendForm = form => ({
  type: "SUBMIT_FORM",
  payload: form
});

const setter = handler => ({ target }) =>
  handler(target.type === "checkbox" ? target.checked : target.value);

const FormDisplay = ({ number }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState();
  const [idFlag, setIdFlag] = useState(false);
  const [id, setId] = useState(0);

  const submitForm = evt => {
    evt.preventDefault();
    dispatch(
      sendForm({
        name,
        hobby,
        idFlag,
        ...(idFlag ? { id } : {})
      })
    );
  };

  return (
    <div>
      <h2>Form Example {number}</h2>
      <form onSubmit={submitForm}>
        <Field
          type="text"
          label="Full name"
          name="name"
          value={name}
          onChange={setter(setName)}
        />
        <Field label="Hobbies" id="hobby">
          <select
            name="hobby"
            className="form-control"
            value={hobby}
            onChange={setter(setHobby)}
          >
            <option value="cooking">cooking</option>
            <option value="running">running</option>
            <option value="coding">coding</option>
            <option value="driving">driving</option>
          </select>
        </Field>
        <Field
          type="checkbox"
          label="Custom ID"
          name="idFlag"
          containerClass="form-check custom-checkbox"
          inputClass="form-check-input"
          labelClass="form-check-label"
          checked={idFlag}
          onChange={setter(setIdFlag)}
        />
        {idFlag && (
          <Field
            label="ID"
            type="number"
            name="id"
            value={id}
            onChange={setter(setId)}
          />
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormDisplay;
