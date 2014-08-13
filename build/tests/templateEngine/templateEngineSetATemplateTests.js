/**
 * Created by clayton.hunt on 8/13/2014.
 */
/* globals Toolbox */

(function(module){
    'use strict';

    describe('Template Engine', function() {
        describe('Setting A Template', function() {
            it('can set a template using the constructor', function() {
                var t = new module.Template('test');

                expect(t.template).toBe('test');
            });

            it('can set a template using defineAs', function() {
                var t = new module.Template();
                t = t.defineAs('test');

                expect(t.template).toBe('test');
            });
        });
    });
}(Toolbox));