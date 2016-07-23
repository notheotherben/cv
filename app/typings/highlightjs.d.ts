declare module 'highlightjs' {
    /**
     * Core highlighting function.
     * Accepts a language name, or an alias, and a string with the code to highlight.
     * The ignore_illegals parameter, when present and evaluates to a true value,
     * forces highlighting to finish even in case of detecting illegal syntax for the
     * language instead of throwing an exception.
     * The continuation is an optional mode stack representing unfinished parsing.
     * When present, the function will restart parsing from this state instead of
     * initializing a new one.
     */
    export function highlight(name: string,  value: string, ignore_illegals?: boolean, continuation?: any[]): HighlightResult;
    
    export function highlightAuto(value: string, languageSubset?: string[]): HighlightResult;
    
    export function fixMarkup(value: string): string;
    
    export function highlightBlock(block: Element): void;
    
    export function configure(options: HighlightOptions): void;
    
    export function initHighlighting(): void;
    
    export function initHighlightingOnLoad(): void;
    
    export function registerLanguage(name: string, language: (hljs) => HighlightLanguage);
    
    export function listLanguages(): string[];
    
    export function getLanguage(name: string): HighlightLanguage;
    
    export interface HighlightResult {
        /**
         * The detected language, or the language passed into the highlight function for compatibility with highlightAuto
         */
        language: string;
        
        /**
         * integer value representing how relevant the language was to the target code
         */
        relevance: number;
        
        /**
         * HTML string with highlighted markup
         */
        value: string;
        
        /**
         * The top of the current mode stack
         */
        top?: HighlightMode;
        
        /**
         * The second-best heurestically detected language. May be absent.
         */
        second_best?: HighlightResult;
    }
    
    export interface HighlightOptions {
        /**
         * A string used to replace TAB characters in indentation.
         */
        tabReplace?: string;
        
        /**
         * A flag to generate <br> tags instead of new-line characters in the output,
         * useful when code is marked up using a non-<pre> container.
         */
        useBR?: boolean;
        
        /**
         * A string prefix added before class names in the generated markup,
         * used for backwards compatibility with stylesheets.
         */
        classPrefix?: string;
        
        /**
         * An array of language names and aliases restricting auto detection to
         * only these languages.
         */
        languages?: string[];
    }
    
    export interface HighlightLanguage {
        
    }
    
    export interface HighlightMode {
        
    }
}