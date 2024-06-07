/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "beatnik-5.myshopify.com"
            }
        ]
    }
};

export default nextConfig;
