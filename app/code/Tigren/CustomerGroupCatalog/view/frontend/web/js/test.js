/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright  Copyright (c)  2023.  Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

define([
    'jquery',
    'Magento_Ui/js/modal/alert',
    'jquery/ui'
], function ($, alert) {
    'use strict';
    $.widget('mage.test', {
        options: {
            content: ('Thissss issss JSSSSSSSSSSSSSS Test')
        },
        _create: function () {
            $("#" + this.options.id).click(() => {
                alert({
                    content: this.options.content
                });
            });
        }

    });
    return $.mage.test;
});


