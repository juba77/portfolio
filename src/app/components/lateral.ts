import { Component } from "@angular/core";
import { general } from "../data/data";

@Component({
    selector: 'app-lateral',
    template: `
        <section class="lateral">
            <div [@animateFooter]>
                <ul class="footer-left-bar d-none d-md-block">
                    <li>
                        <a href="{{generalInformation.linkedIn}}" target='_blank'>
                            <i data-feather="linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="{{generalInformation.gitHub}}" target='_blank'>
                            <i data-feather="github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="{{generalInformation.gitLab}}" target='_blank'>
                            <i data-feather="gitlab"></i>
                        </a>
                    </li>
                    <li>
                        <a href="{{generalInformation.cv}}" target='_blank'>
                            <i data-feather="file"></i>
                        </a>
                    </li>
                </ul>
                <div class="footer-right-bar d-none d-md-block">
                    <a href="mailto:{{generalInformation.email}}" target='_blank'>{{generalInformation.email}}</a>
                </div>
            </div>
        </section>
    `
})

export class LateralComponent {
    generalInformation = general;
}