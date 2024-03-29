/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                black: "#000",
                white: "#FFF",
                blabla: "#FFF",
                transparent: "transparent",
                current: "currentColor",
                brand: {
                    dark: {
                        DEFAULT: '#080B10',
                        50: '#B0BFD7',
                        100: '#A2B4D1',
                        200: '#879DC3',
                        300: '#6C87B5',
                        400: '#5372A6',
                        500: '#455F8A',
                        600: '#384C6F',
                        700: '#2A3A54',
                        800: '#1C2739',
                        900: '#0F141E',
                        950: '#080B10'
                    },
                    'blue': {
                        DEFAULT: '#1860FF',
                        50: '#D0DEFF',
                        100: '#BBD0FF',
                        200: '#92B4FF',
                        300: '#6A98FF',
                        400: '#417CFF',
                        500: '#1860FF',
                        600: '#0045DF',
                        700: '#0034A7',
                        800: '#00236F',
                        900: '#001137',
                        950: '#00081B'
                    },
                    'gray': {
                        DEFAULT: '#F4F4F6',
                        50: '#FFFFFF',
                        100: '#F4F4F6',
                        200: '#D5D5DD',
                        300: '#B6B6C4',
                        400: '#9797AA',
                        500: '#797991',
                        600: '#5E5E73',
                        700: '#454554',
                        800: '#2C2C36',
                        900: '#131317',
                        950: '#060607'
                    },
                    'text': {
                        DEFAULT: '#646C7C',
                        50: '#DDDFE4',
                        100: '#D2D5DA',
                        200: '#BBBFC8',
                        300: '#A4AAB6',
                        400: '#8E95A4',
                        500: '#778092',
                        600: '#646C7C',
                        700: '#4B515D',
                        800: '#32363E',
                        900: '#191B1F',
                        950: '#0C0D0F'
                    },
                }
            },
            fontFamily: {
                sans: ['Readex Pro', 'sans-serif']
            }
        },
        borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            'md': '0.375rem',
            'lg': '0.5rem',
            'full': '9999px',
            'large': '12px',
            'app': '1.875rem',
            'app-section': '4rem',
            'app-sm': '1rem'
        },
        container: {
            center: true,
        },
    },
    plugins: [],
}
