/**
 * Created by clayton.hunt on 8/13/2014.
 */
/* globals Toolbox */

(function(module) {
    'use strict';

    describe('Template Engine', function() {
        describe('In General', function() {
            it('exists', function() {
                expect(module.Template).toBeDefined();
            });

            it('is a function', function() {
                expect(typeof module.Template).toBe('function');
            });

            it('is a Template', function() {
                var t = new module.Template();
                expect(t instanceof module.Template).toBeTruthy();
            });
        });
    });
}(Toolbox));