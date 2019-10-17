import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Draft } from '../model/Draft';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CommService {


  serverIsAlive = false;
  clientIsRunning = false;
  draft: Draft;

  constructor(private apollo: Apollo) {
    this.isAlive();
  }


  toggleClientRunning() {

    this.apollo.query(
      {
        query: gql`
  {
    toggleClientRunning
  }`
      }
    )
      .subscribe(result => {
        this.setClientRunning(result.data['toggleClientRunning']);
      },
        err => {
          this.setClientRunning(false);
        });

  }

  getDraft() {

    if (this.serverIsAlive && this.clientIsRunning) {
      this.apollo.query(
        {
          query: gql`
    {
      draft {
        blue {
          picks{
            name
          }
          banns{
            name
          }
          combos{
            name
            priority
          }
          openRoles
        }
        red {
          picks{
            name
          }
          banns{
            name
          }
          combos{
            name
            priority
          }
          openRoles
        }
      }
    }`
        }
      )
        .subscribe(result => {
          this.draft = result.data['draft'];
        },
          err => {
            console.log(err);
          });

    }
  }

  async isAlive() {

    while (true) {

      this.apollo.query(
        {
          query: gql`
    {
      isAlive
    }`
        }
      )
        .subscribe(result => {
          this.setAlive(result.data['isAlive']);
        },
          err => {
            this.setAlive(false);
          });

      this.apollo.query(
        {
          query: gql`
        {
          isClientRunning
        }`
        }
      )
        .subscribe(result => {
          this.setClientRunning(result.data['isClientRunning']);
        },
          err => {
            this.setClientRunning(false);
          });


      if (this.clientIsRunning && this.serverIsAlive) {
        this.getDraft();
        await delay(500);
      } else if (this.serverIsAlive) {
        await delay(5000);
      } else {
        await delay(1000);
      }


    }

  }



  setClientRunning(alive: boolean) {
    this.clientIsRunning = alive;
  }

  setAlive(alive: boolean) {
    this.serverIsAlive = alive;
  }
}
