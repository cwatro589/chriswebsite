import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component ({
    selector : 'resume-section',
    templateUrl : 'resume.template.html'
})

export class ResumeComponent {
  experienceList: Object;
    constructor(http: Http) {
        // this.result = {profile:[]};
        http.get('assets/profile.json').map((res: Response) => res.json()).subscribe(res => this.experienceList = res);
    }
    // jsonString: string = JSON.stringify(this.result);
    // get imageKeys() {
    //     return Object.keys( this.result );
    // }
}
