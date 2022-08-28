import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    token: string;
}


@Injectable({ providedIn: 'root' })
export class ServiceNameService {
    constructor(private httpClient: HttpClient) { }

    login(userName: string, password: string) {
        return this.httpClient.post<AuthResponseData>('http://localhost:2000/api/Token/Authenticate', { UserName: userName, Password: password });
    }

}