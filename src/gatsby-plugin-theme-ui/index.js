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

  sizes: {
    container: 840,
    header: 48,
    full: '100%',
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
    secondary: {
      color: 'darken',
      backgroundColor: 'secondary',
    },
    tertiary: {
      backgroundColor: 'tertiary',
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

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: '1',

      small: {
        color: 'muted',
      },

      a: {
        color: 'primary',
      },

      p: {
        mt: 3,
        mb: 4,
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

    hr: {
      mt: 4,
      mb: 4,
    },

    header: {
      alignItems: 'center',
      height: 'header',
    },
  },
}

export default theme