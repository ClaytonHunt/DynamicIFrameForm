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

            it('is a Template', function() {
                var t = new module.Template();
                expect(t instanceof module.Template).toBeTruthy();
            });
        });

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