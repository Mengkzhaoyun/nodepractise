'use strict';

module.exports = {
    render: function (dom) {
        dom.innerHTML = __inline('head.tpl');
    }
};