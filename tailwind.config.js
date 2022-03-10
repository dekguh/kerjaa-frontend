module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-navy': '#171E2B',
        'black-doff': '#313640',
        'white-cream': '#D5DBE2',
        'violet-bold': '#997FE1',
        'violet-light': '#E4DBFF',
        'blue-light': '#F7FBFF',
        'black-body': '#777777',
        'green-bold': '#19AD80',
        'green-light': '#AEFFE6',
      },
      padding: {
        '9px': '9px'
      },
      fontSize: {
        'h1': '59px',
        'h2': '45px',
        'h3': '35px',
        'h4': '27px',
        'h5': '21px',
        'h6': '16px'
      },
      maxWidth: {
        '1180px': '1180px',
        '815px': '815px',
        '485px': '485px',
        '150px': '150px'
      },
      minWidth: {
        '150px': '150px'
      },
      width: {
        '121px': '121px',
        '66px': '66px'
      },
      boxShadow: {
        'light': '0 0 12px rgb(0 0 0 / 5%)'
      }
    },
  },
  plugins: [],
}
