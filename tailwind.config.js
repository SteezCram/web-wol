module.exports =
{
    // purge: [
    //     './pages/**/*.vue',
    //     './components/**/*.vue',
    // ],
    purge: {
        enabled: false,
        content: ['./pages/**/*.vue', './components/**/*.vue'],
        safelist: [/^text/, /^bg/],
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['checked', 'active'],
            borderColor: ['checked'],
            opacity: ['disabled'],
            pointerEvents: ['disabled'],
            textColor: ['active'],
        }
    },
    plugins: [],
}
