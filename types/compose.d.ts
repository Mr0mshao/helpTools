export default function compose(): <R>(a: R) => R;
export default function compose<R>(...funcs: Function[]): (...args: any[]) => R;
