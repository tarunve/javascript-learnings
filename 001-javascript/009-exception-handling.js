// try - catch - finally
function simpleTryCatch(){
    let result ;
    var x = 100;
    try{
        console.log('An error will occur.');
        result = x/10;
        console.log('This line will never run');
    } catch (error){
        console.log("In the catch block : " + error.message);
    } finally{
        console.log("In the finally block");
    }
}
simpleTryCatch();

// custom exception
function throwCustomException(){
    try{
        customException();
    } catch(error){
        console.log(error.message + " - Error type : " + error.name);
    }
}
function customException(){
    let result;
    try{
        result = 10/0;
    } catch(error){
        throw{
            "message" : "Division by 0 results in infinite result" + error.message,
            "name" : "custom-division-zero-attempt"
        };
    }
}
throwCustomException();

