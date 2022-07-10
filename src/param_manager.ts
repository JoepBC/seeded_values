export class ParameterManager {

    private static _instance: ParameterManager;
    /**     Lazy init singleton */

    static get Instance(): ParameterManager {
        if (!this._instance)
            this._instance = new ParameterManager();
        return this._instance;
    }

    private constructor() {
        console.log("ParameterManager Created");
    }

    log () {
        console.log("Random log");
    }
}

