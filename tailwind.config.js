module.exports = {
  theme: {
    asset: theme => ({
      font: {
        display: ['Arial'],
        body: ['Arial']
      }
    }),
    fontStyle: theme => ({
      heading: {
        fontFamily: theme('asset.font.display'),
        lineHeight: '1.4',
        fontWeight: '500'
      },
      link: {
        fontFamily: theme('asset.font.body'),
        lineHeight: '1.4'
      },
      legal: {
        fontFamily: theme('asset.font.body'),
        lineHeight: '1.4',
        fontSize: '12px'
      },
      quote: {
        fontFamily: theme('asset.font.body'),
        lineHeight: '1.4'
      },
      caps: {
        fontFamily: theme('asset.font.body'),
        lineHeight: '1.4',
        letterSpacing: '0.23em',
        textTransform: 'Uppercase',
        fontWeight: '600'
      },
      code: {
        lineHeight: '1.4',
        fontSize: '0.9em'
      }
    }),
    colorTheme: theme => {
      const light = {
        color: '#000000',
        backgroundColor: '#FFFFFF',
        headingColor: '#000000',
        linkColor: '#D92020',
        codeColor: 'pink',
        borderColor: '#F0F0F0'
      };
      const contrast = {
        color: '#000000',
        backgroundColor: '#F0F0F0',
        headingColor: '#000000',
        linkColor: '#D92020',
        codeColor: '#4F148F',
        borderColor: '#F0F0F0'
      };
      const dark = {
        color: '#F0F0F0',
        backgroundColor: '#000000',
        headingColor: '#FFFFFF',
        linkColor: '#D92020',
        codeColor: 'pink',
        borderColor: '#F0F0F0'
      };
      return { default: light, light, contrast, dark };
    },
    fontSize: {
      '1': '0.75rem',
      '2': '0.875rem',
      '3': '1rem',
      '4': '1.125rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.875rem',
      '8': '2.25rem',
      '9': '3rem',
      '10': '4rem',
    },
  }
};
