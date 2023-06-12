import { ContactsFormDataType } from "~/types";

const getCookie = (name: string) => {
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(name + '='))
        ?.split("=")[1] || '';
}

export const sendFormToTelegram = (formData: ContactsFormDataType) => {
    const csrftoken = getCookie('csrftoken')

    return fetch('/api/sendFormToTelegram', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(formData)
    })
}