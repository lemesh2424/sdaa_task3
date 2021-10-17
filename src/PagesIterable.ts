export const PagesIterable = (superclass: any) => class extends superclass {
    private pointer = 0;
    
    public next() {
        if (this.pointer < this.pages.getNumberOfPages()) {
            return {
                done: false,
                value: `${this.toString()}, ${this.pages.getPage(this.pointer++).toString()}`,
            };
        } else {
            return {
                done: true,
                value: ``,
            }
        }
    }

    [Symbol.iterator]() {
        return this;
    }
}