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
        linkColor: '#D92020'
      };
      const dark = {
        color: '#FFFFFF',
        backgroundColor: '#000000',
        headingColor: '#FFFFFF',
        linkColor: '#D92020'
      };
      return { default: light, light, dark };
    }
  }
};
