/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'black': '#231F20',
            'white': '#f3f3f3'
        },
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif']
            }
        },
    },
    plugins: [],
}
