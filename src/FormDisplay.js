import React, { Component } from "react";
import { connect } from "react-redux";
import Field from "./Field";

class FormDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hobby: undefined,
      idFlag: false,
      id: 0
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitForm(evt) {
    evt.preventDefault();
    this.props.sendForm(this.state);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]:
        evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
    });
  }
  render() {
    const { name, hobby, idFlag, id } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <Field
            type="text"
            label="Full name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Field label="Hobbies" name="hobby">
            <select
              name="hobby"
              id="hobby"
              value={hobby}
              onChange={this.handleChange}
              className="form-control"
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
            onChange={this.handleChange}
          />
          {idFlag && (
            <Field
              label="ID"
              type="number"
              name="id"
              value={id}
              onChange={this.handleChange}
            />
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const sendFormAction = form => ({
  type: "SUBMIT_FORM",
  payload: form
});

const mapDispatchToProps = dispatch => ({
  sendForm: form => dispatch(sendFormAction(form))
});
export default connect(null, mapDispatchToProps)(FormDisplay);
