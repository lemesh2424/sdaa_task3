import { Item } from "./Item";
import { Pages } from "./pages";

export class Book extends Item {
    private pages: Pages;
    private title: string;
    private author: string;

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.getNumberOfPages()}`;
    }
}