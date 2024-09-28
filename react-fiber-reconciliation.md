# React Fiber Reconciliation

What is reconciliation?? <br>
Reconciling your description of what you want your UI to look like and behave like with some host env (ex browser)


Before React 16, we had the stack reconciler.

This reconciler basically maintains 2 DOM trees - one actual tree and another one which is detached from the browser (also can be called as the WIP tree)
It maintains these 2 trees to render and commit

The rendering work is done off the screen in the WIP tree and when it looks good, commits it


To kick off the render phase - workLoop
workLoop is something like
```
while(workExists)
  doWork()
```

work starts with a function called `beginWork(currentFiberNode, WIPFiberNode, renderLanes)`
renderLanes are important for scheduling

currentFiberNode -- In the browser right now -- never mutated, only read from
workInProgressNode -- what is about to be on the screen

beginWork basically marks the update flags

does dfs

once we reach the child node,  `completeWork()` is called

completeWork constructs a tree of elements in memory, walks back up the tree while constructing it.

when it gets to the top, the render phase completes and we shift to commit phase.

Commmit phase:
After the render phase is completed, the alternate tree is the latest updated one. This is committed to the browser/host environment 

The `FiberRootNode` is the real root of the tree. It points to the current tree. During commit phase, this root node is made to point the updated tree. This is the commit phase
