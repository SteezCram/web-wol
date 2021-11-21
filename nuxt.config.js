export default
{
    //////////// PUBLIC CONFIGURATION

    // Use server-side rendering
    ssr: false,
    // Prevent nuxt to ask for the telemetry permissions
    telemetry: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'WEB-WOL',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global server configuration
    server: {
        // Default port for the Nuxt server
        port: 3000,
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Used as fallback if no runtime config is provided
        baseURL: 'http://localhost:3000',
        // Use https or not
        https: false,
    },
    
    // Runtime configuration accessible both by the client and the server
    publicRuntimeConfig: {
        axios: {
            // Public URL to target the server API
            browserBaseURL: process.env.NODE_ENV === 'production' ? '<your-production-url>' : 'http://localhost:3000',
        }
    },

    // Runtime configuraton accessible by the server
    privateRuntimeConfig: {
        axios: {
            baseURL: 'http://localhost:3000',
        }
    },


    //////////// PRIVATE CONFIGURATION

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/icons.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://www.npmjs.com/package/cookie-universal-nuxt
        'cookie-universal-nuxt',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa'
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        optimizeCSS: true,
    },

    // Server middleware: https://go.nuxtjs.dev/server-middleware
    serverMiddleware: [
        '~/server-middleware/api/devices.js',
        '~/server-middleware/api/user.js',
    ],
}
