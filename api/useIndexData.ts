import { indexQuery } from "./indexGql";

export const useIndexData = () => {
    const runtimeConfig = useRuntimeConfig();
    const HOST_URL = runtimeConfig.public.apiHost || "";

    return useFetch(HOST_URL + "/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: indexQuery }),
        async onResponse({ request, response, options }) {
            const json = response._data;
            return json.data;
        },
    });
};
