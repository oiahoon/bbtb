'use strict';

import Vue from 'vue';
import Axios from 'axios';
import VueLocalStorage from 'vue-ls';

Vue.prototype.$ajax = Axios

import Popup from './popup/Popup.vue';

new Vue({
    el: '#app',
    render: c => c(Popup)
});

