import {PagesIterable} from "./PagesIterable";
import {Pages} from "./Pages";

class CommonClass {}

export abstract class Item extends PagesIterable(CommonClass) {
    protected title: string;
    protected pages: Pages;
    protected constructor(pages: Pages, title: string) {
        super();
        this.title = title;
        this.pages = pages;
    }
    public getTitle(): string {
        return this.title
    }
    abstract toString(): string;
}