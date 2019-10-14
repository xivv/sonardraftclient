import { Component } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sonardraftclient';
  serverIsAlive = false;

  constructor(private apollo: Apollo) {
    this.apollo.query(
      {
        query: gql`
          {
            isAlive
          }
        `
      }
    ).subscribe(result => {
      console.log(result);
    });
  }
}
