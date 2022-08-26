const theme = {
  plain: {
    color: '#FFFFFF',
    backgroundColor: '#282A36'
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: 'rgb(255, 20, 174)'
      }
    },
    {
      types: ['inserted'],
      style: {
        color: 'rgb(80, 250, 123)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 184, 108)'
      }
    },
    {
      types: ['string', 'char', 'tag', 'selector', 'operator'],
      style: {
        color: 'rgb(255,255,0)'
      }
    },
    {
      types: ['number', 'property'],
      style: {
        color: 'rgb(0,204,255)'
      }
    },
    {
      types: ['punctuation', 'symbol', 'literal-property'],
      style: {
        color: 'rgb(255, 255, 255)'
      }
    },
    {
      types: ['token', 'punctuation'],
      style: {
        color: 'rgb(170,170,170)'
      }
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: 'rgb(255, 20, 174)',
        fontStyle: 'italic'
      }
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(170,170,170)'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(241, 250, 140)'
      }
    }
  ]
};

export default theme;
