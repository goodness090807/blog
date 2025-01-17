/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "blog.tccstu.com",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
            },
        ],
    },
};

export default nextConfig;
