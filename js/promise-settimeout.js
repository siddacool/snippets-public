// Promise based set time out for continuous intervaled execution of a code
// example requesting an API every 2 seconds

// Promise prosses to execute
const processPromise = () => new Promise((resolve, reject) => {
  // ...........
  // put conditions and define, reject and reslove end points
});

// interval time
// 1 second = 1000 ms

const intervalTime = 1000;

// Interval function
const startProcess = (() => {
  setTimeout(() => {
    processPromise()
    .then((res) => {
      console.log(res);
    })
    .catch((processError) => {
      console.log(processError);
    })
    .finally(startProcess);
  }, intervalTime);
});

// begin execution
startProcess();