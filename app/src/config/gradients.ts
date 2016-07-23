export class GradientTransitionConfig {
    public transitionTime = 2000;
    public transitionPause = 2000;
}

export class GradientProvider {
    private gradients: Gradient[] = [
        new Gradient('#4b6cb7', '#182848'),
        new Gradient('#4B79A1', '#283E51'),
        new Gradient('#7474BF', '#348AC7'),
        new Gradient('#283048', '#859398'),
        new Gradient('#232526', '#414345'),
        new Gradient('#1F1C2C', '#928DAB')
    ];
    private currentIndex = 0;
    
    getNext(): Gradient {
        if(this.currentIndex >= this.gradients.length)
            this.currentIndex = 0;
        return this.gradients[this.currentIndex++];
    }
}

export class Gradient {
    constructor(public startColour: string, public endColour: string) {
        
    }
    
    toString() {
        return `
        background: ${this.startColour};
        background: -webkit-linear-gradient(top right, ${this.startColour}, ${this.endColour});
        background: -moz-linear-gradient(top right, ${this.startColour}, ${this.endColour});
        background: linear-gradient(to bottom left, ${this.startColour}, ${this.endColour});
        `;
    }
}