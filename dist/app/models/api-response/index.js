"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseModel = void 0;
class ApiResponseModel {
    constructor(payload) {
        const { message, data, hasError, error } = payload;
        this.message = message;
        this.data = data;
        this.hasError = hasError;
        this.error = error;
    }
}
exports.ApiResponseModel = ApiResponseModel;
