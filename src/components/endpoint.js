import React from 'react';
import PropTypes from 'prop-types';

const Endpoint = ({ type, endpoint, children }) => {
  return (
    <div className="endpoint rounded border-[1px] bg-surface border-outline my-8">
      <div className="grid sm:grid-cols-2 items-center sm:gap-4 px-2 py-2 sm:py-4">
        <div className="grid grid-cols-auto-1fr items-center gap-4">
          <code className="text-xs sm:text-base">{type}</code>
          <span className="text-xs sm:text-base font-bold">{endpoint}</span>
        </div>
        <code className="text-xs justify-self-end text-highlight">JSON</code>
      </div>
      {children}
    </div>
  );
};

Endpoint.propTypes = {
  /** The type of http request */
  type: PropTypes.string.isRequired,
  /** the url of the endpoint */
  endpoint: PropTypes.string.isRequired
};

export default Endpoint;
