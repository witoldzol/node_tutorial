const test = 38938

let fin = x=>{

    return test * 3
}

let promise = new Promise(
        (resolve, reject)=>{
            if (test>500){
                let result=test * 2
                resolve(result)
            } else {
                let fail = test / 2
                reject(fail)
            }
        }
)

promise

let promise2 = (x)=>{


  return  new Promise(

    (res, rej)=>{

        if(x>60000){
            let omg = 99999
            res(omg)
        }

    })

    
}

function cl(x){console.log(x)}

promise
    .then( x=>promise2(x) )
    .then( y=>cl(y) )





