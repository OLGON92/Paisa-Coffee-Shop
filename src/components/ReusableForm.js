import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder="Coffee Name" />
        <input
          type='text'
          name='origin'
          placeholder="Coffee Origin" />
        <input
          type='text'
          name='roast'
          placeholder="Coffee Roast e.g.light" />
        <input
          type='number'
          name='price'
          placeholder="Coffee Price in USD" />
        <input
          type='number'
          name='beansLeft'
          placeholder="Total amount of beans in pounds" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;