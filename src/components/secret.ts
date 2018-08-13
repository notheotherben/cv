import Vue from "vue"
import Component from "vue-class-component";

@Component({
    template: `<div class="secret"><slot v-if="triggered"></slot></div>`
})
export default class Secret extends Vue {
    triggered: boolean = false

    private cursor: number = 0
    private sequence: string[] = [
        "ArrowUp","ArrowUp",
        "ArrowDown","ArrowDown",
        "ArrowLeft","ArrowRight",
        "ArrowLeft","ArrowRight",
        "b","a"
    ]

    private handler: (e: KeyboardEvent) => void = null;

    mounted() {
        this.handler = (e) => {
            if (this.sequence[this.cursor++] !== e.key) {
                this.cursor = 0
                return
            }

            if (this.cursor === this.sequence.length) {
                this.cursor = 0
                this.triggered = true
            }
        }
        
        window.addEventListener("keyup", this.handler)
    }

    destroyed() {
        window.removeEventListener("keyup", this.handler)
    }
}

Vue.component("secret", Secret)