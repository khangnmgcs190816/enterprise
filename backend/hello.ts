const time1 = 4;
const time2 = 8;

// setTimeout(hello, time1 *1000, time1);
// setTimeout(hello, time2 *1000, time2);

let counter = 0;

const hello = (time) => {
    console.log(`Hello after ${time} seconds`);
    counter++;
    if (counter === 5) {
        console.log('Done');
        clearInterval(set5times);
    }
}
const set5times = setInterval(hello, 1000);





// clearInterval(set5times);




