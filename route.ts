import RouteDefinition = angular.RouteDefinition;
import {CartContainer} from "./cart/CartContainer";
export class AppRoutes{
    static DEFAULT:string = 'Default';

    static ROUTE_DEFAULT:RouteDefinition = {
        path: '/',
        name: AppRoutes.DEFAULT,
        component: CartContainer.NAME,
        useAsDefault: true
    };
    
}
