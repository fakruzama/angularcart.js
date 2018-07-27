import './app-component.scss';
import IComponentOptions = angular.IComponentOptions;
import RouteDefinition = angular.RouteDefinition;
import {AppRoutes} from "./AppRoutes";

export class AppComponent implements IComponentOptions {
    static NAME:string = "app";
    $routeConfig:RouteDefinition[] = [
        AppRoutes.ROUTE_DEFAULT,
    ];
