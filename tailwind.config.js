module.exports = {
  theme: {
    asset: theme => ({
      font: {
        display: ['Helvetica', 'Arial', 'test3'],
        body: ['Helvetica', 'Arial', 'sans-serif']
      }
    }),
    fontStyle: theme => ({
      heading: {
        fontFamily: theme('asset.font.display'),
        lineHeight: '1.4',
        letterSpacing: '-0.3em',
        fontWeight: '500'
      },
      link: {
        fontFamily: theme('asset.font.body'),
        lineHeight: '1.4',
        letterSpacing: '-0.3em'
      },
      legal: {
        fontFamily: theme('asset.font.body'),
        lineHeight: '1.4',
        letterSpacing: '-0.3em',
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
      }
    }),
    colorTheme: theme => {
      const light = {
        color: theme('colors.gray.700'),
        backgroundColor: '#FFFFFF',
        headingColor: 'red',
        linkColor: 'pink'
      };
      return { default: light, light };
    }
  }
};
