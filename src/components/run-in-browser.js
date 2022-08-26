import React from 'react';

const RequestInBrowser = ({ type, children }) => {
  return (
    <details className="flex my-4 text-sm text-center text-primary font-bold bg-primary/5 rounded border-2 border-primary/40 transition-all duration-300 hover:border-primary/70">
      <summary className="capitlize p-2 pl-3">Run in browser</summary>
      <div className="text-left mb-4">{children}</div>
    </details>
  );
};

export default RequestInBrowser;
