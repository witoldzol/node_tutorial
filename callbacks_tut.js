let cl = (x)=>{console.log(x)};


let callback = ()=>{

    cl('2');
}

let count = (x,callback)=>{
    cl(x);
    callback;
]

count('1',callback());
