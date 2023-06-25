// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        apiSecret: "123",
        apiUrl: "",
        public: {
            apiBase: "/api",
        },
    },
    app: {
        head: {
            meta: [
                { name: "description", content: "any description" },
                { name: "keywords", content: "nuxt vue" },
            ],
            title: "Михаил Кисиев",
        },
    },
    // modules: ["nuxt-swiper", "nuxt-graphql-client", "nuxt-icons"],
    modules: ["nuxt-swiper", "nuxt-graphql-client", "nuxt-icons"],
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
            },
        },
    },
    // proxy: {
    //     options: {
    //         target: "http://127.0.0.1:8000",
    //         changeOrigin: true,
    //         pathFilter: ["/api"],
    //     },
    // },
});
