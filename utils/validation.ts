type ValidateResponse = [boolean, { [key: string]: string } | null]

export const validate = (
    formData: { [key: string]: any },
    validation: { [key: string]: any[] | undefined }
): ValidateResponse => {
    const result: { [key: string]: string } = {};

    Object.keys(formData).forEach((key) => {
        const validators = validation[key];
        const value = formData[key];

        validators?.forEach((cb) => {
            const callbackResult = cb(value);

            if (typeof callbackResult === 'string' && !result[key]) {
                // присваивается текстовое сообщение
                result[key] = callbackResult;
            }
        });
    });

    if (!Object.keys(result).length) {
        return [true, null];
    }

    return [false, result];
};

export const required = (message = "Обязательное поле") => {
    return (value: any) => !!value || message;
};

export const minLength = (count = 3, message = "Обязательное поле") => {
    return (value: string | any[]) => value.length > count || message
}