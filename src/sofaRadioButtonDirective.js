angular.module('sofa.radioButton', [
    'sofa-radio-button.tpl.html'
])
    .directive('sofaRadioButton', function () {
        'use strict';

        var instanceCount = 0;

        return {
            restrict: 'E',
            replace: true,
            scope: {
                model: '=',
                label: '=',
                value: '=',
                disabled: '=?',
                propertyName: '@'
            },
            templateUrl: 'sofa-radio-button.tpl.html',
            link: function (scope) {
                instanceCount++;
                scope.id = instanceCount;
            }
        };
    });
