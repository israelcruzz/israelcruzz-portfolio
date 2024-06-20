/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { remotePatterns: [{ hostname: "github.com" }, { hostname: "raw.githubusercontent.com" }] }
};

export default nextConfig;
