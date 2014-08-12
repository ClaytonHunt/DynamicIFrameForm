/**
 * Created by clayton.hunt on 8/12/2014.
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
        });
    });
}(Toolbox));