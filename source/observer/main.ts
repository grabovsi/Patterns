interface Subject {
    registerObserver(observer:Observer):void
    removeObserver(observer:Observer):void
    notify():void
}

interface Observer {
    update():void
}

class RealSubject implements Subject{
    state: string = '1'
    observers : Array<Observer> = new Array()

    registerObserver(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    removeObserver(observer:Observer): void {
        let observerIndex = this.observers.indexOf(observer)
        if(observerIndex === -1){
            return console.log('Subject: Observer has NOT been detected.');
        }
        this.observers.splice(observerIndex,1
            )
        return console.log('Subject: Observer has been deleted.');
        
    }

    notify(): void {
        this.observers.forEach(observer => {
            observer.update()
        });
    }

}

class RealObserver implements Observer {
    update(): void {
        console.log('Lalala')
    }
    
}

console.log('11111')