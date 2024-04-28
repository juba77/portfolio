import { Component, OnInit } from "@angular/core";
import { general } from "../data/data";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    template: `
      <div class="container max-w-screen-xl mx-auto px-4 mt-20">
        <div class="text-center">
          <div class="flex justify-center mb-16">
              <img src="{{generalInformation.image}}" class="app-img" alt="Image">
          </div>
          <h6 class="font-medium text-lg md:text-2xl uppercase mb-8 app-text-color-1">{{generalInformation.name}}</h6>
          <h1 class="font-normal text-xl md:text-4xl leading-none mb-8 app-text-color-1">{{generalInformation.job}}</h1>
          <p class="font-normal text-md md:text-xl mb-16 app-text-color-2">{{generalInformation.goal}}</p>
          <a href="{{generalInformation.cv}}" target="_blank" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500 app-cv">Télécharger mon CV</a>
        </div>
      </div>

      <div *ngIf="!acceptedModal" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity ">
                <div class="absolute inset-0 bg-gray-800 opacity-90 blur-3xl"></div>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 app-bg-color-1">
                      <img class="h-6 w-6" src="{{generalInformation.logo}}" alt="Logo"/>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-medium app-text-color-3">{{generalInformation.modalTitle}}</h3>
                        <div class="mt-2">
                            <p class="text-sm leading-5 text-gray-500 mb-2 mt-2" [innerHTML]="getSanitizedHTML(generalInformation.modalDescription)"></p>
                        </div>
                    </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button (click)="acceptModal()" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 app-bg-color-1 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5 app-text-color-1">
                            Commencer
                        </button>
                    </span>

                </div>
            </div>
        </div>

    </div>

    `
})

export class HomeComponent {

  generalInformation = general
  acceptedModal = this.isAcceptedModal()

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('acceptedModal') == null){
      sessionStorage.setItem('acceptedModal','false')
      this.acceptedModal = false
    }
  }

  acceptModal(){
    sessionStorage.setItem('acceptedModal','true')
    this.acceptedModal = true
  }

  isAcceptedModal(){
    return sessionStorage.getItem('acceptedModal') == 'true'
  }

  getSanitizedHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

}