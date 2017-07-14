import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {AuthGuardService} from "./auth-guard.service"
import {AuthenticationService} from "./authentication.service";
import {HttpService, SecuredHttpService} from "./http.service";
import {LoginRedirectService} from "./login-redirect.service";
import {SignalRMessageQueueFactory} from "./signalr-message-queue-factory";
import {Storage} from "./storage.service";

const providers = [
    HttpService,
    SecuredHttpService,
    SignalRMessageQueueFactory,
    AuthGuardService,
    AuthenticationService,
    LoginRedirectService,
    Storage
];

@NgModule({
    imports: [CommonModule],
    providers: providers
})
export class SharedModule { }