//+-------------------------------------------------------------------------------------------------------------------+

/** @author: Ezequias Kluyvert de Oliveira Lemos
 *  @description:Javascript script related to the index.html page of this same project.   
 **/
//+-------------------------------------------------------------------------------------------------------------------+

/** 
 * @formsValidation 
 * @param id Submit button ID 
 * @param state New button state 
 * @description: Function that activates the send button.
*/
function formsValidation(id,state){
    document.getElementById(id).disabled = !state;
}
//+-------------------------------------------------------------------------------------------------------------------+
/** 
 * @nameFildValidation 
 * @param event Information about events related to the keyboard 
 * @description: Function that activates the send buttonFunction that validates only letters for this field.
*/
function nameFildValidation(event){
    return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)
            || event.charCode == 32;
}
//+-------------------------------------------------------------------------------------------------------------------+
/**
 * @incorrectEmailAlert 
 * @param obj Object related to the id email
 * @description: Sends an invalid email message
 */
function incorrectEmailAlert(obj){
    if(obj.valid){
        console.log("1");
        document.getElementById("invalidEmail").innerHTML="";
    }else{
        console.log("2");
        document.getElementById("invalidEmail").style.color="red";
        document.getElementById("invalidEmail").style.float="right";
        document.getElementById("invalidEmail").style.fontSize="0.75rem";
        document.getElementById("invalidEmail").innerHTML="<b>E-mail inválido</b>";
    }
}
//+-------------------------------------------------------------------------------------------------------------------+
/**
 * @emailAddressValidation
 * @param infomation Information related to ID, email. 
 */
function emailAddressValidation(infomation){

    let obj = infomation;
    let user = obj.value.substring(0, obj.value.indexOf("@"));
    let domain = obj.value.substring(obj.value.indexOf("@") + 1, obj.value.length);
    
    console.log("user: "+user);
    console.log("domain: "+domain);

    if ((user.length >=1) &&
    (domain.length >=3) && 
    (user.search("@")==-1) && 
    (domain.search("@")==-1) &&
    (user.search(" ")==-1) && 
    (domain.search(" ")==-1) &&
    (domain.search(".")!=-1) &&      
    (domain.indexOf(".") >=1)&& 
    (domain.lastIndexOf(".") < domain.length - 1)) {
        obj.valid = true;
        formsValidation('submit', true);

    }else{
        obj.valid = false;
        formsValidation('submit', false);
    }
}
//+-------------------------------------------------------------------------------------------------------------------+
/**
 * @telephoneFildValidation
 * @param event Event related to ID, telephone.
 * @description: Returns true, if the character is numeric. Otherwise, it returns false.
 */
function telephoneFildValidation(event){
    return event.charCode >= 48 && event.charCode <= 57;
}
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

function loadingNewProperty(id){
    document.getElementById(id).valid = false;
}

// Event that "observes" everything, triggering as soon as another event occurs.
window.onload = function(){
    
    loadingNewProperty('email');

    document.getElementById('name').onkeypress = function(){
        return nameFildValidation(event);
    }

    document.getElementById('email').onkeyup = function(){    
       emailAddressValidation(this);
    }

    document.getElementById('email').onblur = function(){
        incorrectEmailAlert(this);
    }

    document.getElementById('telephone').onkeyup = function(){     
        update( this, changeInput );
    }

    document.getElementById('telephone').onkeypress = function(){ 
        return telephoneFildValidation(event);
    }

 
}
//+-------------------------------------------------------------------------------------------------------------------+