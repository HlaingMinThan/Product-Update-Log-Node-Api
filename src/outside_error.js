process.on('uncaughtException', () => {
    console.log('sync error handle here')
})
process.on('unhandledRejection', () => {
    console.log('async error handle here')
})

// throw new Error('out side sync error'); // when sync error occur -> uncaughtException will trigger
new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('out side async error'); // when promise reject -> unhandledRejection will trigger
    }, 1000);
})

