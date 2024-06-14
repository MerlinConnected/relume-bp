/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        websiteURL: process.env.WEBSITE_URL,
    },
    sassOptions: {
        additionalData: `
            @import "./styles/variables.scss";\n
            @import "./styles/functions.scss";\n
            @import "./styles/mixins.scss";\n
        `,
    },
}

export default nextConfig
