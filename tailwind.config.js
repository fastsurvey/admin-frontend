// prettier-ignore

const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
    theme: {
        extend: {
            colors: {
                // Primary
                "blue-050": "#DCEEFB",
                "blue-100": "#B6E0FE",
                "blue-200": "#84C5F4",
                "blue-300": "#62B0E8",
                "blue-400": "#4098D7",
                "blue-500": "#2680C2",
                "blue-600": "#186FAF",
                "blue-700": "#0F609B",
                "blue-800": "#0A558C",
                "blue-900": "#003E6B",  
              
                // Neutrals
                gray: colors.blueGray,
                /*"grey-050": "#F0F4F8",
                "grey-100": "#D9E2EC",
                "grey-200": "#BCCCDC",
                "grey-300": "#9FB3C8",
                "grey-400": "#829AB1",
                "grey-500": "#627D98",
                "grey-600": "#486581",
                "grey-700": "#334E68",
                "grey-800": "#243B53",
                "grey-900": "#102A43",*/
              
                // Supporting
                "green-050": "#F0FCF9",
                "green-100": "#C6F7E9",
                "green-200": "#8EEDD1",
                "green-300": "#5FE3C0",
                "green-400": "#2DCCA7",
                "green-500": "#17B897",
                "green-600": "#079A82",
                "green-700": "#048271",
                "green-800": "#016457",
                "green-900": "#004440",  
              
                "red-050": "#FFEEEE",
                "red-100": "#FACDCD",
                "red-200": "#F29B9B",
                "red-300": "#E66A6A",
                "red-400": "#D64545",
                "red-500": "#BA2525",
                "red-600": "#A61B1B",
                "red-700": "#911111",
                "red-800": "#780A0A",
                "red-900": "#610404",  
              
                "yellow-050": "#FFFAEB",
                "yellow-100": "#FCEFC7",
                "yellow-200": "#F8E3A3",
                "yellow-300": "#F9DA8B",
                "yellow-400": "#F7D070",
                "yellow-500": "#E9B949",
                "yellow-600": "#C99A2E",
                "yellow-700": "#A27C1A",
                "yellow-800": "#7C5E10",
                "yellow-900": "#513C06",  

                orange: colors.orange,
                teal: colors.teal,
                rose: colors.rose
            },
            opacity: {
                '60': '.6',
                '70': '.7',
                '80': '.8',
                '90': '.9',
            },
            boxShadow: {
                'control-strip': '0 10px 10px 0 rgb(241, 245, 249)'
            },
            lineHeight: {
                '12': '3rem'
            },
            transitionProperty: {
                'height': 'height',
                'width': 'width',
                'size': 'margin, padding, width, height, max-height, line-height',
                'size-colors': 'margin, padding, width, height, text-color, background-color, box-shadow',
            },
            transitionDuration: {
                '50': '50ms'
            },
            transitionDelay: {
                 '0': '0ms',
                '50': '50ms'
            },
            spacing: {
                '5vh': '5vh',
                '10vh': '10vh',
                '15vh': '15vh',
                '20vh': '20vh',
                '25vh': '25vh',
                '30vh': '30vh',
                '35vh': '35vh',
                '40vh': '40vh',
                '45vh': '45vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '70vh': '70vh',
                '80vh': '80vh',
                '90vh': '90vh',
                '100vh': '100vh',
                '5vw': '5vw',
                '10vw': '10vw',
                '15vw': '15vw',
                '20vw': '20vw',
                '25vw': '25vw',
                '30vw': '30vw',
                '35vw': '35vw',
                '40vw': '40vw',
                '45vw': '45vw',
                '50vw': '50vw',
                '60vw': '60vw',
                '70vw': '70vw',
                '80vw': '80vw',
                '90vw': '90vw',
                '100vw': '100vw',

                '1.5': '0.375rem',
                '4': '1rem',
                '4.5': '1.125rem',
                '5': '1.25rem',
                '11': '2.75rem',
                '12': '3.00rem',
                '13': '3.25rem',
                '14': '3.50rem',
                '15': '3.75rem',
                '16': '4.00rem',
                '17': '4.25rem',
                '18': '4.50rem',
                '19': '4.75rem',
                '20': '5.0rem',
                '22': '5.5rem',
                '24': '6.0rem',
                '26': '6.5rem',
                '28': '7.0rem',
                '30': '7.5rem',
                '32': '8.0rem',
                '33': '8.25rem',
                '34': '8.5rem',
                '35': '8.75rem',
                '36': '9.0rem',
                '38': '9.5rem',
                '40': '10.0rem',
                '42': '10.5rem',
                '44': '11.0rem',
                '46': '11.5rem',
                '48': '12.0rem',
                '50': '12.5rem',
                '52': '13.0rem',
                '54': '13.5rem',
                '56': '14.0rem',
                '58': '14.5rem',
                '60': '15.0rem',
                '62': '15.5rem',
                '64': '16.0rem',
                '66': '16.5rem',
                '68': '17.0rem',
                '70': '17.5rem',
                '72': '18.0rem',
                '80': '20.0rem',
                '90': '22.5rem',
                '100': '25.0rem',
                '104': '26.0rem',
                '110': '27.5rem',
                '120': '30.0rem',

                '124': '31.0rem',
                '126': '31.5rem',
                '128': '32.0rem',
                '130': '32.5rem',
                '132': '33.0rem',
                '144': '36.0rem',

                '10%': '10%',
                '15%': '15%',
                '20%': '20%',
                '25%': '25%',
                '30%': '30%',
                '35%': '35%',
                '40%': '40%',
                '45%': '45%',
                '50%': '50%',
                '55%': '55%',
                '60%': '60%',
                '65%': '65%',
                '70%': '70%',
                '75%': '75%',
                '80%': '80%',
                '85%': '85%',
                '90%': '90%',
            },
            inset: {
                '1/2': '50%',
            },
            maxHeight: {
                '0':  '0',
                '64':  '16.0rem',
                '128':  '32.0rem'
            },
            minHeight: {
                '12':  '3.0rem',
            },
        },
    },
};
