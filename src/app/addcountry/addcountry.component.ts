import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';


@Component({
  selector: 'AddCountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent {
  http: Http;
  router: Router;
  postResponse: Response;
  addCountryForm = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    language: new FormControl()
  });

  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
  }

  onAddRoom(): void {
    var data =
    "name="+this.addCountryForm.value.roomname+"&capital="+this.addCountryForm.value.tv+
    "&language="+this.addCountryForm.value.beds;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this.http.post('http://localhost/DZ12/addcountry.php',data,
    {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
    err => alert(JSON.stringify(err)),
    () => {
      if(this.postResponse["_body"].indexOf("error") === -1){
        this.router.navigate(['./allcountries']);
      }else{
        alert("Unsuccessful");
      }
    }
    );
  }

}
