// export default function compose(): <R>(a: R) => R;
// export default function compose<R>(...funcs: Function[]): (...args: any[]) => R;
// export default function compose (...funcs: Function[]) {
//     if (funcs.length === 0) {
//         return <T>(arg: T) => arg
//     }

//     if (funcs.length === 1) {
//         return funcs[0]
//     }

//     return funcs.reduce((a,b) => (...args: any) => a(b(...args)))
// }


// const asyncCompose = (...funcs) => {

//     const [first, ...fns] = funcs

//     return new Promise((reslove, reject) => {
        
//             fns.reduce((pre, next, index, arr) => {
    
//                 return pre
//                         .then(() => { return next(...args) })
//                         .catch(err => {
//                             reject(err)
//                         })
//                         .then(() => {
//                             arr.length === 0 && reslove()
//                         })
    
    
//             }, first(args))
        
//     })
    
// }


type AsnycCompose<T> = (...args: any[]) => Promise<T>;

// function asyncCompose<T> (...funcs: Array<AsnycCompose<T>>): AsnycCompose<T> {
//     return async (...args: any[]): Promise<T> => {
//         try {
//             let result = args
//             for (let i = funcs.length - 1; i >= 0; i--) {
//                 result = [ await funcs[i](...result) ]
//             }
//             return result[0]
//         } catch (error) {
//             throw new Error(`Error in asyncCompose: ${error.message}`);
//         }
//     }
// }


export function asyncCompose<T> (...funcs: Array<AsnycCompose<T>>): AsnycCompose<T> {
    const start = funcs.pop()
    return async (...args: any[]): Promise<T> => {
        return await funcs.reverse().reduce(async (result: Promise<T>, next: T) => next.call(this, await result), await start.apply(this, args))
    }
}
