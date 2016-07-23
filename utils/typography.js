import Typography from 'typography'

const options = {
  baseFontSize: '20px',
  baseLineHeight: '24px',
  headerFontFamily: [
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyWeight: 400,
  headerWeight: 600,
  boldWeight: 600,
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
