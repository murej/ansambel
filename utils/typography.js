import Typography from 'typography'

const options = {
  baseFontSize: '16px',
  baseLineHeight: '24px',
  headerFontFamily: [
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: ['georgia', 'serif'],
  bodyWeight: 300,
  headerWeight: 600,
  boldWeight: 600,
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
