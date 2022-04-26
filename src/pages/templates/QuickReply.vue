<template>
<div class="stripe"></div>

<div class="other-page">
  <router-link to="/">« Home</router-link> | <router-link to="/templates">Templates</router-link>
  <h1>Quick Reply:</h1>
    
  <textarea type="text" rows="1" value="Please remember to keep all comments appropriate for all ages, thanks!" @focus="$event.target.select()"></textarea>
  <textarea type="text" rows="1" value="Please don't add unrelated projects to the Gaehive, thanks!" @focus="$event.target.select()"></textarea>
  <textarea type="text" rows="1" value="Please don't advertise unrelated projects here, thanks!" @focus="$event.target.select()"></textarea>
  <textarea type="text" rows="1" value="Welcome to the Gaehive! Please read through the rules in the description." @focus="$event.target.select()"></textarea>
  <textarea type="text" rows="2" value="Looks like a manager has already invited you! Check the curators tab for an invite: https://scratch.mit.edu/studios/5842709/curators" @focus="$event.target.select()"></textarea>

</div>
</template>