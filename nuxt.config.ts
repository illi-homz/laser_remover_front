// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        apiSecret: "123",
        apiUrl: "",
        public: {
            // GQL_HOST: 'http://localhost:8000/api/graphql',
            apiBase: "/api",
        },
    },
    app: {
        head: {
            meta: [
                { name: "description", content: "any description" },
                { name: "keywords", content: "nuxt vue" },
            ],
            title: "Hello new project",
        },
    },
    modules: ["nuxt-swiper", "nuxt-graphql-client", "nuxt-icons"],
    swiper: {},
    imports: {
        dirs: [],
    },
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
});
