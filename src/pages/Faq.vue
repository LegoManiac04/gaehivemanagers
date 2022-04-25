<template>
<div class="stripe"></div>

<div class="other-page">
  <router-link to="/">« Home</router-link>
  <h1>FAQ/Help:</h1>
  <span>Q: What is this?</span>
  <span>A: A portal/tool for the managers of the <a href="https://scratch.mit.edu/studios/5842709/" target="_blank">Gaehive</a>. It fetches the raw data from the Manager Terminal and "decodes" it to create<br>
a graphical host queue, as well as fetches data regarding the most recent thread in the Discussion studios.</span>
  <div class="divider" style="height: 1px;margin: 10px;"></div>
  <span>Q: How does this get all this data?</span>
  <span>A: Through Scratch's API! However, the API must be accessed via a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">CORS</a> proxy in order to add the necessary headers to fetch the info.</span>
  <div class="divider" style="height: 1px;margin: 10px;"></div>
  <span>Q: What proxy is used?</span>
  <span>A: My own hosted fork/instance of <a href="https://replit.com/@7ih/cors-anywhere" target="_blank">this one</a>.</span>
  <div class="divider" style="height: 1px;margin: 10px;"></div>
  <span>Q: Everything's blank, what's going on?</span>
  <span>A: The proxy is hosted on Replit. Repls go to sleep after a period of time after their last request.<br>
  I try to keep it online by sending it <a href="https://github.com/LegoManiac04/repl-keep-alive" target="_blank">periodic requests</a>, though they may get delayed causing the proxy to sleep.<br>
  Just reload the page in a few seconds. :]</span>
  <div class="divider" style="height: 1px;margin: 10px;"></div>
  <span>Q: Where can I see the source code?</span>
  <span>A: Everything is hosted on GitHub <a href="https://github.com/LegoManiac04/gaehivemanagers" target="_blank">here</a>.</span>
  
</div>
  
</template>