//+-------------------------------------------------------------------------------------------------------------------+

/** @author: Ezequias Kluyvert de Oliveira Lemos
 *  @description:Javascript script related to the index.html page of this same project. 
    
 **/
//+-------------------------------------------------------------------------------------------------------------------+

/** -+ Functions related to telephone masks +-
 *  @description: Basically what this set of functions does is to take the string 
 *                from the input, and change it in real "time" (setTimeout).
 * 
 */

 // Function that updates the input from time to time.
 function update(_obj,_func){
    obj = _obj;
    func = _func;
    setTimeout("telephoneMask()",1);
}

// Function that defines the new value for the input, that is, changed, depending on its state.
function telephoneMask(){
    obj.value=func(obj.value)
}


// Function that changes the strings that make up the input.
function changeInput(input){
    input=input.replace(/\D/g,"");                  // Removes all non-numbers
    input=input.replace(/^(\d{2})(\d)/g,"($1) $2"); // Insert parentheses around the first two digits
    input=input.replace(/(\d)(\d{4})$/,"$1-$2");    // Insert a hyphen between the fourth and fifth digits
    return input;
}
//+-------------------------------------------------------------------------------------------------------------------+


/** Function ID
* 
* @description: Returns the element that has the ID passed by parameter.
* @param {ID do componente HTML} el 
*/
function id( el ){
    return document.getElementById( el );
}
//+-------------------------------------------------------------------------------------------------------------------+

// Event that "observes" everything, triggering as soon as another event occurs.
window.onload = function(){
    id('telephone').onkeyup = function(){
        update( this, changeInput );
    }

    id('telephone').onkeypress = function(){   
        return event.charCode >= 48 && event.charCode <= 57
    }  
}

//+-------------------------------------------------------------------------------------------------------------------+

