import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  public resultados:any[]=[];
  get historial() {
    return [...this._historial];
  }
  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    console.log(this._historial);

    //CONSUMIR APP

    this.http
      .get(`https://api.giphy.com/v1/gifs/search?api_key=hUr68gaMjWSnOn0V1L87K3lwrpC2hF1O&q=${query}&limit=10`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
  //LLave de la API
  private apiKey: string = 'hUr68gaMjWSnOn0V1L87K3lwrpC2hF1O';

  constructor(private http: HttpClient) {}
}
