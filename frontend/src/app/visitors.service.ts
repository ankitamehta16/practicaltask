import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers':'Content-Type'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {

  constructor(private http: HttpClient, private constants: ConstantsService) { }

  getVisitorsList() {
    return this.http
        .get < any > (this.constants.VISITORS).pipe(
            map(data => {
                return data;
            })
        );
  }

  createVisitor(postData: object) {
    return this.http.post<any>(this.constants.VISITORS,postData)
          .pipe(map(data => {	return data; }));
  }

  deleteVisitor(id){
    return this.http
    .delete < any > (this.constants.VISITORS+'/'+id).pipe(
        map(data => {
            return data;
        })
    );
  }
}
