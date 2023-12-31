import { Component , OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  form: any = {
    email: null,
    password: null
  };
isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
roles: string[] = [];


constructor(private authService: AuthService, private tokenStorage: TokenStorageService ,private router: Router,private route: ActivatedRoute) { }

ngOnInit(): void {
  if (this.tokenStorage.getToken()) {
    this.isLoggedIn = true;
    this.roles = this.tokenStorage.getUser().roles;
  }
}


onSubmit(): void {
  const { email, password } = this.form;

  this.authService.login(email, password).subscribe(data => {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      const returnUrl =this.route.snapshot.queryParams["returnUrl"] ||'/';
      this.router.navigateByUrl(returnUrl) ;

    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
    );
}

login(){
  let err :any =document.getElementById("err");
  let password :any =document.getElementById("password");
  if(window.sessionStorage.getItem("auth-token") == null && password != null){
   err.style.display ="block" ;
  }
  else{

  }
}

// reloadPage(): void {
//   window.location.reload();

// }
}

