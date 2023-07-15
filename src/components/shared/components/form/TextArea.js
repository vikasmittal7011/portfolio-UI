import React from "react";

function TextArea(props) {
  const { value, name, id, type, placeHolder, row, handleChange } = props;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fs-5">
        {name}
      </label>
      <textarea 
        value={value}
        type={type}
        className="form-control"
        name={id}
        placeholder={placeHolder}
        required
        rows={row || 3}
        onChange={(e) => {
          handleChange(e.target.name, e.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default TextArea;
