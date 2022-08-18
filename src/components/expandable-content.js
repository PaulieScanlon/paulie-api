import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import EndpointMessage from './endpoint-message'

const ExpandableContent = ({ id, trigger, children }) => {
  const handleClick = () => {
    console.log('ExpandableContent | handleClick')
  }

  return (
    <div>
      {/* {state ? (
        <Fragment>
          <button onClick={handleClick}>
            <EndpointMessage
              type="POST"
              endpoint={`/api/${state[id].endpoint}`}
              icon="lock"
              isExpanded={state[id].isExpanded}
            />
          </button>
          {state[id].isExpanded ? <span>{children}</span> : null}
        </Fragment>
      ) : null} */}
    </div>
  )
}

ExpandableContent.propTypes = {
  /** The id used by context API to persist expanded state */
  id: PropTypes.string.isRequired,
}

export default ExpandableContent
