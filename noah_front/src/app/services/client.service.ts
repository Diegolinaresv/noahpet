import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private client: BehaviorSubject<Client>;

  constructor() {
    var dbClient = localStorage.getItem('client');
    if (dbClient != null) {
      var tempClient = JSON.parse(dbClient);
      this.client = new BehaviorSubject<Client>(
        new Client(
          tempClient['id'],
          tempClient['name'],
          tempClient['city'],
          tempClient['email'],
          tempClient['cellphone'],
          tempClient['actualPet'] ?? null,
          tempClient['donePets'] ?? []
        )
      );
    } else {
      this.client = new BehaviorSubject<Client>(
        new Client(null, '', null, '', '', null, [])
      );
    }
  }

  getClient(): Observable<Client> {
    return this.client;
  }

  getActualClient(): Client {
    return this.client.value;
  }

  newPet() {
    var tempClient = this.getActualClient();
    tempClient.donePets.push(tempClient.getActualPet());
    tempClient.actualPet = null;
    this.setClient(tempClient);
  }

  setClient(client: Client): void {
    this.client.next(client);
    localStorage.setItem('client', JSON.stringify(this.getActualClient()));
  }

  resetClient() {
    this.client.next(new Client(null, '', null, '', '', null, []));
  }
}
