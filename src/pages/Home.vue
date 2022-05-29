<template>
<div class="stripe"></div>

<div id="dot">⚠️ Last host transfer not logged ⚠️</div>

<Transition>
<div v-if="notifOpen" class="pop-up-bg" @click="notifOpen = false"></div>
</Transition>
<div v-if="notifOpen" class="reminders">
    <div class="title">Reminders</div>
    <div class="divider" style="height: 1px;margin: 10px;"></div>
    <!-- Uses Vue.js's if/else functions -->
    <div v-if="getDay == 0">Today is Sunday! Please change the prompts!</div>
    <div v-else="getDay">No reminders</div>
  </div>

<!-- This is the host queue. Each position is added via JS -->
<div class="hostqueue" id="hostqueue">

<div class="hostbox">
    <img class="icons" src="/icons/notifact.svg" @click="notifOpen = true"/>

    <!-- Where the host and next host go -->
    <div id="host"></div>
    <div class="divider" style="height: 1px;margin: 10px;"></div>
    <div id="m0"></div>
</div>
<div class="nextlist">
    <!-- Where the rest of the managers go -->
    <div id="m1"></div>
    <div id="m2"></div>
    <div id="m3"></div>
    <div id="m4"></div>
    <div id="m5"></div>

</div>
</div>

<!-- All the managers in the host queue system -->
<!-- JS code moves these elements to the host queue above -->
<!-- Each ID value corresponds with the Manager Terminal values -->
<div id="list">
  <div id="0">
    <div class="user-icon">
      <img src="https://uploads.scratch.mit.edu/get_image/user/27265189_500x500.png"/>
      <div class="indi" id="DogCatPuppyLover-stat"></div>
    </div>
    <div id="user"><a href="https://scratch.mit.edu/users/DogCatPuppyLover/" target="_blank">DogCatPuppyLover</a></div>
</div>
  
  <div id="1"><img src="https://uploads.scratch.mit.edu/get_image/user/20555709_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/cutefruit/" target="_blank">cutefruit</a></div></div>
  
  <div id="2">
    <div class="user-icon">
      <img src="https://uploads.scratch.mit.edu/get_image/user/21629747_500x500.png"/>
      <div class="indi" id="LegoManiac04-stat"></div>
    </div>
  <div id="user"><a href="https://scratch.mit.edu/users/LegoManiac04/" target="_blank">LegoManiac04</a></div>
  </div>
  
  <div id="3"><img src="https://uploads.scratch.mit.edu/get_image/user/71673362_500x500.png"/>
  <div class="indi" id="chooz-eets-stat"></div>
  <div id="user"><a href="https://scratch.mit.edu/users/chooz-eets/" target="_blank">chooz-eets</a></div></div>
  
  <div id="4"><img src="https://uploads.scratch.mit.edu/get_image/user/81076538_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/shiny--/" target="_blank">shiny--</a></div></div>
  
  <div id="5"><img src="https://uploads.scratch.mit.edu/get_image/user/45833894_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/Moonwatcher127/" target="_blank">Moonwatcher127</a></div></div>

  <div id="6"><img src="https://uploads.scratch.mit.edu/get_image/user/91756959_500x500.png"/> <div id="user"><a href="https://scratch.mit.edu/users/biohazard--/" target="_blank">biohazard--</a></div></div>
</div>

<div class="pane">
  
  <div class="links">
    <a href="https://auth2.jupitersleo.repl.co/login">Online</a>

    <div class="divider" style="width: 1px;margin: 10px;"></div>
  
    <a href="https://scratch.mit.edu/projects/618997313/fullscreen" target="_blank">Manager Terminal</a>

    <div class="divider" style="width: 1px;margin: 10px;"></div>
  
    <div class="button">
    <a href="https://scratch.mit.edu/studios/30486213/comments" target="_blank">Manager Discussion <div class="notif" id="mnotif"></div></a>
    <div id="latest-man"></div>
    </div>

    <div class="divider" style="width: 1px;margin: 10px;"></div>

    <div class="button">
    <a href="https://scratch.mit.edu/studios/30486215/comments" target="_blank">Curator Discussion <div class="notif" id="cnotif"></div></a>
    <div id="latest-cur"></div>
    </div>

    <div class="divider" style="width: 1px;margin: 10px;"></div>

    <!-- Vue-Router uses router-link for quick page navigation -->
    <router-link to="/templates">Templates</router-link>
  
    <div class="divider" style="width: 1px;margin: 10px;"></div>

    <router-link to="/faq">FAQ/Help</router-link>
  </div>
</div>
</template>

<script>
// All the links we will be fetching
// Some links require a proxy due to Scratch requiring CORS headers
// https://replit.com/@JupitersLeo/proxy
const data1 = "https://proxy.jupitersleo.repl.co/clouddata.scratch.mit.edu/logs?projectid=618997313&limit=2&offset=0";
const data2 = "https://proxy.jupitersleo.repl.co/api.scratch.mit.edu/studios/5842709/managers?limit=1";
const data3 = "https://proxy.jupitersleo.repl.co/api.scratch.mit.edu/studios/30486213/comments?limit=1";
const data4 = "https://proxy.jupitersleo.repl.co/api.scratch.mit.edu/studios/30486215/comments?limit=1";
  
// Links for online status
const on1 = "https://auth2.jupitersleo.repl.co/api/";

const d = new Date();
let day = d.getDay();
let date = d.getDate(); 
export default {
  data() {
    return {
      getDay: day,
      notifOpen: false
    }
  }
}

// Fetches Manager Terninal data
// Puts users in the host queue
fetch(data1).then((response)=>{  return response.json();
}).then(data=>{
   const {value} = data[1];
    
   document.getElementById("m0").innerHTML = document.getElementById(value.charAt(0)).innerHTML;
   document.getElementById("m1").innerHTML = document.getElementById(value.charAt(1)).innerHTML;
   document.getElementById("m2").innerHTML = document.getElementById(value.charAt(2)).innerHTML;
   document.getElementById("m3").innerHTML = document.getElementById(value.charAt(3)).innerHTML;
   document.getElementById("m4").innerHTML = document.getElementById(value.charAt(4)).innerHTML;
   document.getElementById("m5").innerHTML = document.getElementById(value.charAt(5)).innerHTML;
  
   // Host always has greatest charAt value
   document.getElementById("host").innerHTML = document.getElementById(value.charAt(6)).innerHTML;
  
   document.getElementById("host").insertAdjacentHTML('afterbegin', "<img class='crown' src='/icons/hostcrown.svg'>")
    
document.getElementById("m0").insertAdjacentHTML('afterbegin', "<img class='crown' src='/icons/nextcrown.svg'>")

// Checks if listed host = actual host
fetch(data2).then((response)=>{
  return response.json();
}).then(data=>{
   const {username} = data[0];
    
   if (document.getElementById("host").lastElementChild.innerHTML.includes(username) == false) {
       document.getElementById("dot").style.display = "unset"
   };
                
})});

// Gets date from latest Manager discussion comment
fetch(data3).then((response)=>{
  return response.json();
}).then(data=>{
   const {datetime_created} = data[0];
    
   const splitdate = datetime_created.slice(0, -14).split("-")

   if (splitdate[2] >= date) {
     document.getElementById("mnotif").style.display = "inline-grid"
   }
                
})

// Gets date from latest Curator discussion comment
fetch(data4).then((response)=>{
  return response.json();
}).then(data=>{
   const {datetime_created} = data[0];
    
   const splitdate = datetime_created.slice(0, -14).split("-")

   if (splitdate[2] >= date) {
     document.getElementById("cnotif").style.display = "inline-grid"
   }
                
})


// Fetches user online/offline data
fetch("https://windyorderlynotifications.jupitersleo.repl.co/managers.txt").then((response)=>{
  return response.text();
}).then(function(html) {
      let db = html.split(",");
      db.forEach(myFunction);
 
function myFunction(item) {
  fetch(on1 + item).then((response)=>{
  return response.json();
}).then(function(json) {
   let stat = item + "-stat";
    
   if (json.status == "Online") {
     document.getElementById(stat).style.backgroundColor = "green"
   };

})}});

</script>