## Event Loop and Asynchronous JS


1. The callstack inside the JS engine only executes one function at a time 
2. But the call stack can access different Web APIs from the browser using the window object
3. Functions like setTimeout, addEventHandler, and Fetch are actually browser functionalities
4. When these functions are executed, they are sent to the callback queue too wait until the js callstack is empty
5. The event loop continuously monitors both the callback queue  (or Task) and the callstack, and then sends pending functions to the callstack when it is empty
6. However, functions that have some a promise (such as Fetch()) are actually sent to the microtask queue, which has higher priority than the callback queue.These functions are executed first
7. Microtask queue : all callback functions comes with promises, promises, mutation observer goes inside microtask queue.

- The Event  Loop pushes the "queue" into the Call Stack only when the Call Stack is empty (i.e. the global execution context has been pushed off the call stack).
The order in which the Event Loop works is:
1. Call Stack
2. Microtask Queue
3. Callback Queue

### Q. When does the event loop actually start? 
Ans. Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️
### Q. Are only asynchronous web API callbacks are registered in the web API environment? 
Ans. YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
### Q. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue?
Ans. Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
### Q. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
Ans. No, there are trust issues with setTimeout() 😅. The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.