/**
 * This is an example of an almost minimal implementation of a plugin.
 * Check out [the source](source/template_minimal.html)
 *
 * @class Template
 * @extends Plugin
 * @singleton
 */
define(function(require, exports, module) {
    "use strict";    
    main.consumes = ["Plugin", "ui"];
    main.provides = ["fontawesome"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var ui     = imports.ui;
        
        /***** Initialization *****/
        
        var plugin = new Plugin("Ajax.org", main.consumes);
        
        var loaded = false;
        function load() {
            if (loaded) return false;
            loaded = true;
            
            ui.insertCss(require("text!./css/font-awesome.css").replace(/@\{base-path\}/g,  options.staticPrefix), null, plugin);
        }
        
        /***** Lifecycle *****/
        
        plugin.on("load", function(){
            load();
        });
        
        plugin.freezePublicAPI({});
        register(null, { "fontawesome" : plugin });
    }
});