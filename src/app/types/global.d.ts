// declare module globalThis {
//     var myGlobalVariable: string
// }
// export interface global {}
declare global {
    var myGlobalVariable: 'Hello world'
    var __ISDEV__: boolean
    var SECRET_TOKEN: string

    namespace jest {
        interface Matchers<R> {
            toBeWithInRange(actual: number, floor: number, celling?: number): {
                message: () => void,
                pass: boolean
            }
        }
    }
}

export {}