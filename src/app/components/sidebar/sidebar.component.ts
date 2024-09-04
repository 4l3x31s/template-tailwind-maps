import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('moon')
  private moon!: ElementRef;
  @ViewChild('sun')
  private sun!: ElementRef;

  @Input('aside')
  aside: string = '';
  //w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]

  @Input('maxtoolbar')
  maxtoolbar: string = '';
  //max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12
  @Input('max')
  max: string = ''
  //max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]
  @Input('mini')
  mini: string = '';
  //mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]
  @Output('openNav')
  public openNav = new EventEmitter();

  setDark(val: any){
    if(val === "dark"){

        document.documentElement.classList.add('dark')
        this.moon!.nativeElement.classList.add("hidden")
        this.sun!.nativeElement.classList.remove("hidden")
    }else{
        document.documentElement.classList.remove('dark')
        this.sun!.nativeElement.classList.add("hidden")
        this.moon!.nativeElement.classList.remove("hidden")
    }
  }
  emitirEvento() {
    console.log('entra emit')
    this.openNav.emit('data');
  }
}
