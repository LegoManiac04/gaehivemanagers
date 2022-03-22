<template>
<div class="stripe"></div>

<div class="hostqueue" id="hostqueue">
<div id="alert">Please make sure the Host is correct in the Manager Terminal.</div>

<div class="hostbox">
    <div id="host"></div>
    <div class="divider" style="width: 1px;margin: 10px;"></div>
    <div id="m0"></div>
    <div id="time"></div>
</div>
<div class="nextlist">
    <div id="m1"></div>
    <div id="m2"></div>
    <div id="m3"></div>
    <div id="m4"></div>
</div>
</div>

<div class="list">
<div id="0"><img src="https://uploads.scratch.mit.edu/get_image/user/27265189_500x500.png"/> <div id="user"><span>DogCatPuppyLover</span></div></div>
<div id="1"><img src="https://uploads.scratch.mit.edu/get_image/user/20555709_500x500.png"/> <div id="user"><span>cutefruit</span></div></div>
<div id="2"><img src="https://uploads.scratch.mit.edu/get_image/user/21629747_500x500.png"/> <div id="user"><span>LegoManiac04</span></div></div>
<div id="3"><img src="https://uploads.scratch.mit.edu/get_image/user/71673362_500x500.png"/> <div id="user"><span>chooz-eets</span></div></div>
<div id="4"><img src="https://uploads.scratch.mit.edu/get_image/user/58864118_500x500.png"/> <div id="user"><span>NebulaOfTheEarth</span></div></div>
<div id="5"><img src="https://uploads.scratch.mit.edu/get_image/user/59453672_500x500.png"/> <div id="user"><span>hoIographic</span></div></div>
</div>

<div class="links">
  <a href="https://scratch.mit.edu/projects/618997313/fullscreen" target="_blank">Manager Terminal</a>

  <div class="divider" style="height: 1px;margin: 10px;"></div>
  
  <a href="https://scratch.mit.edu/studios/30486213/comments" target="_blank">Manager Discussion</a>
  <div id="latest-man"></div>

  <div class="divider" style="height: 1px;margin: 10px;"></div>
  
<a href="https://scratch.mit.edu/studios/30486215/comments" target="_blank">Curator Discussion</a>
  <div id="latest-cur"></div>
  
  <div class="divider" style="height: 1px;margin: 10px;"></div>
  
  <router-link to="/faq">FAQ</router-link>
</div>
</template>

<script>
const url1 = "https://legomaniac04.github.io/ghm-storage/list.json";
const url2 = "https://legomaniac04.github.io/ghm-storage/managers.json";
const url3 = "https://legomaniac04.github.io/ghm-storage/time.json";
const url4 = "https://legomaniac04.github.io/ghm-storage/latestman.json";
const url5 = "https://legomaniac04.github.io/ghm-storage/latestcur.json";

fetch(url1).then((response)=>{
  return response.json();
}).then(data=>{
   const {value} = data[1];
    
   document.getElementById("m0").innerHTML = document.getElementById(value.charAt(0)).innerHTML;
   document.getElementById("m1").innerHTML = document.getElementById(value.charAt(1)).innerHTML;
   document.getElementById("m2").innerHTML = document.getElementById(value.charAt(2)).innerHTML;
   document.getElementById("m3").innerHTML = document.getElementById(value.charAt(3)).innerHTML;
   document.getElementById("m4").innerHTML = document.getElementById(value.charAt(4)).innerHTML;
   document.getElementById("host").innerHTML = document.getElementById(value.charAt(5)).innerHTML;
    
   document.getElementById("host").lastElementChild.innerHTML = document.getElementById("host").lastElementChild.innerHTML + "<span style='font-family: monospace;'>Host</span>"
    
   document.getElementById("m0").lastElementChild.innerHTML = document.getElementById("m0").lastElementChild.innerHTML + "<span style='font-family: monospace;'>Next Host</span>"
                    
})
    
fetch(url2).then((response)=>{
  return response.json();
}).then(data=>{
   const {username} = data[0];
    
   if (document.getElementById("host").lastElementChild.innerHTML.includes(username) == false) {
       document.getElementById("alert").style.display = "flex"
   };
                
})

fetch(url3).then((response)=>{
  return response.json();
}).then(data=>{
   const {date} = data;

   document.getElementById("time").innerHTML = "Updated " + date;

})

fetch(url4).then((response)=>{
  return response.json();
}).then(data=>{
   const {datetime_created} = data[0];
    
   const splitdate = datetime_created.slice(0, -14).split("-")
    
   document.getElementById("latest-man").innerHTML = "Latest Thread: " + splitdate[1] + "." + splitdate[2] + "." +  splitdate[0]
                
})

fetch(url5).then((response)=>{
  return response.json();
}).then(data=>{
   const {datetime_created} = data[0];
    
   const splitdate = datetime_created.slice(0, -14).split("-")
    
   document.getElementById("latest-cur").innerHTML = "Latest Thread: " + splitdate[1] + "." + splitdate[2] + "." +  splitdate[0]
                
})
</script>

<style>
html {
  background-color: #efebe9;
  height: 100%;
}
    
body {
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-areas:
    'menu main right';
  margin: 0;
}
    
img {
  height: 60px;
  width: 60px;
  border-radius: inherit;
  background-color: #efebe9;
}

a {
  color: #fbc02d;
  text-decoration: none;
}
    
#host, #m0, #m1, #m2, #m3, #m4 {
  margin: 10px;
  background-color: #f9f9f9;
  font-family: Arial, Helvetica, sans-serif;
  color: #34495e;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  box-shadow: #0003 0 5px 10px -5px;
}
    
#host, #m0 {
  box-shadow: none;
}
    
#user {
  display: grid;
  margin-left: 10px;
}
    
#alert {
  display: none;
  background-color: coral;
  padding: 10px;
  text-align: center;
  box-shadow: #0003 0 5px 10px -5px;
  border-radius: 15px;
}

#time {
  color: #34495e;
  font-family: monospace;
  position: absolute;
  align-self: end;
  right: 30px;
  font-size: x-small;
}

.list {
  display: none;
}
  
.stripe {
  grid-area: menu;
  background: linear-gradient(to bottom, #ef5350, #ffb74d, #fdd835, #9ccc65, #4fc3f7, #ba68c8);
  height: 90%;
  width: 10px;
  border-radius: 20px;
  margin-left: 20px;
}
    
.divider {
  background-color: #efebe9;
}
    
.hostbox {
  display: flex;
  position: relative;
  padding: 10px;
  border-radius: 15px;
  box-shadow: #0003 0 5px 10px -5px;
  background-color: #f9f9f9;
}
    
.hostqueue {
  grid-area: main;
  width: fit-content;
}

.links {
  grid-area: right;
  width: fit-content;
  font-family: monospace;
  font-weight: bold;
  color: #34495e;
  align-self: center;
  display: grid;
  padding: 10px;
  border-radius: 15px;
  box-shadow: #0003 0 5px 10px -5px;
  background-color: #f9f9f9;
}
    
</style>