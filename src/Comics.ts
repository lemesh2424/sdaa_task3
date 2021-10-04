import { Item } from "./Item";
import { Pages } from "./pages";

export class Comics extends Item {
    private pages: Pages;
    private title: string;
    private author: string;
    private artist: string;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.artist = artist;
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

    public getArtist(): string {
        return this.artist;
    }

    public setArtist(artist: string): void {
        this.artist = artist;
    }

    public toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.getNumberOfPages()}`;
    }
}