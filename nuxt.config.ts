// https://nuxt.com/docs/api/configuration/nuxt-config
import { ymScript } from "./utils/yaMetrica";

export default defineNuxtConfig({
    runtimeConfig: {
        apiSecret: "123",
        apiUrl: "",
        public: {
            apiBase: "/api",
            gqlUrl: "/graphql",
            apiHost: "http://127.0.0.1:8000",
        },
    },
    app: {
        head: {
            script: [
                {
                    children: ymScript,
                    tagPosition: "head",
                    tagPriority: "critical",
                    type: "text/javascript",
                },
            ],
            meta: [
                { name: "description", content: "any description" },
                { name: "keywords", content: "удаление тату татуировки татуаж татуажа лазер лазерное владикавказ" },
                { name: "msapplication-TileColor", content: "#ffffff" },
                { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
                { name: "theme-color", content: "#ffffff" },
            ],
            link: [
                { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
                { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
                { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
                { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
                { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
                { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
                { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
                { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
                { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
                { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
                { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
                { rel: "manifest", href: "/manifest.json" },
            ],
            title: "Михаил Кисиев",
        },
    },
    components: true,
    modules: ["nuxt-swiper", "nuxt-icons"],
    colorMode: {
        classSuffix: "",
        preference: "light",
        fallback: "light",
        dataValue: "light",
    },
    swiper: {},
    imports: {
        dirs: [],
    },
    ssr: true,
    typescript: {
        strict: true,
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles.scss" as *;',
                },
            },
        },
        server: {
            proxy: {
                "/api": "http://127.0.0.1:8000",
                "/admin": "http://127.0.0.1:8000",
                "/staticfiles": "http://127.0.0.1:8000",
                "/mediafiles": "http://127.0.0.1:8000",
                "/graphql": "http://127.0.0.1:8000",
            },
        },
    },
});
