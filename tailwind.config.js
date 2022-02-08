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
        50: 'rgb(0, 204, 102)',
        100: 'rgb(0, 153, 76)',
        200: 'rgb(0, 102, 51)'
      },
      schedule: {
        50: 'rgb(255, 153, 51)',
        100: 'rgb(255, 128, 155)',
        200: 'rgb(204, 102, 0)'
      },
      alert: {
        50: 'rgb(255, 0, 0)'
      }
    },
    extend: {}
  },
  plugins: []
}
