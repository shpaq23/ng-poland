export type Callable<T> = () => T;

export type AsyncCallable<T> = Callable<Promise<T>>;
