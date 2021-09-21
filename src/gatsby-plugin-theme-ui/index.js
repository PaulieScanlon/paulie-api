import codeTheme from '@theme-ui/prism/presets/prism-funky.json'

const theme = {
  colors: {
    text: '#FFFFFF',
    background: '#000000',
    primary: '#ff1493',
    secondary: '#33ff00',
    tertiary: '#00ccff',
    muted: '#666666',
    highlight: '#ffceeb',
    highlightHover: '#fdb9e1',
    gray: '#272727',
    accent: '#ffff00',
    lighten: '#cccccc',
    darken: '#161616',
    border: '#1e1e1e',
    table: '#2a2a2a',
    evenRow: '#181818',
    oddRow: '#121212',
  },

  fonts: {
    heading: 'system-ui',
    body: 'system-ui',
    monospace: 'monospace',
  },

  fontWeights: {
    heading: 700,
    body: 400,
  },

  lineHeights: {
    body: '1.5rem',
  },

  sizes: {
    container: 940,
    header: 48,
    full: '100%',
  },

  zIndices: {
    header: 999,
  },

  messages: {
    default: {
      color: 'darken',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    primary: {
      variant: 'messages.default',
    },
    secondary: {
      variant: 'messages.default',
      backgroundColor: 'secondary',
    },
    tertiary: {
      variant: 'messages.default',
      backgroundColor: 'tertiary',
    },
  },

  badges: {
    primary: {
      lineHeight: '1.3rem',
    },
    secondary: {
      variant: 'badges.primary',
      color: 'darken',
      backgroundColor: 'secondary',
    },
    tertiary: {
      variant: 'badges.primary',
      backgroundColor: 'tertiary',
    },
  },

  buttons: {
    default: {
      fontFamily: 'body',
      cursor: 'pointer',
      ':hover': {
        opacity: 0.9,
      },
      ':disabled': {
        cursor: 'not-allowed',
        backgroundColor: 'muted',
      },
    },
    primary: {
      variant: 'buttons.default',
    },
    secondary: {
      variant: 'buttons.default',
      color: 'darken',
      backgroundColor: 'secondary',
    },
    ghost: {
      p: 0,
      backgroundColor: 'transparent',
    },
    icon: {
      width: '24px',
      height: '24px',
      p: 1,
      variant: 'buttons.default',
    },
  },

  links: {
    nav: {
      fontWeight: 'bold',
      textDecoration: 'none',
      p: 2,
      backgroundColor: 'darken',
      borderRadius: 4,
      '&[aria-current="page"]': {
        color: 'muted',
      },
    },
  },

  layout: {
    container: {
      px: [3, 4],
    },
  },

  text: {
    mono: {
      fontWeight: 'bold',
      fontFamily: 'monospace',
    },
  },

  forms: {
    my: 4,
    alignItems: 'flex-end',
    input: {
      fontSize: [2, 1],
    },
    select: {
      fontSize: [2, 1],
    },
    label: {
      display: 'grid',
      gap: 2,
    },
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: '1',

      'input:-webkit-autofill:first-line': {
        color: (theme) => `${theme.colors.primary}!important`,
      },
      'input:-webkit-autofill': {
        borderColor: 'text',
      },
      '.gatsby-image-wrapper': {
        my: 4,
      },

      small: {
        color: 'muted',
      },

      a: {
        color: 'primary',
        ':hover': {
          opacity: 0.9,
        },
      },

      p: {
        mt: 3,
        mb: 2,
        lineHeight: 'body',
        code: {
          borderRadius: 4,
          fontSize: '15px',
          p: 1,
          color: 'tertiary',
          backgroundColor: 'darken',
        },
      },

      pre: {
        ...codeTheme,
        position: 'relative',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border',
        p: 3,
        borderRadius: 4,
        backgroundColor: 'darken',
        overflow: 'auto',
        mt: 3,
        mb: 4,
        ':after': {
          content: "''",
          borderBottomLeftRadius: 4,
          fontFamily: 'body',
          fontSize: 'smaller',
          color: 'lighten',
          position: 'absolute',
          top: 0,
          right: 0,
          p: 2,
          backgroundColor: 'table',
        },
      },
      'pre.language-javascript': {
        ':after': {
          content: "'JavaScript'",
        },
      },
      'pre.language-json': {
        ':after': {
          content: "'JSON'",
        },
      },

      code: {
        wordBreak: 'break-word',
      },

      table: {
        backgroundColor: 'table',
        borderCollapse: 'collapse',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border',
        borderRadius: 4,
        overflow: 'hidden',
        mt: 3,
        mb: 4,
        width: 'full',
        a: {
          color: 'secondary',
        },
        thead: {
          tr: {
            th: {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'border',
              p: 2,
              textAlign: 'left',
            },
          },
        },
        tbody: {
          tr: {
            td: {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'border',
              p: 2,
              verticalAlign: 'top',
              whiteSpace: 'pre',
            },
          },
          'tr:nth-of-type(odd)': {
            backgroundColor: 'oddRow',
          },
          'tr:nth-of-type(even)': {
            backgroundColor: 'evenRow',
          },
        },
      },
    },

    tableWrapper: {
      overflow: 'auto',
    },

    h3: {
      color: 'accent',
    },

    li: {
      lineHeight: 'body',
      color: 'lighten',
    },

    hr: {
      mt: 4,
      mb: 4,
    },

    main: {
      paddingTop: (theme) => theme.sizes.header,
    },

    header: {
      position: 'fixed',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'border',
      width: 'full',
      alignItems: 'center',
      height: 'header',
      backgroundColor: 'background',
      zIndex: 'header',
    },

    nav: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
}

export default theme
