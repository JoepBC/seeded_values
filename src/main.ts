
import * as PM from './param_manager';
let $: JQueryStatic = (window as any)["jQuery"];

alert('startin')
$(function () {

    let pm = PM.ParameterManager.Instance;

    pm.log();

    // Handler for .ready() called.

    $("p").on('click', function () {
        //$(this).hide();
        alert('clic')
    });

});
