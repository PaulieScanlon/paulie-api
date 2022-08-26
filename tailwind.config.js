module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        text: '#c9c9c9',
        primary: '#33ff00',
        secondary: '#00ccff',
        tertiary: '#ff1493',
        highlight: '#ffff00',
        muted: '#ffceeb',
        background: '#000000',
        outline: '#202020',
        surface: '#111111'
      },
      fontFamily: {
        sans: ['Inconsolata', 'ui-sans-serif', 'system-ui'],
        mono: ['ui-monospace', 'monospace']
      },
      maxWidth: {
        '8xl': '90rem'
      },
      gridTemplateColumns: {
        ['auto-auto']: 'auto auto',
        ['auto-1fr']: 'auto 1fr',
        ['1fr-auto']: '1fr auto',
        ['1fr-1fr']: '1fr 1fr',
        ['1fr-auto-auto']: '1fr auto auto',
        ['1fr-1fr-auto']: '1fr 1fr auto'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            'h1, h2, h4, h5, h6': {
              color: theme('colors.text'),
              a: {
                color: theme('colors.text')
              }
            },
            h3: {
              color: theme('colors.tertiary'),
              a: {
                color: theme('colors.tertiary')
              }
            },
            a: {
              color: theme('colors.tertiary')
            },
            strong: {
              color: theme('colors.text')
            },
            code: {
              color: theme('colors.secondary'),
              '&::before': {
                content: '"" !important'
              },
              '&::after': {
                content: '"" !important'
              }
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
