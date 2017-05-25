import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent, FilterPipe, PortfolioFilter} from './portfolio/portfolio.component';
import { sampleCodesComponent } from './sampleCodes/sampleCodes.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    FilterPipe,
    sampleCodesComponent,
    PortfolioFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    sampleCodesComponent
  ]
})
export class AppModule {}
