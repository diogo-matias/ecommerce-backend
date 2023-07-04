export class ApiResponseModel {
    message: string;
    data: any;
    hasError: boolean;
    error?: Error;

    constructor(payload: Readonly<ApiResponseModel>) {
        const { message, data, hasError, error } = payload;

        this.message = message;
        this.data = data;
        this.hasError = hasError;
        this.error = error;
    }
}
