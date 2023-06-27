import type { RouterConfig } from "@nuxt/schema";

export default {
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;

        if (to.hash && to.path == from.path) {
            const navBar = document.querySelector("#navbar") as HTMLElement;
            const navbarOffsetHeight = navBar?.offsetHeight || 0

            const el = document.querySelector(to.hash);
            return { top: el.offsetTop - navbarOffsetHeight, left: 0, behavior: "smooth" };
        }

        return {
            top: 0,
            left: 0,
        };
    },
};
