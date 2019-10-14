import { Component } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sonardraftclient';
  serverIsAlive = false;

  constructor(private apollo: Apollo) {

    const apol = this.apollo;

    setInterval(function () {
      apol.query(
        {
          query: gql`
    {
      isAlive
    }`
        }
      ).subscribe(result => {
        console.log(result);
      });

    }, 1000);
  }
}
