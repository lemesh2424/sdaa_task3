import { Item } from "./Item";
import { Pages } from "./pages";

export class Comics extends Item {
    private readonly author: string;
    private readonly artist: string;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super(pages, title);
        this.author = author;
        this.artist = artist;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getArtist(): string {
        return this.artist;
    }

    public toString(): string {
        return `Comics: ${this.getTitle()} by ${this.getAuthor()}, the artist is ${this.getArtist()}, number of pages: ${this.pages.getNumberOfPages()}`;
    }
}