

//output every second to the console
let count = 0
let time = setInterval(function(){

	count += 1
	console.log( count + 'seconds have passed') 
	if(count >10) {
		clearInterval(time)
	}
}, 1000)

