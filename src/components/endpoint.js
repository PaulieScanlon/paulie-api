import React from 'react';
import PropTypes from 'prop-types';

const Endpoint = ({ type, endpoint, children }) => {
  return (
    <div className="rounded border-[1px] bg-surface border-outline my-8">
      <div className="grid grid-cols-auto-1fr items-center gap-4 px-2 py-4">
        <code>{type}</code>
        <span className="font-bold">{endpoint}</span>
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
