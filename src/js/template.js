/**
 * Created by clayton.hunt on 8/12/2014.
 */
var Toolbox = Toolbox || {};

(function(module) {
    'use strict';

    module.Template = function(template) {
        this.template = template;
    };

    var p = module.Template.prototype;

    p.defineAs = function(template) {
        return new module.Template(template);
    };
}(Toolbox));