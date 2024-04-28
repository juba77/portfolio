import { Component } from "@angular/core";
import { diplomes } from "../data/data";

@Component({
    selector: 'app-education',
    template: `

        <section class="py-10 md:py-16">

            <div class="flex items-center mr-2 sm:mr-32 ml-2 sm:ml-32" id="diplomes-title"> 
                <hr class="flex-grow border-t border-gray-300"> 
                <span class="px-3 app-text-color-1"> 
                    04. Diplômes
                </span> 
                <hr class="flex-grow border-t border-gray-300"> 
            </div> 

            <div class="container max-w-screen-xl mx-auto px-4 mt-10">

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div *ngFor="let diplome of diplomesInformation.educations" class="bg-gray-800 px-8 py-10 rounded-md shadow-xl border border-gray-200 rounded-lg shadow border-gray-700">

                        <h4 class="font-medium app-text-color-1 text-lg mb-4">{{diplome.title}}</h4>

                        <div>
                            <div class="flex items-center gap-3 mt-2 sm:mt-0">
                                <span class="text-gray-400">{{diplome.school}}</span>
                                <span class="text-gray-400 text-sm flex gap-1 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {{diplome.location}}
                                </span>
                            </div>
                            <br>
                            <div>
                                <ul class="flex flex-wrap gap-2">
                                    <li><span class=" text-purple-200 rounded-full px-3 py-1 text-sm app-bg-color-3">{{diplome.level}}</span></li>
                                    <li><span class=" text-purple-200 rounded-full px-3 py-1 text-sm app-bg-color-3">{{diplome.date}}</span></li>
                                    <li><span class=" text-purple-200 rounded-full px-3 py-1 text-sm app-bg-color-3">{{diplome.score}}</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    `
})

export class EducationComponent {
  diplomesInformation = diplomes
}