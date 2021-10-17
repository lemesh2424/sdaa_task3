import { Item } from "./Item";
import {Pages} from "./Pages";
export class Magazine extends Item {
    constructor(title: string, pages: Pages) {
        super(pages, title);
    }

    public toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.getNumberOfPages()}`;
    }
}
