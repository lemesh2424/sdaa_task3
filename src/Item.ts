import { PagesIterable } from "./PagesIterable";

export abstract class Item extends PagesIterable(Object) {
    abstract toString(): string;
}