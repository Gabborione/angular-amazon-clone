export class CardMenu{
    title: string;
    imgUrl: string;
    linkText: string;
    linkUrl: string;

    constructor(title: string, imgUrl: string, linkText: string, linkUrl: string){
        this.title = title;
        this.imgUrl = imgUrl;
        this.linkText = linkText;
        this.linkUrl = linkUrl;
    }
}