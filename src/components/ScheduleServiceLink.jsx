// ScheduleServiceLink.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ScheduleServiceLink = ({ className, modalTarget, children }) => {
  return (
    <Link
      to="#"
      className={`btn-get-started ${className}`}
      data-bs-toggle="modal"
      data-bs-target={modalTarget}
    >
      {children} <i className="bi bi-arrow-right"></i>
    </Link>
  );
};

ScheduleServiceLink.propTypes = {
  className: PropTypes.string,
  modalTarget: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScheduleServiceLink; // Ensure the component is exported as default
