

function signUp(){
    
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let college = document.getElementById("college").value;
    let male = document.getElementById("male").value;
    let female = document.getElementById("female").value;
    let single = document.getElementById("single").value;
    let married = document.getElementById("married").value;
    let dob = document.getElementById("dob").value;
    let dp  = document.getElementById("dp").value;
    let backDp = document.getElementById("back-dp").value;
    

    localStorage.setItem("name",name)
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    localStorage.setItem("mobile",mobile)
    localStorage.setItem("college",college)
    localStorage.setItem("male",male)
    localStorage.setItem("female",female)
    localStorage.setItem("single",single)
    localStorage.setItem("married",married)
    localStorage.setItem("dob",dob)
    localStorage.setItem("dp",dp)
    localStorage.setItem("backDp",backDp)

    

  
    
}
function loginUser(){debugger;
  var user = document.getElementById('loginUserName').value;
  var pass = document.getElementById('loginPassword').value;

  var username1 = localStorage.getItem('username');
  var password1 = localStorage.getItem('password');

    if(user == username1 && pass == password1){
        window.location.href="profile.html";
      
    }  
    else{
      alert('username or password are incorrect');
    }

}
