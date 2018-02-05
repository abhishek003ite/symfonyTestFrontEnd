import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;
  error: string;

  constructor( private router: Router,
               private authenticationService: AuthService) {}

  ngOnInit() {
    this.authenticationService.logout();
  }


  login(e) {

    e.preventDefault();

    this.username = e.target.elements[0].value;
    this.password = e.target.elements[1].value;

    this.authenticationService.login(this.username, this.password)
      .subscribe(result => {

        console.log(result);
        this.router.navigate(['/transactions']);

      });


  }

}
