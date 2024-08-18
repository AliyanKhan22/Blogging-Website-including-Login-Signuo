import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,collection,addDoc } from "./firebase.mjs";
document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("user", user);
        } else {
            console.log("user Not Exists");
        }
    });
    let signupbtn = document.getElementById("signupbtn");
    if (signupbtn) {
        signupbtn.addEventListener("click", () => {
            let email = document.getElementById("email");
            let password = document.getElementById("password");
            createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((res) => {
                console.log("user", res.user);
            })
            .catch((error) => {
                console.log("error", error);
            });
        });
    }
    let loginbtn = document.getElementById("loginbtn");
    if (loginbtn) {
        loginbtn.addEventListener("click", () => {
            let email = document.getElementById("email");
            let password = document.getElementById("password");
            signInWithEmailAndPassword(auth, email.value, password.value)
            .then((res) => {
                console.log("user", res.user);
                window.location.href = "dashbord.html";
            })
            .catch((error) => {
                console.log("error", error);
            });
        });
    }
    let logoutbtn = document.getElementById("logoutbtn");
    if (logoutbtn) {
        logoutbtn.addEventListener("click", () => {
            signOut(auth).then(() => {
                console.log("Signout Successful");
                window.location.href = "index.html";
            }).catch((error) => {
                console.log("error", error);
            });
        });
    }
});