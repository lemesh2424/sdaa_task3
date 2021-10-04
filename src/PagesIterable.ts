export const PagesIterable = (superclass: any) => class extends superclass {
    private pointer = 0;
    
    public next() {
        if (this.pointer < this.pages.getNumberOfPages()) {
            return {
                done: false,
                value: this.pages.getPage(this.pointer++)
            };
        } else {
            return {
                done: true,
                value: null
            }
        }
    }

    [Symbol.iterator]() {
        return this;
    }
}