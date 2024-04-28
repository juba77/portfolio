import { Component } from "@angular/core";
import { experiences } from "../data/data";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-job',
    template: `

    <section class="py-10 md:py-16 ml-2">

      <div class="flex items-center mr-2 sm:mr-32 ml-2 sm:ml-32" id="jobs-title"> 
          <hr class="flex-grow border-t border-gray-300"> 
          <span class="px-3 app-text-color-1"> 
              03. Expériences
          </span> 
          <hr class="flex-grow border-t border-gray-300"> 
      </div> 

      <div *ngFor="let experience of experiencesInformation.experiences" class="container max-w-screen-xl mx-auto px-4 mt-10 flex items-center justify-center">
        <div class="w-full sm:w-4/5 bg-gray-800 shadow-xl rounded-md p-6 space-y-4 border border-gray-200 rounded-lg shadow border-gray-700">
          
          <div class="flex flex-col sm:flex-row items-center justify-between">

            <img src="{{experience.logo}}" alt="Company Logo" class="w-32 mr-2 mb-5">

            <div class="text-center">
              <h3 class="font-bold text-xl app-text-color-1">{{experience.title}}</h3>
              <p class="text-gray-400">{{experience.company}}</p>
            </div>

            <div class="flex items-center gap-3 mt-2 sm:mt-0">
              <span class=" text-purple-200 rounded-full px-3 py-1 text-sm app-bg-color-3">{{experience.duration}}</span>
              <span class="text-gray-400 text-sm flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{experience.location}}
              </span>
            </div>

          </div>

          <div class="text-gray-400 flex items-center gap-2">
            <span class="text-gray-400 flex items-center gap-1">
              <span>De {{experience.starting_date}} à {{experience.ending_date}}</span>
            </span>
          </div>

          <div class="text-gray-400">
            <p><strong>Missions:</strong></p>
            <ul class="list-disc list-inside">
              <li *ngFor="let mission of experience.missions" [innerHTML]="getSanitizedHTML(mission)"></li>
            </ul>
          </div>

          <div>
            <ul class="flex flex-wrap gap-2">
              <li *ngFor="let tag of experience.tags"><span class="bg-purple-600 text-purple-200 rounded-full px-3 py-1 text-sm app-bg-color-3">{{tag}}</span></li>
            </ul>
          </div>

        </div>
      </div>

    </section>
    `
})

export class JobComponent {

  experiencesInformation = experiences

  constructor(private sanitizer: DomSanitizer) { }

  getSanitizedHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

}