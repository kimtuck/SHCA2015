angular.module('ui.directives')
    .directive('uiModal', [
            '$timeout', function($timeout) {
                return {
                    restrict: 'EAC',
                    require: 'ngModel',
                    link: function (scope, elm, attrs, model) {
                        //helper so you don't have to type class="modal hide"
                        elm.addClass('modal hide');

                        var props = { show: false };
                        if (attrs.backdrop)
                            props.backdrop = attrs.backdrop === 'false' ? false : true;
                        elm.modal(props);

                        elm.on('shown', function() {
                            elm.find("[autofocus]").focus();
                        });
                        scope.$watch(attrs.ngModel, function(value) {
                            if (value) {
                                elm.modal('show');
                                if (attrs.tooltip) {
                                    scope.makeDialogATooltip(attrs.tooltip);
                                }
                            } else
                                elm.modal('hide');
                        });
                        //If bootstrap animations are enabled, listen to 'shown' and 'hidden' events
                        elm.on(jQuery.support.transition && 'shown' || 'show', function() {
                            $timeout(function() {
                                model.$setViewValue(true);
                            });
                        });
                        elm.on(jQuery.support.transition && 'hidden' || 'hide', function() {
                            $timeout(function() {
                                model.$setViewValue(false);
                            });
                        });

                        scope.makeDialogATooltip = function (tooltip) {
                            var arrowPosition = attrs.arrowPosition || "top-center";
                            var $elm = $(elm);
                            // Position tooltip off the screen so we can get width info
                            $elm.css(
                            {
                                position: 'absolute',
                                top: '0px',
                                left: '-10000px',
                                margin: '0px',
                                display: 'block'
                            });

                            var getPosition = function($element) {
                                return $.extend(
                                    {},
                                    $element.offset(),  // top, left
                                    {
                                        width: $element.outerWidth(true),
                                        height: $element.outerHeight(true)
                                    }
                                );
                            };

                            var anchor = $("#" + tooltip);
                            var arrow = $elm.find('.modal-tooltip-arrow');
                            var anchorInfo = getPosition(anchor);
                            var modalInfo = getPosition($elm);
                            var arrowInfo = getPosition(arrow);

                            var modalTopPosition;
                            var modalLeftPosition;
                            var arrowCss;


                            switch (arrowPosition) {
                                case 'top-center':
                                    modalTopPosition = anchorInfo.height + arrowInfo.height + 5;
                                    modalLeftPosition = -1 * (modalInfo.width / 2 - anchorInfo.width / 2);
                                    arrowCss = { display: 'block' };
                                    break;
                                case 'top-left':
                                    modalTopPosition = anchorInfo.height + arrowInfo.height + 5;
                                    modalLeftPosition = -1 * arrowInfo.width;
                                    arrowCss = { display: 'block',left: (arrowInfo.width + anchorInfo.width/2) + 'px'};
                                    break;
                            }


                            $elm.css(
                            {
                                position: 'absolute',
                                top: parseInt(modalTopPosition) + 'px',
                                left: parseInt(modalLeftPosition) + 'px',
                                margin: '0px',
                                display: 'block',
                                overflow: 'visible'
                            });
                            $(elm).find('.modal-tooltip-arrow').css(arrowCss);
                        }
                    }

                }
            }
    ]);