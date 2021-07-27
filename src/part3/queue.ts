import { State, bind } from "./state";

export type Queue = number[];

//Takes a number x and returns a State that adds x to the queue
export const enqueue = (x: number): State<Queue, undefined> =>
    (queue: Queue) => [queue.concat([x]), undefined];

//Dequeues a number from the queue and returns it
export const dequeue: State<Queue, number> =
    (queue: Queue) => [queue.slice(1), queue[0]];

//Dequeues a number x from the queue and then enqueues 2 * x
//afterwards enqueues x / 3 and dequeues
export const queueManip: State<Queue, number> =
    (queue: Queue) =>
        bind(dequeue,
            (x: number) => bind(enqueue(2 * x),
                () => bind(enqueue(x / 3),
                    () => dequeue)))(queue)
