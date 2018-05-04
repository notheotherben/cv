import Vue from "vue"
import Component from "vue-class-component"

@Component({
    template: `
    <div :class="'adjectives adjectives__' + current">
        <span class="adjectives-entry adjectives-a">{{a}}</span>
        <span class="adjectives-entry adjectives-b">{{b}}</span>
    </div>`,
    props: {
        list: {
            type: Array,
            required: true
        }
    }
})
export default class Adjectives extends Vue {
    list!: string[];
    a: string = "";
    b: string = "";

    current: "a"|"b" = "a";
    get next() {
        if (this.current === "a") return "b"
        return "a"
    }

    private handle: number = null;

    mounted() {
        this.handle = setInterval(() => this.updateCurrent(), 5000)
        return this.updateCurrent()
    }

    destroyed() {
        if(this.handle) {
            clearInterval(this.handle)
            this.handle = null
        }
    }

    updateCurrent() {
        this[this.next] = this.getRandom(this[this.current])
        this.current = this.next
    }

    private getRandom(current: string = null) {
        const differentOptions = this.list.filter(x => x !== current)
        return differentOptions[Math.floor(Math.random() * differentOptions.length)]
    }
}

Vue.component("adjectives", Adjectives)