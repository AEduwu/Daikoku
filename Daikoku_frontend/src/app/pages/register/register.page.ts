import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class RegisterPage implements OnInit {

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {}

  register() {
    const data = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.api.register(data).subscribe({
      next: (res) => {
        console.log('Usuario creado:', res);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
}