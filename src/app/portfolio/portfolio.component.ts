import { Component, Pipe, PipeTransform  } from '@angular/core';
import * as _ from 'lodash';

interface portfolio {
  title: string;
  imageFile: string;
  year: string;
}

var portfolioList:portfolio[] = [
  {
    "title" : "BizFlow",
    "imageFile" : "assets/gudy.jpg",
    "year" : "2016"
  },
  {
    "title" : "BizFlow",
    "imageFile" : "assets/gudy.jpg",
    "year" : "2017"
  },
  {
    "title" : "BizFlow",
    "imageFile" : "assets/gudy.jpg",
    "year" : "2017"
  },
  {
    "title" : "BizFlow",
    "imageFile" : "assets/gudy.jpg",
    "year" : "2017"
  },
  {
    "title" : "BizFlow",
    "imageFile" : "assets/gudy.jpg",
    "year" : "2016"
  }
]

@Component ({
  selector: 'portfolio-section',
  templateUrl : 'portfolio.template.html',
  styles: ['.portfolioList li { height: 300px;}']
})

export class PortfolioComponent {
  portfolioImages = portfolioList;
  ngOnInit(){
  	this.portfolioImages.sort( function(name1, name2) {
  	    if ( name1.year > name2.year ){
  	    	return -1;
  	    }else if( name1.year < name2.year ){
  	        return 1;
  	    }else{
  	    	return 0;
  	    }
  	});
  }
  highlightedDiv: number = 99;
  toggleHighlight(newValue: number) {
      this.highlightedDiv = newValue;
  }
}

@Pipe({
  name: 'filterUnique',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(value: any): any{
      if(value!== undefined && value!== null){
          return _.uniqBy(value, 'year');
      }
      return value;
  }
}

@Pipe({
  name: 'filterForPortfolio',
  pure: false
})

export class PortfolioFilter implements PipeTransform {
  transform(items: portfolio[], value: string): any[] {
   if (!value || value == 'all') {
     return items;
   }
   return items.filter(it => it['year'] == value);
 }
}
