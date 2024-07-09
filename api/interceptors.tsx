import axios, { AxiosRequestHeaders } from "axios";
import * as SecureStore from "expo-secure-store";
import api from "./api";

function interceptor() {
    api.interceptors.request.use(function (config) {
        const session = SecureStore.getItem("session");
        if (session) {
            config.headers = { Authorization: session } as AxiosRequestHeaders;
        }
        return config;
      }, function (error) {
        return Promise.reject(error);
    });
}

export default interceptor;