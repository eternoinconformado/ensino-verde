<script src="assets/js/browser.min.js"></script>
<script src="assets/js/breakpoints.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/moment.min.js"></script>
<script src="assets/js/jquery.rss.min.js"></script>

<script>
function responsivo() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

<script>
$(document).ready(function(){ $(window).scroll(function(){ if ($(this).scrollTop() > 100) {$('#scroll').fadeIn(); } else { $('#scroll').fadeOut(); } }); $('#scroll').click(function(){ $("html, body").animate({ scrollTop: 0 }, 600); return false; }); });
</script>

<a href='#' id='scroll' title='Voltar ao Topo'>Topo<span/></a>