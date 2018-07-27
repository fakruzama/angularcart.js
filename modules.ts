import 'angular';
import 'angular-messages';
import 'angular-material';
require('angular-material/angular-material.css');
import {AppComponent} from "./AppComponent";
import {CART_MODULE} from "./cart/CouponModule";
import '@angular/router/angular1/angular_1_router.js';

export const APP_MODULE_NAME = "cart";

const APP_MODULE_DEPENDENCIES:Array<string> = [
    'ngshipping',
    'ngMessages',
    'ngDelivered',
    Cart_MODULE
];

angular
    .module(
        APP_MODULE_NAME,
        APP_MODULE_DEPENDENCIES
    )
    .component(AppComponent.NAME, new AppComponent())
    
    .value('$routerRootComponent', AppComponent.NAME)
;
