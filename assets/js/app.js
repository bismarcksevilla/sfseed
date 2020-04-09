/*
 * jQuery? Install
 */
// import $ from 'jquery';
const $ = require('jquery');

// any CSS you import will output into a single css file (app.css in this case)
// import '../scss/app.scss';
require('../scss/app.scss')

/*
 * Icons 
 */
// import '@fortawesome/fontawesome-free/css/all.css';
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

/*
 * Bootstrap 
 */
require('bootstrap');
// import 'bootstrap-sass';
$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

/**
 * Abrir link
 *
 * @param {string} url
 * @param {boolean} target
 */
$(document).on('click','.abrir', function(e){
    // e.preventDefault();
    var url=$(this).parent().data("url");
    var target=$(this).parent().data("target");
    if(target){
        return window.open(url, '_blank');
    }else{
        return window.location = url;
    }
});

console.log('Encore: assets/js/app.js');