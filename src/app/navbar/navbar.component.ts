import { Component } from '@angular/core';
import { CommService } from '../communication/comm.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


    constructor(public commService: CommService) {

    }
}
