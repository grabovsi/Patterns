"use strict";
class RealSubject {
    constructor() {
        this.state = '1';
        this.observers = new Array();
    }
    registerObserver(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    removeObserver(observer) {
        let observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Observer has NOT been detected.');
        }
        this.observers.splice(observerIndex, 1);
        return console.log('Subject: Observer has been deleted.');
    }
    notify() {
        this.observers.forEach(observer => {
            observer.update();
        });
    }
}
console.log('11111');
