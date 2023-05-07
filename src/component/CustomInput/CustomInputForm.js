import React from "react";
import Form from "react-bootstrap/Form";

const CustomInputForm = ({ label, ...rest }) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 gap-2" controlId="formGroupEmail">
          <Form.Label>
            {/* {label === "First Name" && <i class="zmdi zmdi-account-box"></i>}
            {label === "Email" && <i class="zmdi zmdi-email"></i>}
            {label === "Password" && <i class="zmdi zmdi-lock"></i>}
            {label === "Confirm Password" && (
              <i class="zmdi zmdi-lock-open"></i>
            )} */}
            {label}
          </Form.Label>

          <Form.Control {...rest} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default CustomInputForm;
