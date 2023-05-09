import React from "react";
import Form from "react-bootstrap/Form";

const CustomInput = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3 gap-2">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};

export default CustomInput;
