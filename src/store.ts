import Vue from "vue";
import * as Vuex from "vuex";

Vue.use(Vuex);

export const MUT_CONNECTED = "connected"
export const MUT_DISCONNECTED = "disconnected"
export const MUT_SET_BENDER_API = "set-bender-api"
export const MUT_REQUEST_ERROR = "set-request-error"
export const MUT_LOADING = "set-loading"

export const ACT_CONNECT = "connect"
export const ACT_DISCONNECT = "disconnect"
export const ACT_REFRESH = "refresh"

interface StoreData {
    benderAPI: string;

    connected: boolean;
    loading: boolean;
    requestError: Error;
}

export const store = new Vuex.Store<StoreData>({
    state: {
        benderAPI: localStorage.getItem("bender:url") || "https://bender.sierrasoftworks.com",
        connected: false,
        requestError: null,
        loading: false
    },
    mutations: {
        [MUT_SET_BENDER_API] (state, url: string) {
            state.benderAPI = url
            localStorage.setItem("bender:url", url)
        },
        [MUT_REQUEST_ERROR] (state, error: Error) {
            state.requestError = error
        },
        [MUT_LOADING] (state, loading: boolean) {
            state.loading = loading
        }
    },
    actions: {
        
    },
    getters: {
        
    }
})