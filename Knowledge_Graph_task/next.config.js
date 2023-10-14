/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXT_PUBLIC_GOOGLE_GENERATIVE_API_URL: process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_API_URL,
    }
}

module.exports = nextConfig
