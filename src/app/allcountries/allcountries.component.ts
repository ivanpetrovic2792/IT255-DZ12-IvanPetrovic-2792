import { Component, Directive } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'AllCountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent {
  private data : Object[];
  private router: Router;

  constructor(private http: Http, router: Router) {
    this.router = router;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    http.get('http://localhost/DZ12/getcountries.php', {headers: headers})
    .map(res => res.json()).share()
    .subscribe(data => {
      this.data = data.countries;
    },
    err => {
      this.router.navigate(['./']);
    }
    );
  }
  public removeCountry(event: Event, item: Number) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this.http.get('http://localhost/DZ12/deletecountry.php?id='+item,{headers:headers}) .subscribe( data => {
      event.srcElement.parentElement.parentElement.remove();
    });
    }
    public viewCountry(item: Number)
    {
      this.router.navigate(['/room', item]);
    }
}
