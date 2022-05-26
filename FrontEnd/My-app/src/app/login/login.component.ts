import { Component, OnInit } from '@angular/core';
import { QueryInterface } from 'src/interfaces/querys.interfaces';
import { QuerysService } from 'src/app/services/querys.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  query!: QueryInterface;

  constructor(private querysService: QuerysService) { 
    this.query={
      user: 'admin',
      password: 'p9ai5bOGQGIckKRnRqA1',
      sql: 'SHOW DATABASES;'
    };
  }
  ngOnInit(): void {
    this.querysService.obtenerBd(this.query).subscribe(data => {
      console.log(data)
    }
    );
  }

}
