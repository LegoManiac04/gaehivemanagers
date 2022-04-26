<template>
<div class="stripe"></div>

<div id="dot">⚠️ Last host transfer not logged ⚠️</div>

<div class="hostqueue" id="hostqueue">

<div class="hostbox">
    <div id="host"></div>
    <div class="divider" style="width: 1px;margin: 10px;"></div>
    <div id="m0"></div>
</div>
<div class="nextlist">
    <div id="m1"></div>
    <div id="m2"></div>
    <div id="m3"></div>
    <div id="m4"></div>
</div>
</div>

<div class="list">
<div id="0"><img src="https://uploads.scratch.mit.edu/get_image/user/27265189_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/DogCatPuppyLover/" target="_blank">DogCatPuppyLover</a></div></div>
<div id="1"><img src="https://uploads.scratch.mit.edu/get_image/user/20555709_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/cutefruit/" target="_blank">cutefruit</a></div></div>
<div id="2"><img src="https://uploads.scratch.mit.edu/get_image/user/21629747_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/LegoManiac04/" target="_blank">LegoManiac04</a></div></div>
<div id="3"><img src="https://uploads.scratch.mit.edu/get_image/user/71673362_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/chooz-eets/" target="_blank">chooz-eets</a></div></div>
<div id="4"><img src="https://uploads.scratch.mit.edu/get_image/user/58864118_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/NebulaOfTheEarth/" target="_blank">NebulaOfTheEarth</a></div></div>
<div id="5"><img src="https://uploads.scratch.mit.edu/get_image/user/59453672_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/hoIographic/" target="_blank">hoIographic</a></div></div>
</div>

<div class="pane">

  <div class="reminders">
    <div class="title">Reminders</div>
    <div class="divider" style="height: 1px;margin: 10px;"></div>
    <div v-if="getDay == 0">Today is Sunday! Please change the prompts!</div>
    <div v-else="getDay">No reminders</div>
  </div>

  <div class="links">
    <a href="https://scratch.mit.edu/projects/618997313/fullscreen" target="_blank">Manager Terminal</a>

    <div class="divider" style="height: 1px;margin: 10px;"></div>
  
    <a href="https://scratch.mit.edu/studios/30486213/comments" target="_blank">Manager Discussion <div class="notif" id="mnotif"></div></a>
    <div id="latest-man"></div>

    <div class="divider" style="height: 1px;margin: 10px;"></div>
  
    <a href="https://scratch.mit.edu/studios/30486215/comments" target="_blank">Curator Discussion <div class="notif" id="cnotif"></div></a>
    <div id="latest-cur"></div>
  
    <div class="divider" style="height: 1px;margin: 10px;"></div>

    <router-link to="/faq">FAQ/Help</router-link>
  </div>
</div>
</template>

<script>
const url1 = "https://proxy.jupitersleo.repl.co/clouddata.scratch.mit.edu/logs?projectid=618997313&limit=2&offset=0";
const url2 = "https://proxy.jupitersleo.repl.co/api.scratch.mit.edu/studios/5842709/managers?limit=1";
const url3 = "https://proxy.jupitersleo.repl.co/api.scratch.mit.edu/studios/30486213/comments?limit=1";
const url4 = "https://proxy.jupitersleo.repl.co/api.scratch.mit.edu/studios/30486215/comments?limit=1";

const d = new Date();
let day = d.getDay();
let date = d.getDate(); 
export default {
  data() {
    return {
      getDay: day
    }
  }
}

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
    
   document.getElementById("host").lastElementChild.innerHTML = document.getElementById("host").lastElementChild.innerHTML + "<span id='host-notice'>Host</span>"
    
   document.getElementById("m0").lastElementChild.innerHTML = document.getElementById("m0").lastElementChild.innerHTML + "<span id='host-notice'>Next Host</span>"
                    
fetch(url2).then((response)=>{
  return response.json();
}).then(data=>{
   const {username} = data[0];
    
   if (document.getElementById("host").lastElementChild.innerHTML.includes(username) == false) {
       document.getElementById("dot").style.display = "unset"
   };
                
})})

fetch(url3).then((response)=>{
  return response.json();
}).then(data=>{
   const {datetime_created} = data[0];
    
   const splitdate = datetime_created.slice(0, -14).split("-")
    
   document.getElementById("latest-man").innerHTML = "Latest Thread: " + splitdate[1] + "." + splitdate[2] + "." +  splitdate[0];

   if (splitdate[2] == date) {
     document.getElementById("mnotif").style.display = "inline-grid"
   }
                
})

fetch(url4).then((response)=>{
  return response.json();
}).then(data=>{
   const {datetime_created} = data[0];
    
   const splitdate = datetime_created.slice(0, -14).split("-")
    
   document.getElementById("latest-cur").innerHTML = "Latest Thread: " + splitdate[1] + "." + splitdate[2] + "." +  splitdate[0];

   if (splitdate[2] == date) {
     document.getElementById("cnotif").style.display = "inline-grid"
   }
                
})
  
</script>
