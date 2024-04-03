import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import matchMediaPolyfill from 'mq-polyfill'

matchMediaPolyfill(window)

global.myGlobalVariable = 'Hello world'

global.SECRET_TOKEN = process.env.SECRET_TOKEN

// for dispatching resize event
// we must implement window.resizeTo in jsdom

window.resizeTo = function resizeTo(width: number, height: number) {
    Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height
    }).dispatchEvent(new this.Event('resize'))
}