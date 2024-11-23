import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  constructor(private httpClient: HttpClient) { }

  createHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    return headers;
  }

  sendGetRequest(url: string): Observable<any> {
    const httpGetOptions = {
      headers: this.createHeaders().set('Cache-Control', 'no-cache').set('Pragma', 'no-cache'),
      observe: "response" as 'body'
    };
    console.log("webApiService, get, url: ", url, " httpGetOptions: ", httpGetOptions)
    return this.httpClient.get(url, httpGetOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError((error) => this.handleError(error))
      );
  }

  sendPostRequest(url: string, requestBody: any): Observable<any> {
    const httpOptions = {
      headers: this.createHeaders(),
      observe: "response" as 'body'
    };
    console.log("webApiService, post, url: ", url, " requestBody: ", requestBody, " httpOptions: ", httpOptions)
    return this.httpClient.post(url, requestBody, httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError((error) => this.handleError(error))
      );
  }

  sendPatchRequest(url: string, requestBody: any): Observable<any> {
    const httpOptions = {
      headers: this.createHeaders(),
      observe: "response" as 'body'
    };
    console.log("webApiService, patch, url: ", url, " requestBody: ", requestBody, " httpOptions: ", httpOptions)
    return this.httpClient.patch(url, requestBody, httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError((error) => this.handleError(error))
      );
  }

  sendDeleteRequest(url: string, requestBody: any): Observable<any> {
    const httpDeleteOptions = {
      headers: this.createHeaders(),
      observe: "response" as 'body',
      body: null,
    }
    httpDeleteOptions.body = requestBody;
    console.log("webApiService, delete, url: ", url, " requestBody: ", httpDeleteOptions)
    return this.httpClient.delete(url, httpDeleteOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError((error) => this.handleError(error))
      );
  }

  private ReturnResponseData(response: any) {
    return response;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status >= 400 && error.status <= 499)
      console.error(error.error.message);
    else
      console.error('Unexpected error occurred. Contact administrator');
    return throwError(error);
  }
}
