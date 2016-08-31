// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp


<?php

  header( "Content-Type: text/javascript" );
  header( "Expires: ".gmdate( "D, d M Y H:i:s", time() + 86400 * 365 )." GMT" );
  header( "Cache-Control: max-age=".( 86400*365 ) );

?>


function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
  logCRP();
});
