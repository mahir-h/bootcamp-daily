// console.log('1. Order placed');
// setTimeout(() => {
//     console.log('3. coffee is ready');
// }, 1000);

// console.log('2. Checking my phone');

function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
    if(id <=0 ){
        reject(new Error('user Id not found'));
    } else {
        resolve({id:id, name: `User ${id}`});
    }
    }, 500)
});
}

getUser(1)
    .then(user => {
        console.log(user.name);
    })
    .catch(err => {
        console.log(err.message);
    })
    .finally(() => {
        console.log('Done loading');
    }) 