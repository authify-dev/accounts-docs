const { nextui } = require("@nextui-org/react");
import starlightPlugin from '@astrojs/starlight-tailwind';

module.exports = {
    content: [
        // ... otras rutas
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui(), 
        starlightPlugin(),
    ],
};
