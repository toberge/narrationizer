export default class Stack<T> {
    private array : T[] = [];

    public push(item : T) : void {
        this.array.push(item);
    }

    public pop() : T | undefined {
        return this.array.pop();
    }
}