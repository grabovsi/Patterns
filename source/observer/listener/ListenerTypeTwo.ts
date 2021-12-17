import { IListener } from "./iListener";

class ListenerTypeTwo implements IListener {
    notify(): void {
        return console.log('Listener: Listener type two was notified')
    }

}

export {ListenerTypeTwo}