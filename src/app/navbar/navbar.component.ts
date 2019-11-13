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

    fullscreen() {


        if (document.fullscreen) {
            document.exitFullscreen();
        } else {
            const elem = document.documentElement;
            const methodToBeInvoked = elem.requestFullscreen || elem['mozRequestFullscreen']
                ||
                elem['msRequestFullscreen'];
            if (methodToBeInvoked) { methodToBeInvoked.call(elem); }
        }
    }
}
