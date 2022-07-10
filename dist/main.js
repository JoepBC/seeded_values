import * as PM from './param_manager';
var $ = window["jQuery"];
alert('startin');
$(function () {
    var pm = PM.ParameterManager.Instance;
    pm.log();
    // Handler for .ready() called.
    $("p").on('click', function () {
        //$(this).hide();
        alert('clic');
    });
});
//# sourceMappingURL=main.js.map