import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(private http: HttpClient) { }

  private productListFile : string = 'assets/pythonScripts/productList.jsonl';
  private productDetailsFile : string = 'assets/pythonScripts/productDetails.jsonl';

  public getProductListInfo() : Observable<string[]>
  {
    return this.http.get(this.productListFile, { responseType: 'text' })
      .pipe(
        map(response => {
          const lines = response.split('\n');
          const results : string[] = [];
          for (let line of lines) {
            if (line.trim() !== '') {
              results.push(JSON.parse(line));
            }
          }
          return results;
        })
      );
  }
  public getProductDetailsInfo() : Observable<string[]>
  {
    return this.http.get(this.productDetailsFile, { responseType: 'text' })
    .pipe(
      map(response => {
        const lines = response.split('\n');
        const results : string[] = [];
        for (let line of lines) {
          if (line.trim() !== '') {
            results.push(JSON.parse(line));
          }
        }
        return results;
      })
    );
  }

}
