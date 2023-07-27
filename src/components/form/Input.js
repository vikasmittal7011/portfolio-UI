import React from "react";

function Input(props) {
  const { value, name, id, type, placeHolder, handleChange, length } = props;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fs-5">
        {name}
      </label>
      <input
        value={value}
        type={type}
        className="form-control"
        name={id}
        placeholder={placeHolder}
        required
        length={length}
        autoComplete="on"
        onChange={(e) => {
          handleChange(e.target.name, e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
