import {customElement, processContent, noView, autoinject} from 'aurelia-framework';
import * as hljs from 'highlightjs';

@customElement('code')
@processContent((compiler, resources, node: HTMLElement, instruction) => {
    hljs.highlightBlock(node);
    return false;
})
@noView
@autoinject
export class Code {
    
}