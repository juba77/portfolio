import { Component, HostListener } from "@angular/core";
import { general } from "../data/data";

@Component({
    selector: 'app-footer',
    template: `
    
        <button (click)="backToTop()" *ngIf="displayButton" class="lateral fixed bottom-10 right-20 text-white p-2 rounded-full flex items-center justify-center transition-colors focus:outline-none bg-gray-700 hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500" title="Back to Top">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
        </button>

        <footer class="py-10 md:py-16">

                <div class="flex items-center mr-2 sm:mr-32 ml-2 sm:ml-32" id="contact-title"> 
                <hr class="flex-grow border-t border-gray-300"> 
                <span class="px-3 app-text-color-1"> 
                06. Contact
                </span> 
                <hr class="flex-grow border-t border-gray-300"> 
            </div> 
      
            <div class="container max-w-screen-xl mx-auto px-4 mt-10">
                <div class="text-center">

                    <h3 class="font-medium app-text-color-1 text-4xl md:text-5xl mb-5">{{generalInformation.email}}</h3>

                    <p class="font-normal text-gray-400 text-md md:text-lg mb-20">{{generalInformation.contact}}</p>

                    <div class="flex items-center justify-center space-x-8">
                        <a target='_blank' href="{{generalInformation.linkedIn}}" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                            <i data-feather="linkedin" class="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"></i>
                        </a>

                        <a target='_blank' href="{{generalInformation.gitHub}}" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                            <i data-feather="github" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
                        </a>

                        <a target='_blank' href="{{generalInformation.gitLab}}" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                            <i data-feather="gitlab" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
                        </a>

                        <a target='_blank' href="{{generalInformation.cv}}" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                            <i data-feather="file" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
                        </a>

                        <a target='_blank' href="mailto:{{generalInformation.email}}" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                            <i data-feather="mail" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
                        </a>
                    </div>
                </div>
                <hr class="my-6 text-gray-600 sm:mx-auto  lg:my-8" />
                <span class="text-center block text-sm text-gray-600 sm:text-center dark:text-gray-400">© 2024 Created by <a href="#" class="hover:underline">{{generalInformation.name}}</a> with Angular 16. All Rights Reserved.</span>
            </div>
        </footer>
    `
})

export class FooterComponent {
    generalInformation = general;

    displayButton = false;

    backToTop() {
      document.body.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    @HostListener('window:scroll', [])
        onScroll() {
        this.scrollFunction();
    }     

    scrollFunction(){
      if (window.scrollY > 20) {
        this.displayButton = true;
      } else {
        this.displayButton = false;
      }
    }
}