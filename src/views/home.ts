import Vue from "vue"
import Component from "vue-class-component"
import {RawLocation} from "vue-router"
import {router} from "../router"
import Job from "../components/job"

import * as template from "text!./home.html"
@Component({
    template,
    components: {
        job: Job
    }
})
export default class HomeView extends Vue {
    navigate(name: string, opts?: RawLocation) {
        if (~name.indexOf("://")) return window.open(name, "_blank")
        router.push(Object.assign({
            name
        }, opts))
    }
}