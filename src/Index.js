// proxy Example
const obj = { text: "hello" , count: 0}
const customObj = new Proxy(obj, {
    get: (obj, property) => {
        console.log(obj[property])
        return obj[property];
    }
})

const textValue = customObj.text;
const countValue = customObj.count;
