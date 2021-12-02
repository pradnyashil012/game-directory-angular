import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                'x-rapidapi-key': '47bcbb2985msha537acc2b7e6553p1e9a59jsn9e49d6846895'
            },
            setParams: {
                key: '7e70c51e5d0241f2967e8dd76dfa91cb'
            }
        });
        return next.handle(req);
    }
}