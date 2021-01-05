# flato.js
Utility to flat any combination of arrays and objects.

<h3>How to use ?</h3>
<h4>Instllation:</h4>
<pre>npm i flato</pre>

<h4>Import using require</h4>
<pre>
  const flato = require("flato");
</pre>

<h4>Arguments:</h4>
<ul>
  <li>obj - unflattened object</li>
</ul>

<h4>Execution:</h4>
<pre>
  const flato = require("flato");
  let obj = {a: 1, b: {c:3, d:["hi", {e:8}]}};
  let flattenedObj = flato(obj);
</pre>