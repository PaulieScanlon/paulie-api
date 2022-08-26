import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from './prism-theme';

const PrismSyntaxHighlight = ({ children, className }) => {
  const language = className.replace(/language-/gm, '');

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default PrismSyntaxHighlight;
