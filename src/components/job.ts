import Vue from "vue"
import Component from "vue-class-component"
import * as template from "text!./job.html"

@Component({
    template,
    props: {
        organization: String,
        role: String,
        timeRange: String,
        location: String
    }
})
export default class Job extends Vue {
    organization!: string
    role!: string
    location!: string
    timeRange!: string
}