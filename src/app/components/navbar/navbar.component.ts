import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @Input('claseLogo')
  public claseLogo: string = '';
  //logo ml-12 dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center

  constructor(){

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


}
