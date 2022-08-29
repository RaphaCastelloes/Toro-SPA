import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    login(userName: string, password: string) {
        return this.httpClient.post('http://localhost:2000/api/Token/Authenticate', { "UserName": userName, "Password": password }, { responseType: 'text' });
    }
}