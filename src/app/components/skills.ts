import { Component } from "@angular/core";
import { skills } from "../data/data";

@Component({
    selector: 'app-skills',
    template: `

        <section class="py-10 md:py-16">

            <div class="flex items-center mr-2 sm:mr-32 ml-2 sm:ml-32" id="skills-title"> 
                <hr class="flex-grow border-t border-gray-300"> 
                <span class="px-3 app-text-color-1"> 
                    05. Compétences
                </span> 
                <hr class="flex-grow border-t border-gray-300"> 
            </div> 

            <div class="container max-w-screen-xl mx-auto px-4 mt-10">

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    <div *ngFor="let skill of skillsInformation.skills" class="bg-gray-800 px-8 py-10 rounded-md shadow-xl border border-gray-200 rounded-lg shadow border-gray-700">

                        <h4 class="font-medium app-text-color-1 text-lg mb-4">{{skill.title}}</h4>

                        <div>
                            <div class="text-gray-400">
                                <ul class="list-disc list-inside">
                                    <li *ngFor="let detail of skill.details">{{detail}}</li>
                                </ul>
                            </div>
                            <br>
                            <div>
                                <ul class="flex flex-wrap gap-2">
                                    <li *ngFor="let tag of skill.tags"><span class="bg-purple-600 text-purple-200 rounded-full px-3 py-1 text-sm app-bg-color-3">{{tag}}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    `
})

export class SkillsComponent {
  skillsInformation = skills
}