<!DOCTYPE HTML>
<html>
	<head>
		<!-- MUDAR NOME DA PÁGINA --> <title>Matemática do Lixo - Ensino Verde</title>
		<?php include("z-config.php") ?>
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Main -->
					<div id="main">
						<div class="inner">

							<!-- Header -->
								<?php include("z-header.php"); ?>

							<!-- Content -->
								<section>
									<header class="main">
										<h1>Quando lixo tua cidade produz?</h1>
										<h5>Por: Vítor Fagundes | Núcleo Temático de Educação Ambiental Interdisciplinar, 2021.2</h5>
									</header>

									<span class="image main"><img src="images/matematica-do-lixo.jpg" alt="Lixão a céu aberto" /></span>

									<p>Vamos fazer o cálculo para saber quanto lixo é produzido na tua cidade? Normalmente, uma pessoa produz em média um quilo e meio de resíduo doméstico por dia. Selecione, abaixo, o lugar de teu interesse e descubra a quantidade aproximada de lixo produzido diariamente e em um ano.</p>
									
									<form>
										<label for="uf">UF:</label>
										<select class="custom-select" id="estado" name="estado">
										<option></option>
										</select>
										
										<label for="cidade" style="padding-top:20px">Cidade:</label>
										<select class="custom-select" disabled id="cidade" name="cidade" value="">
										<option>Primeiro, selecione um estado...</option>
										</select>			
									</form>		
									
									<div id="results" style="display:none; border:1px solid #bbb; background:#f8f8f8; padding:20px; margin-top:30px"></div>	

									<hr class="major" />

									<h2>Referências:</h2>						
									<p><small><i>SANTOS, Cristina. E para o lixo, tudo ou nada?. <b>Ciência Hoje das Crianças</b>, Rio de Janeiro, ano 28, n. 274, pp. 2-5, dez. 2015.</i></small></p>
								
								</section>

						</div>
					</div>

				<!-- Sidebar -->
				<?php include("z-sidebar.php"); ?>

			</div>

		<!-- Scripts -->
				<?php include("z-scripts.php"); ?>
	
<script>
$.getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados/', {id: 10, }, function (json) {
	
		json.sort((a, b) => a.nome.localeCompare(b.nome))
        var options = '<option value="">Selecione um estado...</option>';
 
        for (var i = 0; i < json.length; i++) {
            options += '<option data-id="' + json[i].id + '" value="' + json[i].nome + '" >' + json[i].nome + '</option>';
        }
 
        $("select[name='estado']").html(options);
 
    });
 
 
$("select[name='estado']").change(function () {

	if ($(this).val()) {
		$.getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+$(this).find("option:selected").attr('data-id')+'/municipios', {id: $(this).find("option:selected").attr('data-id')}, function (json) {

			var options = '<option value="">Selecione uma cidade...</option>';

			for (var i = 0; i < json.length; i++) {
				options += '<option value="' + json[i].id + '" >' + json[i].nome + '</option>';
			}

			$("select[name='cidade']").html(options);
			document.getElementById("cidade").removeAttribute("disabled");

		});

	} else {

		$("select[name='cidade']").html('<option value="">Primeiro, selecione um estado...</option>');
		document.getElementById("cidade").setAttribute("disabled", "disabled"); 
	}

});    

$("select[name='cidade']").change(function () {

	$.getJSON('https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2021/variaveis/9324?localidades=N6['+this.value+']', function (json) {
		var resultadosMun = json[0].resultados[0].series[0]
		var nomeMun = resultadosMun.localidade.nome
		var popMun = resultadosMun.serie[2021]
		var lixoDia = parseInt(popMun * 1.5)
		var lixoAno = lixoDia * 365
		
		
		output = '<span>Local: <b>'+nomeMun+'</b></span><br><span>População aproximada: <b>'+popMun.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' habitantes</b></span><br><br><span><i>Quantidade estimada de lixo produzido:</i><br> Em apenas um único dia: <b>'+lixoDia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' kg/dia</b></span><br>Em 1 ano: <b>'+lixoAno.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' kg/ano</b></span><br><br><p style="text-align:center">Colocar os Cinco Erres da Sustentabilidade em ação ajudaria muito a reduzir essa quantidade enorme de lixo. <a href="cinco-erres-da-sustentabilidade.php" target="_blank"><br>Clique aqui para saber mais a respeito.</a></p>';
		$('#results').html(output);
		$('#results').show()

	});	
	
});
</script>

	</body>
</html>