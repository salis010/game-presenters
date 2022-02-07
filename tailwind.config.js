module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,tsx}'
  ],
  content: [],
  theme: {
    colors: {
      secondary: {
        50: 'rgb(255, 255, 255)',
        100: 'rgb(200, 200, 200)',
        200: 'rgb(75, 75, 75)'
      },
      presenter: {
        50: 'rgb(178, 102, 255)',
        100: 'rgb(153, 51, 255)',
        200: 'rgb(76, 0, 153)'
      },
      table: {
        100: 'rgb(150, 100, 100)'
      },
      schedule: {
        100: 'rgb(41, 21, 155)',
        200: 'rgb(18, 21, 153)'
      },
      alert: {
        50: 'rgb(255, 0, 0)'
      }
    },
    extend: {}
  },
  plugins: []
}
