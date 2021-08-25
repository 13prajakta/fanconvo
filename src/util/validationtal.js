export const validatetalent=(data)=>{
    let error={}
    var namereg = /^[a-zA-Z_ ]*$/;
     var emailreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(data.fname && data.lname && data.email && data.uname && data.time && data.password){
    if(!data.fname.value){
        error.fname="*First Name is required"
    }
    else if(!namereg.test(data.fname.value)){
        error.fname="*only alphabates"
    }
     if(!data.lname.value){
        error.lname="*Last Name is required"
    }
    else if(!namereg.test(data.lname.value)){
        error.lname="*only alphabates"
    }
     if(!data.uname.value){
        error.uname="*User Name is required"
    }
    else if(!namereg.test(data.uname.value)){
        error.uname="*only alphabates"
    }
    if(!data.email.value){
        error.email="*email is required"
    }
    else if(!emailreg.test(data.email.value)){
        error.email="*invalid email type"
    }
    if(data.time.value==" "){
        error.time="*time is required"
    }
    if(!data.password.value){
        error.password="*Password is required"
    }
    return error;
}
}