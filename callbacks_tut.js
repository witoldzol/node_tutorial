let cl = (x)=>{console.log(x)};


let cb = ()=>{

    cl('2');
    cb2();
}


let cb2 = ()=>{
    cl('3');
}

let count = (x,callback)=>{

    cl(x);
    let y = 1 + x;
    if(typeof callback === 'function'){
	callback( ()=>{

	    cb2();

	} );
    }
    
}

count('1', cb );
