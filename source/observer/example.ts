import { ListenerTypeOne } from "./listener/ListenerTypeOne";
import { ListenerTypeTwo } from "./listener/ListenerTypeTwo";
import { PublisherOne } from "./publisher/publisherOne";

let listenerTypeOne_1 = new ListenerTypeOne()
let listenerTypeOne_2 = new ListenerTypeOne()
let listenerTypeTwo_1 = new ListenerTypeTwo()

let pulisherOne = new PublisherOne()

pulisherOne.registerListener(listenerTypeOne_1)
pulisherOne.registerListener(listenerTypeOne_2)
pulisherOne.registerListener(listenerTypeTwo_1)


pulisherOne.notifyAll()

pulisherOne.notifyAll()
