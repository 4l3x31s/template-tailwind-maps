import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, NavbarComponent, BreadCrumbComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'template-tailwind';
  public aside: string = 'w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]';
  public maxtoolbar: string = 'max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12';
  public max: string = 'max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]';
  public mini: string = 'mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]';
  public logo: string ='logo ml-12 dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center';


  @ViewChild('content')
  private content!: ElementRef;


  public eslogo = false;
  constructor(
//    @Inject(DOCUMENT) private document: Document
  ){}

  openNav(entra: string) {
    console.log('entra 222', entra)
    if(this.aside.includes('-translate-x-48')){
        console.log('entra x48')
        this.aside = 'w-60 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B] translate-x-none'
        //this.aside.replace('w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]', 'w-60 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]')

        //this.aside.replace('bg-[#1E293B]', 'bg-[#1E293B] translate-x-none')
        this.max = 'max text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)] flex'
        // this.max.replace('max hidden', 'max')
        // this.max.replace('h-[calc(100vh)]', 'h-[calc(100vh)] flex')
        this.mini = 'mini mt-20 flex-col space-y-2 w-full h-[calc(100vh)] hidden';
        // this.mini.replace('mini mt-20 flex','mini mt-20')
        // this.mini.replace('h-[calc(100vh)]', 'h-[calc(100vh)] hidden')
        this.maxtoolbar = 'max-toolbar translate-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12';
        // this.maxtoolbar.replace('rounded-full h-12','rounded-full h-12 translate-x-0')
        // this.maxtoolbar.replace('max-toolbar translate-x-24','max-toolbar')
        // this.maxtoolbar.replace('scale-x-0 w-full', 'w-full')
        //eso se aumento en logo => ml-12 md:ml-60
        this.logo = 'logo dark:text-white ml-12 md:ml-60 transform ease-in-out duration-500 flex-none h-full flex items-center justify-center'
        //this.logo.replace('ml-12', '')
        console.log(this.logo);

        console.log(this.aside)
        console.log(this.max)
        console.log(this.mini)
        console.log(this.maxtoolbar)
        //this.logo!.nativeElement.classList.remove("ml-12")
        this.content!.nativeElement.classList.remove("ml-12")
        this.content!.nativeElement.classList.add("ml-12","md:ml-60")
    }else{
      console.log('entra otro')
        // mini sidebar

        // this.aside.replace('w-60', 'w-60 -translate-x-48')
        // this.aside.replace('bg-[#1E293B] translate-x-none', 'bg-[#1E293B]')
        // this.max.replace('max', 'max hidden')
        // this.max.replace('h-[calc(100vh)] flex', 'h-[calc(100vh)]')
        // this.mini.replace('mini mt-20 flex','mini mt-20')
        // this.mini.replace('h-[calc(100vh)] hidden', 'h-[calc(100vh)]')
        // this.maxtoolbar.replace('rounded-full h-12 translate-x-0','rounded-full h-12')
        // this.maxtoolbar.replace('max-toolbar','max-toolbar translate-x-24')
        // this.maxtoolbar.replace('w-full', 'scale-x-0 w-full')
        this.aside = 'w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]';
        this.maxtoolbar = 'max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12';
        this.max = 'max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]';
        this.mini = 'mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]';
        this.logo ='logo ml-12 dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center';
        //this.logo.replace('logo ', 'logo ml-12')
        console.log(this.logo);
        console.log(this.aside)
        console.log(this.max)
        console.log(this.mini)
        console.log(this.maxtoolbar)
        //this.logo!.nativeElement.classList.add('ml-12')
        this.content!.nativeElement.classList.remove("ml-12","md:ml-60")
        this.content!.nativeElement.classList.add("ml-12")

    }
  }
}
