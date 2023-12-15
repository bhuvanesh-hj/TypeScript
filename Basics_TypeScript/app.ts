const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const btnElement = document.querySelector("button")!;

const numResults: Array<number> = [];
// const numResults: number[] = [];
const strResults: Array<string> = [];
// const strResults: string[] = [];

type numOrStr = number | string;

interface numOrStrobj {
  val: number;
  timestamp: Date;
}

function add(num1: numOrStr, num2: numOrStr) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

function obj(resultObj: numOrStrobj) {
  console.log(resultObj.val);
}

btnElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;

  const strResult = add(num1, num2);
  const numResult = add(+num1, +num2);

  numResults.push(numResult as number);
  strResults.push(strResult as string);

  obj({ val: numResult as number, timestamp: new Date() });
  console.log(numResults, strResults);
});


const promiseDemo = new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello happy to lear TypeScript😊")
    },1000)
})

promiseDemo.then((res)=>{
    console.log(res.split(" "));
    
})