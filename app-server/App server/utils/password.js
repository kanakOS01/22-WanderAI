const  hashPass = (pass) => {
    let hashedPass="";
    for (let i=0;i<pass.length;i++){
        hashedPass=hashedPass+`z${pass[i]}z`;
    }
    return "xx"+hashedPass+"yy";
};

const unHashPass = (hashedPass) => {
    let midHashedPass = hashedPass.substr(2, hashedPass.length - 4);
    let pass = "";
    for (let i = 0; i < midHashedPass.length; i++) {
        if (midHashedPass[i] !== "z") {
            pass += midHashedPass[i];
        }
    }
    return pass;
};

const securePassword = (pass) => {
    let password = "";
    for (let i = 0; i < pass.length; i++) {
        if(pass[i]===" "){
            password=" ";
            continue;
        }else if(pass[i].match(/[a-z]/i) != null ){
            const ASCII = pass[i].charCodeAt(0);
            password=password+String.fromCharCode(ASCII+1);
            continue;
        }else if (pass[i].match(/[0-9]/i) != null){
            password = password + (parseInt(pass[i]) + 1);
            continue;
        }else{
            password = password + pass[i];
            continue;
        }
    }
    return hashPass(password);
};

const unSecurePass = (hashedPass) => {
    let password = unHashPass(hashedPass);
    let pass = "";
    for (let i = 0; i < password.length; i++) {
        if (password[i] === " ") {
            pass = pass + " ";
            continue;
        } else if (password[i].match(/[a-z]/i) != null) {
            const ASCII = password[i].charCodeAt(0);
            pass = pass + String.fromCharCode(ASCII - 1);
            continue;
        } else if (password[i].match(/[0-9]/i) != null) {
            pass = pass + (parseInt(password[i]) - 1);
            continue;
        } else {
            pass = pass + password[i];
            continue;
        }
    }
    return pass;
};

export {securePassword,unSecurePass};