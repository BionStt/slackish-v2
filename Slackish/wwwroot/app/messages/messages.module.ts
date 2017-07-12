import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MessagesPageComponent } from './messages-page.component';
import { MessageFormComponent } from "./message-form.component";
import { MessagesHubService } from "./messages-hub.service";

const declarables = [MessagesPageComponent,MessageFormComponent];
const providers = [MessagesHubService];

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class MessagesModule { }
