// const prompt = require("prompt-sync")({ sigint: true });
// const {default: axios} = require("axios");
var xhttp = new XMLHttpRequest();
// xhttp.addEventListener("load", insta());

var username = document.getElementById("username").value;
 var API = "https://www.instagram.com/"+username+"/?__a=1";


function insta() {
    username = document.getElementById("username").value;
    API = "https://www.instagram.com/"+username+"/?__a=1";
    xhttp.open("GET", API, true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500/");
    xhttp.send();
    console.log(xhttp.responseText);
        // console.log(res.data.graphql.user.full_name);
        // document.getElementById("showfullname").innerHTML= res.data.graphql.user.full_name;

        // console.log(res.data.graphql.user.username);
        // document.getElementById("showusername").innerHTML= res.data.graphql.user.username;

        // console.log(res.data.graphql.user.biography);
        // document.getElementById("showbiography").innerHTML= res.data.graphql.user.biography;

        // console.log(res.data.graphql.user.edge_followed_by.count);
        // document.getElementById("showfollowed_by").innerHTML= res.data.graphql.user.edge_followed_by.count;

        // console.log(res.data.graphql.user.edge_follow.count);
        // document.getElementById("showfollow").innerHTML= res.data.graphql.user.edge_follow.count;

        // console.log(res.data.graphql.user.profile_pic_url);
        // document.getElementById("profile_pic").src= profile_pic_url;

    // .catch((err) => {
    //     console.log(err.message);
    // })
}