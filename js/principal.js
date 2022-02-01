var banners=
	["Do lixo ao luxo!", "Reaproveitar é a proveitar!"];
var bannerAtual = 0;

Function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector ('h2#mensagem') .textContent = 
		banners[bannerAtual];
}
setInterval(trocaBanner, 1000);