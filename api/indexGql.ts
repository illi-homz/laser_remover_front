import { NuxtApp } from "nuxt/app";
import { IndexPageDataType } from "~/types";

export const getMainData = (ctx: NuxtApp | undefined): Promise<IndexPageDataType> | false => {
    const isHydrating = ctx?.isHydrating
    const gqlUrl = ctx?.$config.public.gqlUrl
    const url = isHydrating ? gqlUrl : 'http://localhost:8000' + gqlUrl;

    return (
        !!url &&
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: indexQuery }),
        })
            .then((response) => response?.json())
            .then((json) => {
                console.log("getMainData ok");
                return json.data;
            })
            .catch((e) => console.log("getMainData exeption:", e))
    );
};

export const indexQuery = `
query initData {
    allServices {
        id
        title
    }
    allIllustrations {
        items {
            id
            title
            count
            img
            type
        }
        types {
            id
            name
            value
        }
    }
    allFeedbacksText {
        id
        content
        link
        username
        date
    }
    allFeedbacksVideo {
        id
        video
    }
    allQuestions {
        id
        question
        answer
    }
}
`;
