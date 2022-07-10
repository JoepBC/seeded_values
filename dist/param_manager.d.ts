export declare class ParameterManager {
    private static _instance;
    /**     Lazy init singleton */
    static get Instance(): ParameterManager;
    private constructor();
    log(): void;
}
