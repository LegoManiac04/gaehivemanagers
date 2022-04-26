<template>
<div class="stripe"></div>

<div class="other-page" style="margin-top: 40px;">
  <router-link to="/">« Home</router-link> | <router-link to="/templates">Templates</router-link>
  <h1><a href="https://scratch.mit.edu/contact-us/" target="_blank">Contact Us</a> Templates:</h1>
  
  <h3>Troll Template:</h3>
  <textarea type="text" rows="8" value="Hello Scratch Team,
There has been a user, @<username>, who has been trolling our studio (https://scratch.mit.edu/studios/5842709/comments/) [+ and this studio <link>][+ and this user/users: <username(s)>]. They've been saying <what they've been doing/saying>. We've been reporting their comments and not interacting as much as possible, however they are not stopping. I believe you need to take action against this user. [+ Here are some screenshots of what they've been saying attached below:]
Thanks!" @focus="$event.target.select()"></textarea>

  <div class="divider" style="height: 1px;margin: 10px;"></div>
  
  <h3>Help Template:</h3>
  <textarea type="text" rows="6" value="Hello Scratch Team,
There has been a user, @<username>, who has been making concerning comments. They have been talking about/mentioning <what they've been saying>, and I think they need help.
[+ Here are some screenshots of what they've been saying attached below:]
Thank you." @focus="$event.target.select()"></textarea>

</div>
</template>