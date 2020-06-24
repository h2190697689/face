### web worker
- javascript为单线程,同一时间只能执行一个任务,前面的任务没有完成,后面任务只能等着,web worker 则为javascript创造了多线程环境,主线程运行同时,web worker在后台执行,处理一些其他任务，处理完成后,通过postMessage把处理结果返回给主线程,web worker一旦创建完成就会始终运行