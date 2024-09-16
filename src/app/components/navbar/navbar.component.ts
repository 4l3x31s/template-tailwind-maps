import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @Input('claseLogo')
  public claseLogo: string = '';

  public email = '';

  public auth = inject(Auth);
  //logo ml-12 dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center

  constructor(){

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.email = this.auth.currentUser?.email + ''
  }


}
