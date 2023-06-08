import { isObject } from "../Helper"


function deepClone<T extends any> (value: T): T {
    if (!isObject(value)) { return value }
    let newObj: T | any = {}
    for (const key in value) {
        newObj[key] = deepClone(value[key])
    }
    return newObj
}