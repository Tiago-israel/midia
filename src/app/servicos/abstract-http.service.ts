import { environment } from './../../environments/environment';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'



export abstract class AbstractHttpService<T> {

    protected apiUrl: string = environment.apiUrl;

    constructor(
        protected resource: string, 
        private http: Http) {
    }

    public queryAll(queryParams?: any): Observable<T[]> {
        return this.http.get(`${this.apiUrl}${this.resource}?${this.buildQueryParams(queryParams)}`, this.getCustomOptions())
            .map(response => response.json());
    }

    public get(id: string): Observable<T> {
        return this.http.get(`${this.apiUrl}${this.resource}/${id}`, this.getCustomOptions())
            .map(response => response.json());
    }

    public post(requestBody: T): Observable<T> {
        return this.http.post(`${this.apiUrl}${this.resource}`, requestBody, this.getCustomOptions())
            .map(response => response.json());
    }

    public put(requestBody: T): Observable<T> {
        return this.http.put(`${this.apiUrl}${this.resource}/${requestBody['id']}`, requestBody, this.getCustomOptions())
            .map(response => response.json());
    }

    public delete(requestBody: number) {
        return this.http.delete(`${this.apiUrl}${this.resource}/${requestBody}`, this.getCustomOptions())
            .map(response => response);
    }

    private buildQueryParams(params: any): string {
        let queryParams: string = '';

        for (let property in params) {
            if (queryParams === '') {
                queryParams += `${[property]}=${params[property]}`;
            } else {
                queryParams += `&${[property]}=${params[property]}`;
            }
        }

        return queryParams;
    }

    protected getCustomOptions(): RequestOptions {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return new RequestOptions({headers: headers});
    }
}