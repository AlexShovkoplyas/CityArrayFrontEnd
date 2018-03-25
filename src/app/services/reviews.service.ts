import { Injectable } from '@angular/core';
import { ReviewInfo } from '../models/review';

const reviewsInfo : ReviewInfo[] = [
  {
    city : "Lviv",
    person : "Bart Simpson",
    title : "the largest city in western Ukraine and the seventh-largest city in the country overall, with a population of around 728,350 as of 2016. Lviv is one of the main cultural centres of Ukraine.",
    imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Lw%C3%B3w_-_Ratusz.jpg/340px-Lw%C3%B3w_-_Ratusz.jpg",
    commentsCount:2,
  },
  {
    city : "Lviv",
    person : "Homer Simpson",
    title : "Besides its Ukrainian name, the city is also known by several other names in different languages: Polish: Lwów; German: Lemberg, Yiddish: לעמבערג‎, Lemberg, or לעמבעריק, Lèmberik; Russian: Львов, Lvov; Hungarian: Ilyvó; Serbo-Croatian: Lavov; Romanian: Liov; Latin: Leopolis; see also other names.",
    imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lviv_-_Cathedral_of_Saint_George_01.JPG/440px-Lviv_-_Cathedral_of_Saint_George_01.JPG",
    commentsCount:0,
  },
  {
    city : "Kyiv",
    person : "Homer Simpson",
    title : "Kiev is an important industrial, scientific, educational, and cultural centre of Eastern Europe.",
    imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/View_to_Kiev.jpg/480px-View_to_Kiev.jpg",
    commentsCount:1,
  },
]


@Injectable()
export class ReviewsService {

  constructor() { }

  GetReviews(): ReviewInfo[] {
    return reviewsInfo;
  }

}
