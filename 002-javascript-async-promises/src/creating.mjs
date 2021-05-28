import setText, { appendText } from "./results.mjs";

export function timeout(){
    const wait = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Timeout!");
        }, 1500);
    });

    wait.then(text => setText(text));
}

/**
 *  SetInterval to similar to setTimeout - The only difference is : Timeout will
 *  be called only once while interval will be called again an again after defined 
 *  time interval
 */
export function interval(){
    let counter=0;
    const wait = new Promise((resolve) => {
        setInterval(() => {
            console.log("INTERVAL");
            resolve(`Timeout! ${++counter}`);
        }, 1500);
    });

    wait.then(text => setText(text))
        .finally((text) => appendText(" -- Done"));
}

export function clearIntervalChain(){
    let counter=0;
    const wait = new Promise((resolve) => {
        setInterval(() => {
            console.log("INTERVAL");
            resolve(`Timeout! ${++counter}`);
        }, 1500);
    });

    wait.then(text => setText(text))
        .finally(() => clearInterval(interval));
}

export function xhr(){
    let request = new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/users/7");
        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(xhr.responseText);
            } else{
                reject(xhr.statusText);
            }
        }
        xhr.onerror = () => reject("Request Failed");
        xhr.send();
    }); 
    request.then(result => setText(result))
        .catch(reason => setText(reason));
}

/**
 *  Promises waits for the results until all requests are fufilled or 
 *  any one rejects. Helpful in the cases when we don't want to proceed
 *  if any one call from many gets failed.
 */
export function allPromises(){
    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses = axios.get("http://localhost:3000/orderStatuses");
    let userTypes = axios.get("http://localhost:3000/userTypes");
    let addresses = axios.get("http://localhost:3000/userAddresses");
    Promise.all([categories, statuses, userTypes, addresses])
        .then(([cat, stat, type]) => {
            setText("");
            appendText(JSON.stringify(cat.data));
            appendText(JSON.stringify(stat.data));
            appendText(JSON.stringify(type.data));
            appendText(JSON.stringify(addresses.data));
        })
        .catch(reasons => {
            setText(reasons);
        });
}

/**
 *  How it is different from above?
 *  -   Different data is returned 
 *  -   We don't need catch block since we will get the results corresponding to
 *      each request.
 */
export function allSettled(){
    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses = axios.get("http://localhost:3000/orderStatuses");
    let userTypes = axios.get("http://localhost:3000/userTypes");
    let addresses = axios.get("http://localhost:3000/userAddresses");
    Promise.allSettled([categories, statuses, userTypes, addresses])
        .then((values) => {
           let results = values.map( v => {
               if(v.status === "fulfilled"){
                   return `FULFILLED: ${JSON.stringify(v.value.data[0])} `;
               }
               return `REJECTED: ${v.reason.message} `;
           });
           setText(results);
        })
        .catch(reasons => {
            setText(reasons);
        });
}

export function race(){
    let users = axios.get("http://localhost:3000/users");
    let backupUsers = axios.get("http://localhost:3001/users");

    Promise.race([users, backupUsers])
        .then(users => setText(JSON.stringify(users.data)))
        .catch(reason => setText(reason));
}