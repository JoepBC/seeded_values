var ParameterManager = /** @class */ (function () {
    function ParameterManager() {
        console.log("ParameterManager Created");
    }
    Object.defineProperty(ParameterManager, "Instance", {
        /**     Lazy init singleton */
        get: function () {
            if (!this._instance)
                this._instance = new ParameterManager();
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    ParameterManager.prototype.log = function () {
        console.log("Random log");
    };
    return ParameterManager;
}());
export { ParameterManager };
//# sourceMappingURL=param_manager.js.map