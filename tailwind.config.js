module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {

      container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

      fontFamily: {
        'popin': ['Poppins', 'sans-serif;']
      },
       colors: {
        'primary': '#FF7D1B'
      }


      
    },

  },
  plugins: [
    
      require('flowbite/plugin')
    
  ],
}
