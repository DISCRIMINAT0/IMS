// next.config.js
module.exports = {
    images: {
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
        domains: ["images.unsplash.com", "cdn.example.com"], // add your remote domains
    },
};
