// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({

    integrations: [starlight({
        title: 'Accounts',
        social: {
            github: 'https://github.com/reitmas32/accounts',
        },
        defaultLocale: "en",
        locales: {
            en: {
                label: 'English',
            },
            es: {
                label: 'Español',
            },


        },

        components: {
            Header: "./src/components/CustomHeader.astro",
        },
        sidebar: [
            {
                label: 'Get Started',
                autogenerate: { directory: 'get_started' },
            },
            {
                label: 'Make requets',
                items: [
                    {
                        label: "Health",
                        slug: "make_requests/health"
                    },
                    {
                        label: "Codes",
                        link: "make_requests/codes"
                    },
                    {
                        label: "Requets",
                        slug: "make_requests/request"
                    },
                    {
                        label: "Response",
                        slug: "make_requests/response"
                    }
                ]
            },
            {
                label: 'API Reference',
                items: [
                    // Each item here is one entry in the navigation menu.
                    {
                        label: 'Emails',
                        items: [
                            {
                                label: "SignUp",
                                slug: 'api_reference/emails/signup',
                            },
                            {
                                label: "Activate",
                                slug: 'api_reference/emails/activate',
                            },
                            {
                                label: "SignIn",
                                slug: 'api_reference/emails/signin',
                            },
                            {
                                label: "Resend Code",
                                slug: 'api_reference/emails/resend-code',
                            },
                            {
                                label: "Reset Password",
                                slug: 'api_reference/emails/reset-password',
                            }
                        ]
                    },
                    { label: 'Platforms', autogenerate: { directory: 'api_reference/platforms' } },
                    { label: 'JWT', autogenerate: { directory: 'api_reference/jwt' } },
                ],

            },
            { label: 'Security', autogenerate: { directory: 'security' } },
            { label: 'Extra', autogenerate: { directory: 'extra' } },

        ],

    }), react(), tailwind()],
});