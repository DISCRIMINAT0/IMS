// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public', // output service worker in /public
    register: true, // auto-register service worker
    skipWaiting: true, // update SW immediately on deploy
    disable: process.env.NODE_ENV === 'development', // disable PWA in dev mode
})

module.exports = withPWA({
    reactStrictMode: true,

    images: {
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache for images
        domains: ["images.unsplash.com", "cdn.example.com"], // add your remote domains
    },

    experimental: {
        appDir: true, // enable if using Next.js App Router
    },
})
