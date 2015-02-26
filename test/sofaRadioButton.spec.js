'use strict';

describe('sofa.radioButton', function () {

    var element, $compile, $rootScope;

    beforeEach(module('sofa.radioButton'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should render correctly', function () {
        $rootScope.label = 'Test';
        element = $compile('<sofa-radio-button label="label"></sofa-radio-button>')($rootScope);
        $rootScope.$digest();
        expect(element.find('label').text().trim()).toEqual('Test');
        expect(element.find('input').length).toEqual(1);
    });

    it('should stay in sync with the model', function() {
        $rootScope.model = 'A';
        $rootScope.valueA = 'A';
        $rootScope.valueB = 'B';
        element = $compile(
            '<sofa-radio-button property-name="name" model="model" value="valueA"></sofa-radio-button>' +
            '<sofa-radio-button property-name="name" model="model" value="valueB"></sofa-radio-button>'
        )($rootScope);
        $rootScope.$digest();
        expect(element.find('input')[0].checked).toEqual(true);
        element.find('input')[1].checked = true;
        element.find('input').eq(1).triggerHandler('click');
        expect($rootScope.model).toEqual('B');
    });
});
