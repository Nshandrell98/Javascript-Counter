function counter(){
    var currentNum = 0;
    var output = document.getElementById('output'); // number output
    var add1 = document.getElementById('incr'); // '+' button
    var subtract1 = document.getElementById('decr'); // '-' button
    
    output.innerHTML = currentNum; //outputs number to screen

    add1.addEventListener('click', function () {
        //increments number when '+' button is clicked
        output.innerHTML = ++currentNum;
        console.log(currentNum);
        change()
    })
    subtract1.addEventListener('click', function(){
        //decrements number when '-' button is pressed
        output.innerHTML = --currentNum;
        console.log(currentNum);
        change()
    })

    function change(){
        //number changes color depending on if it's positive or negative
        if(currentNum<0){
            output.style.color = 'red'
        }
        if(currentNum>0){
            output.style.color = 'green'
        }
    }
}

counter();