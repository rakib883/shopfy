/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"www.shofyapp.shop"
            },
            {
                protocol:"https",
                hostname:"cdn.dummyjson.com"
            },
            {
                protocol:"https",
                hostname:"i.ibb.co"
            }
        ]
    }
};

export default nextConfig;
