import {store} from "../store";
import * as helpers from "./helpers";

export interface Quote {
    quote: string;
    who: string;
}

/**
 * Queries the Bender API for a random quote, optionally from a specific
 * author.
 */
export function getQuote(by: string = null) {
    return fetch(helpers.buildUrl(store.state.benderAPI, "/api/v1/quote", by))
        .then(res => helpers.apiHandleResponse<Quote>(res, true))
}