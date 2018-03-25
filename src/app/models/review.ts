export class Review {
    city : string;
    cityid : number;
    person : string;
    personId : number;
    title : string;
    cityFeatures : string;
    cityBags : string;

    imgPath : string;

    comments : Comment[];    
}

export class ReviewInfo {
    city : string;
    // cityid : number;
    person : string;
    // personId : number;
    title : string;

    imgPath : string;
    
    commentsCount : number;    
}
