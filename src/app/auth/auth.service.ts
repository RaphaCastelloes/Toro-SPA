import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    // This method is called by the auth component to authenticate the user
    login(userName: string, password: string) {
        return this.httpClient.post(environment.apiUrl + 'api/Token/Authenticate', { "UserName": userName, "Password": password }, { responseType: 'text' });
    }
}