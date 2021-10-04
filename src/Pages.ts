import { Page } from "./Page";

export class Pages {
    private pages: Array<Page>;

    constructor(pages: Array<Page>) {
        this.pages = pages;
    }

    public getNumberOfPages(): number {
        return this.pages.length;
    }

    public getPage(pageNumber: number): Page {
        return this.pages[pageNumber];
    }
}