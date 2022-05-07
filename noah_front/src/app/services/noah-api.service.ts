import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivityLevel } from '../models/activity-level.model';
import { Breed } from '../models/breed.model';
import { Client } from '../models/client.model';
import { Country } from '../models/country.model';
import { Diet } from '../models/diet.model';
import { Pet } from '../models/pet.model';
import { Snacking } from '../models/snacking.model';
import { Texture } from '../models/texture.model';
import snakecaseKeys from 'snakecase-keys';

export class ClientClientLog {
  constructor(
    public name: string,
    public city: string,
    public email: string,
    public cellphone: string
  ) {}
}

export class ClientFoodResponse {
  constructor(
    public id: number,
    public name: string,
    public food: Array<Diet>,
    public supplement: Array<Diet>
  ) {}
}

export class ClientDietResponse {
  constructor(public name: string, public gPerDay: number) {}
}

export class ClientData {
  constructor(public client: ClientClientLog, public pets: Pet[]) {}
}

@Injectable({
  providedIn: 'root',
})
export class NoahApiService {
  private apiUrl: String = environment.apiUrl;

  constructor(private http: HttpClient) {}

  toCamel(s: string) {
    return s.replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace('-', '').replace('_', '');
    });
  }

  keysToCamel(o: any): any {
    if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
      const n = {};
      Object.keys(o).forEach((k) => {
        Object.assign(n, { [this.toCamel(k)]: this.keysToCamel(o[k]) });
      });
      return n;
    } else if (Array.isArray(o)) {
      return o.map((i) => {
        return this.keysToCamel(i);
      });
    }
    return o;
  }

  getClient(id: number) {
    const url = `${this.apiUrl}/api/clients/${id}`;
    return this.http.get<any>(url);
  }

  getCountries() {
    const url = `${this.apiUrl}/api/countries`;
    return this.http.get<Array<Country>>(url);
  }

  getBreeds() {
    const url = `${this.apiUrl}/api/breeds`;
    return this.http.get<Array<Breed>>(url);
  }

  getTexture() {
    const url = `${this.apiUrl}/api/textures`;
    return this.http.get<Array<Texture>>(url);
  }

  getActivityLevel() {
    const url = `${this.apiUrl}/api/activities`;
    return this.http.get<Array<ActivityLevel>>(url);
  }

  getAllergy() {
    const url = `${this.apiUrl}/api/diets?type=allergy`;
    return this.http.get<Array<Diet>>(url);
  }

  getMedicalCondition() {
    const url = `${this.apiUrl}/api/diets?type=medical_condition`;
    return this.http.get<Array<Diet>>(url);
  }

  getMedicalSymptom() {
    const url = `${this.apiUrl}/api/diets?type=medical_symptom`;
    return this.http.get<Array<Diet>>(url);
  }

  getSnacking() {
    const url = `${this.apiUrl}/api/snacking`;
    return this.http.get<Array<Snacking>>(url);
  }

  saveClient(client: Client) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(client);
    const url = `${this.apiUrl}/api/clients`;
    return this.http.post<Client>(url, body, { headers: headers });
  }

  savePet(pet: Pet) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(snakecaseKeys(pet));
    const url = `${this.apiUrl}/api/pets`;
    return this.http.post<Pet>(url, body, { headers: headers });
  }

  finishPet(id: number) {
    const url = `${this.apiUrl}/api/finish-pet/${id}`;
    return this.http.post(url, null);
  }

  updatePet(pet: Object, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(snakecaseKeys(pet));
    const url = `${this.apiUrl}/api/pets/${id}`;
    return this.http.patch<Pet>(url, body, { headers: headers });
  }

  getFood(id: number) {
    const url = `${this.apiUrl}/api/pet-foods/${id}`;
    return this.http.post<Array<ClientFoodResponse>>(url, null);
  }

  getDietResult(client: Client) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(client);
    const url = `${this.apiUrl}/api/calc`;
    return this.http.post<Array<ClientDietResponse>>(url, body, {
      headers: headers,
    });
  }
}
