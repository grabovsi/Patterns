import { IListener } from "./iListener";

class ListenerTypeOne implements IListener {
    notify(): void {
        return console.log('Listener: Listener type one was notified')
    }

}

export {ListenerTypeOne}

