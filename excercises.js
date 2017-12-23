//--------------------------------------------------------------------------
//----------------------------------------  EXCERCISE 1 --------------------
//--------------------------------------------------------------------------



//        ---------// make a chess from space and hash

    //\n - new line
let  grid = 8
let  line = ''
let  sph = ' '
let  hsh = '#'
let  nl = '\n'
let  flip = 0
    
let  iteration = grid * grid


function table (){

    
    for(i=0; i<iteration; i++){

	//new line & swap order
	if(i%grid == 0){

	    line += nl
	    //flip the switch
	    if(flip == 0){
		flip = 1}
	    else{
		flip = 0}
	    
	}
	
	//create line
	if(i%2==flip){

	    line += sph
	}
	else {

	    line += hsh
	}
    }

	

}    

//--------------------------------------------------------------------------
//----------------------------------------  EXCERCISE 2 --------------------
//--------------------------------------------------------------------------

