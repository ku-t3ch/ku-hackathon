/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = {
    output: "standalone",
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3.tech.nisit.ku.ac.th",
            },
            {
                protocol: "https",
                hostname: "media.graphassets.com",
            },
        ],
    },
    env: {
        cdn: "https://s3.tech.nisit.ku.ac.th/assets/ku-hackathon",
    },

    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
