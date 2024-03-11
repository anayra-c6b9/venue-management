import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FacultyVenueEvent } from 'src/app/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private _http: HttpClient) { }

  getEventsApi = async (facultyId: string) => {
    const getEvents$ = this._http.get((environment.FACULTY_EVENTS_BY_ID + facultyId));

    return await lastValueFrom(getEvents$);
  }

  postVenueEventApi = async (venueEvent: FacultyVenueEvent) => {
    const postVenueEvent$ = this._http.post(environment.FACULTY_VENUE_EVENT, venueEvent);

    return await lastValueFrom(postVenueEvent$);
  }
}
