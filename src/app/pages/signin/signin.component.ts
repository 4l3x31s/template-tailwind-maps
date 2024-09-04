import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorComponent } from "../../components/error/error.component";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ErrorComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  public fb = inject(FormBuilder);
  public loginFormGroup!: FormGroup;
  public router = inject(Router);
  constructor(){
  }

  iniciarValidaciones() {
    this.loginFormGroup = this.fb.group({
      vUser: ['', [
        Validators.email,
        Validators.required
      ]],
      vPass: ['', [
        Validators.required,
      ]]
    })
  }
  get f():any { return this.loginFormGroup.controls; }
  ngOnInit(): void {
    this.iniciarValidaciones();
  }

  iniciaSesion() {
    console.log('iniciaSesion')
    this.router.navigateByUrl('dashboard')
  }
}
