import { Item } from "./Item";
import { Pages } from "./pages";

export class Magazine extends Item {
    private pages: Pages;
    private title: string;

    constructor(title: string, pages: Pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.getNumberOfPages()}`;
    }
}