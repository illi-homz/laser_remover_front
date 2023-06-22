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
    modules: ["nuxt-swiper", "nuxt-graphql-client", "nuxt-icons", "nuxt-proxy"],
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
    },
    proxy: {
        options: {
            target: "http://127.0.0.1:8000",
            changeOrigin: true,
            pathFilter: ["/api", "/admin"],
        },
    },
});
