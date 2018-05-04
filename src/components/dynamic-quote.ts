import Vue from "vue"
import Component from "vue-class-component"
import {getQuote, Quote} from "../api"
import { store, MUT_REQUEST_ERROR } from "../store";

@Component({
    template: `
    <figure class="dynamic-quote">
        <blockquote>{{current.quote}}</blockquote>
        <figcaption>{{current.who}}</figcaption>
    </figure>`,
    props: {
        by: {
            type: String,
            required: false,
            default: null
        }
    }
})
export default class DynamicQuote extends Vue {
    by!: string;
    current: Quote = {
        quote: "",
        who: ""
    };

    mounted() {
        return this.updateQuote()
    }

    updateQuote() {
        return getQuote(this.by)
            .then(quote => this.current = quote)
            .catch(err => store.commit(MUT_REQUEST_ERROR, err))
    }
}

Vue.component("dynamic-quote", DynamicQuote)