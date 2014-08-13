/**
 * Created by clayton.hunt on 8/13/2014.
 */
/* globals Toolbox */

(function(module){
    'use strict';

    describe('Template Engine', function() {
        describe('Define As', function() {
            var t = null;
            beforeEach(function() {
                t = new module.Template();
            });

            it('exists', function() {
                expect(t.defineAs).toBeDefined();
            });

            it('is a function', function() {
                expect(typeof t.defineAs).toBe('function');
            });
        });
    })
}(Toolbox));
