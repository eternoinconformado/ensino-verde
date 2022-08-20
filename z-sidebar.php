<div id="sidebar">
	<div class="inner">
	
			<p style="border-bottom:none; text-align:center; text-indent:0; margin:0"><a href="https://escolaverde.org/" target="_blank" title="Programa Escola Verde (PEV)"><img src="images/logo-pev.png" style="width:230px" alt="Programa Escola Verde (PEV)"></a></p>
	
		<!-- Notícias do PEV -->
		<header class="major">
			<h2>Notícias do PEV</h2>
		</header>
				
		<div id='rss-wrap'>
		<div id='rss-container' class=''></div>
		
		<div id='rss-header'>
		<a id='rss-title' href='https://escolaverde.org/site/?page_id=27' target='_blank'>Clique aqui para acessar todas as notícias</a>
		</div>		
		
		</div>

		<script>
		function load_rss(){
		  var num = 1;
		 $("#rss-container").html("");
		 $("#rss-container").rss("https://escolaverde.org/site/?feed=rss2", {
			limit: 5,
			ssl: true,
			dateFormat: 'DD/MM/YYYY',
			entryTemplate: 
			"<a class='entry_link' href='{url}' target='_blank'>\
			  <div class='entry'>\
				<div class='entry_date'>\
				  Publicado em {date}\
				  <span class='entry_by'>por {author}</span>\
				</div>\
				<div class='entry_img'>\
				  {teaserImage}\
				</div>\
				<div class='entry_title'>\
				  {title}\
				</div>\
				<div class='entry_details'>{shortBody}...</div>\
			  </div>\
			</a>",
			error: function(error){
			  console.log(error);
			},
		  },function(){
			$(".entry").each(function(index){
			  if(index%2!=0) $(this).addClass("entry2"); // Fix this later with css
			});
		  });
		}

		$(function(){
		  load_rss();
		});
		</script>	

		<!-- Contato -->
			<section>
				<header class="major">
					<h2>Contato com o PEV</h2>
				</header>
				<ul class="contact">
					<li class="icon solid fa-envelope"><a href="mailto:escolaverde@univasf.edu.br">escolaverde@univasf.edu.br</a></li>					
					<li class="icon solid fa-envelope"><a href="mailto:programaescolaverde@gmail.com">programaescolaverde@gmail.com</a></li>
					<li class="icon solid fa-phone"><a href="tel:07421027660">(74) 2102-7660</a></li>
					<li class="icon solid fa-home">Universidade Federal do Vale do São Francisco | Av. Antônio Carlos Magalhães, 510, Country Club | Bloco de Colegiados - 2º andar - Sala Verde | CEP: 48.902-300 | Juazeiro/BA</li>
				</ul>
			</section>

		<!-- Rodapé -->
			<footer id="footer">
				<p class="copyright"><strong style="color:var(--cor-ev)"><a href="index.php">ENSINO VERDE (2022)</a></strong><br>Modelo: <a href="https://html5up.net/editorial">HTML5 UP - Editorial</a> | Desenvolvido por:<br><br><b>Matheus Passos</b><br><i>(graduando em Engenharia da Computação)</i><br><br><b>Thalisson Castro</b><br><i>(graduando em Engenharia da Computação)</i><br><br><b>Vítor Fagundes</b><br><i>(graduando em Psicologia)</i><br><br><b>Prof. Paulo Roberto Ramos</b><br><i>(orientador)</i>
				</p>
				<hr style="border-width:2px"/>
				<p style="text-align:center; padding-top:5px; text-indent:0">
				<a href="http://portais.univasf.edu.br" target="_blank" title="UNIVASF"><img src="images/univasf.png" alt="UNIVASF" style="width:75%"/></a>
				</p>
			</footer>

	</div>