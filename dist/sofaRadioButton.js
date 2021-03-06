/**
 * angular-sofa-radio-button - v0.1.0 - Thu Feb 26 2015 11:48:11 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa-radio-button.tpl.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('sofa-radio-button.tpl.html',
    '<div class="sofa-radio-button" ng-class="{ \'sofa-radio-button--disabled\': disabled }">\n' +
    '    <input ng-disabled="disabled" type="radio" name="{{::propertyName}}" value="{{value}}" ng-model="model" id="sofa-radio-{{id}}" class="sofa-radio-button__input">\n' +
    '    <label for="sofa-radio-{{id}}" class="sofa-radio-button__label" >{{::label}}</label>\n' +
    '</div>\n' +
    '');
}]);

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
}(angular));
