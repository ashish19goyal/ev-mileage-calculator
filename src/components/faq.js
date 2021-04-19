import React from "react";
import PropTypes from "prop-types";

/*
 * This components creates a container for a question and answer
 */

const Faq = ({ serial, question, answer }) => {
  return (
    <div>
      <p>
        <b>
          {serial}. {question}
        </b>
      </p>
      <p>{answer}</p>
    </div>
  );
};

Faq.propTypes = {
  serial: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Faq;
