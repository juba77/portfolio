import { Component } from "@angular/core";
import { general } from "../data/data";

@Component({
    selector: 'app-menu',
    template: `
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6" style="width: 100%; left:0; right:0;" id="home">
        <div class="flex h-14 items-center justify-between">

          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block" href="https://www.juba-ouarab.fr/portfolio">
              <img class="w-auto h-6 sm:h-12" src="{{generalInormation.logo}}" alt="logo" />
            </a>
          </div>

          <div class="flex lg:hidden px-6">
            <button id="menu-toggle" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-1.5 text-gray-300">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" (click)="openMenuClick()">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            </button>
          </div>

          <div class="hidden lg:flex lg:gap-x-12">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <span (click)="scrollTo('home')" class="px-1 py-1 text-sm font-light text-white transition-colors duration-300 transform tracking-widest custom-font-2" >
                  <span class='nav-number'>01. </span> <span class="underline nav-text">Accueil</span>
                </span>
              </li>
              <li>
                <span (click)="scrollTo('presentation-title')" class="px-1 py-1 text-sm font-light text-white transition-colors duration-300 transform tracking-widest custom-font-2" href="#">
                  <span class='nav-number'>02. </span> <span class="underline nav-text">Présentation</span>
                </span>
              </li>
              <li>
                <span (click)="scrollTo('jobs-title')" class="px-1 py-1 text-sm font-light text-white transition-colors duration-300 transform tracking-widest custom-font-2" href="#">
                  <span class='nav-number'>03. </span> <span class="underline nav-text">Expériences</span>
                </span>
              </li>
              <li>
                <span (click)="scrollTo('diplomes-title')" class="px-1 py-1 text-sm font-light text-white transition-colors duration-300 transform tracking-widest custom-font-2" href="#">
                  <span class='nav-number'>04. </span> <span class="underline nav-text">Diplômes</span>
                </span>
              </li>
              <li>
                <span (click)="scrollTo('skills-title')" class="px-1 py-1 text-sm font-light text-white transition-colors duration-300 transform tracking-widest custom-font-2" href="#">
                  <span class='nav-number'>05. </span> <span class="underline nav-text">Compétences</span>
                </span>
              </li>
              <li>
                <span (click)="scrollTo('contact-title')" class="px-1 py-1 text-sm font-light text-white transition-colors duration-300 transform tracking-widest custom-font-2" href="#">
                  <span class='nav-number'>06. </span> <span class="underline nav-text">Contact</span>
                </span>
              </li>
            </ul>
          </div>

          <div class="{{ openMenu ? '' : 'hidden' }}" role="dialog" aria-modal="true" id="menu">
            <div class="fixed inset-0 z-10">
              <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 app-bg-color-1">
                
                <div class="flex lg:hidden px-8 items-center justify-between">
                  <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Home</span>
                  </a>
                  <button type="button" id="close-menu" class="inline-flex items-center justify-center rounded-md p-1.5 text-gray-700 hover:text-gray-900" >
                    <span class="sr-only">Fermer le menu</span>
                    <svg class="h-6 w-6 text-green-400 hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" aria-hidden="true" (click)="closeMenuClick()">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div class="mt-6 flow-root">
                  <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                      <span (click)="scrollTo('home')" href="#" class="-mx-3 text-sm font-semibold leading-6 text-center block px-4 py-2 app-text-color-1 mt-6">Accueil</span>
                      <span (click)="scrollTo('presentation-title')" class="-mx-3 text-sm font-semibold leading-6 text-center block px-4 py-2 app-text-color-1 mt-6">Description</span>
                      <span (click)="scrollTo('jobs-title')" class="-mx-3 text-sm font-semibold leading-6 text-center block px-4 py-2 app-text-color-1 mt-6">Expériences</span>
                      <span (click)="scrollTo('diplomes-title')" class="-mx-3 text-sm font-semibold leading-6 text-center block px-4 py-2 app-text-color-1 mt-6">Diplômes</span>
                      <span (click)="scrollTo('skills-title')" class="-mx-3 text-sm font-semibold leading-6 text-center block px-4 py-2 app-text-color-1 mt-6">Compétences</span>
                      <span (click)="scrollTo('contact-title')" class="-mx-3 text-sm font-semibold leading-6 text-center block px-4 py-2 app-text-color-1 mt-6">Contact</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>    `
})

export class MenuComponent {

    openMenu:boolean = false;
    generalInormation = general;
  
    openMenuClick(){
      this.openMenu = true;
    }
  
    closeMenuClick(){
      this.openMenu = false;
    }

    scrollTo(elem: string) {
      const element = document.getElementById(elem);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',      
          block: "start",
          inline: "nearest" 
        })
        this.closeMenuClick()
      }
    }

  }