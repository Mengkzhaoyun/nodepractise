'use strict';

module.exports = {
    render: function (dom) {
        dom.innerHTML = __inline('index.tpl');
    }
};