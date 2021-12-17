class Publisher implements IPublisher {

    listeners : Array<IListener> = new Array()

    registerListener(listener: IListener): void {
        const isExist:boolean = this.listeners.includes(listener);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.listeners.push(listener);
    }

    removeListener(listener: IListener): void {
        let listenerIndex = this.listeners.indexOf(listener)
        if(listenerIndex === -1){
            return console.log('Subject: Observer has NOT been detected.');
        }
        this.listeners.splice(listenerIndex,1)
        return console.log('Subject: Observer has been deleted.');
    }
    
    notifyAll(): void {
        this.listeners.forEach(listener => {
            listener.notify()
        });
    }

}

