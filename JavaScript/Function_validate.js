


function ValidateUser() {
    event.preventDefault();

    var username = getuserid('username');
    //  console.log('  log   ',getuserid('username'));
    var password = getuserid('Password');
    // getuserid(Password);

    if (autheticateuser(username, password)) {

        window.location.href = 'like_And_dislike.html';

    }
    else {
        window.alert(' invalid Credential ');
    }


}

function getuserid(id) {

    return document.getElementById(id).value;

}

function autheticateuser(username, password) {

    var dbuser = "sambasiva";
    var dbpwd = "sambasiva";

    if (username == dbuser && password == dbpwd) {
        return true;
    }

    else {

        return false;
    }

}