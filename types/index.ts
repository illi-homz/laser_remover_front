export type FilterBtnsItemType = {
    id: number | string;
    title: string;
    value: string;
}

export type QuestionType = {
    id: number | string;
    question: string;
    answer: string;
}

export type ServiceType = {
    id: number | string;
    title: string;
}

export type IllustrationType = {
    id: string;
    title: string;
    count: number;
    img: string;
    type: string;
}
export type IllustrationTypeType = {
    id: number | string;
    name: string;
    value: string;
}

export type AllFeedbacksTextType = {
    id: number | string;
    content: string;
    link: string;
    username: string;
    date: string;
}

export type AllFeedbacksVideoType = {
    id: number | string;
    video: string;
}

export type ContactsFormDataType = {
    name: string,
    lastname: string,
    phone: string,
    service: string,
    messegers: string[],
}

export type LinkType = {
    id: number;
    title: string;
    url: string;
}