import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  // root means can be used throughout application
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { 
  }
  // takes in no parameters, returns a HousingLocation array
  async getAllHousingLocation() : Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  // takes in a number for id, could return a housing location that doesn't match
  async getHousingLocationById(id: Number) : Promise <HousingLocation | undefined>{
    // Interpolate URL and ID
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`Application submitted for ${firstName} ${lastName} at ${email}`);
  }
}
