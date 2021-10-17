import { Item } from "./Item";
import { Pages } from "./pages";

export class Book extends Item {
    private readonly author: string;

    constructor(title: string, author: string, pages: Pages) {
        super(pages, title);
        this.author = author;
    }

    public getAuthor(): string {
        return this.author;
    }

    public toString(): string {
        return `Book: ${this.getTitle()} by ${this.getAuthor()} with number of pages: ${this.pages.getNumberOfPages()}`;
    }
}
