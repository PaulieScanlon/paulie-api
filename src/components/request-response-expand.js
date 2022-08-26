import React from 'react';

const RequestResponseExpand = ({ type, children }) => {
  return (
    <details className="flex my-4 text-sm text-text font-bold bg-surface rounded border border-outline transition-all duration-300 hover:text-highlight">
      <summary className="request-response capitlize p-2 pl-3">{`Example ${type}`}</summary>
      <div className="text-left">{children}</div>
    </details>
  );
};

export default RequestResponseExpand;
