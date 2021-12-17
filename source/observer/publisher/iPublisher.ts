interface IPublisher {
    registerListener(listener:IListener):void
    removeListener(listener:IListener):void
    notifyAll():void
}

