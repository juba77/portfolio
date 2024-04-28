import { Component } from "@angular/core";
import { general } from "../data/data";

@Component({
    selector: 'app-about',
    template: `

        <div class="flex items-center mt-40 mr-2 sm:mr-32 ml-2 sm:ml-32" id="presentation-title"> 
            <hr class="flex-grow border-t border-gray-300"> 
            <span class="px-3 app-text-color-1"> 
              02. Présentation
            </span> 
            <hr class="flex-grow border-t border-gray-300"> 
        </div> 

        <section class="py-10 md:py-16">
            <div class="container max-w-screen-xl mx-auto px-4 flex items-center justify-center">
                <div class="w-full sm:w-4/5 block p-6 border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
                    <blockquote class="text-xl italic font-semibold">
                        <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                        </svg>
                        <p *ngFor="let paragraph of generalInformation.description" class="m-4 font-medium text-sm md:text-base app-text-color-2">{{paragraph}}</p>
                    </blockquote>
                </div>
            </div>
        </section>
    `
})

export class AboutComponent {
    generalInformation = general;
}