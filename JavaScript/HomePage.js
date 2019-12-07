var ComandaItem = [];
var ComandaIndiceItem = [];
var ComandaTodosItens = []; 
var i = 1;
var k = 0;
var Larg = 5; 
var j = 0;
var DiaHj = new Date().getDay();
var TotalComanda = 0;
var z = 0;
const QtdMinRemoveTudo = 2;

// getElements

const btnRemoveTudo = document.getElementById("btnRemoveTudo");
const btnFinalizar = document.getElementById("btnFinalizar");
const divCobreInfo = document.getElementById("CobreInfo");
const div_Info = document.getElementById("InfoProduto");

class Pizza{
	constructor(Sabor,Preco,Ingredientes,PrecoPromocao){
		this.Sabor = Sabor;
		this.Preco = Preco;
		this.Ingredientes = Ingredientes;
		this.PrecoPromocao = PrecoPromocao;
	}
}

class Bebida{
	constructor(Sabor,Preco,Quantidade){
		this.Sabor = Sabor;
		this.Preco = Preco;
		this.Quantidade = Quantidade;
	}
}
var Ind =[
		new Pizza('Italiana','25.50','Muçarela de Búfala, Manjericão, Oréano, Molho Pesto, Azeitonas.','18.90'),
		new Pizza('do Chef','24.90','Muçarela, Lombo, Catupiry, Cebola, Azeitonas.','22.50'),
		new Pizza('Muçarela','23.50','Molho de tomate, Queijo Muçarela, Tomate, Azeitonas.','17.90'),
		new Pizza('Calabressa','24.50','Calabresa, Cebola, Tomate, Muçarela, Azeitona.','20.50'),
		new Pizza('À Moda da Casa','23.50','Molho de Tomate, Azeitonas Pretas, Manjericãao, Oréano, Muçarela, Calabresa, Massa Crocante.','21.00'),
		new Pizza('Pepperoni','39.90','Peperoni, Muçarela, Azeitonas, Orégano.','24.90'),
		new Pizza('Atum','27.50','Molho  de Tomate, Atum, Muçarela, Azeitonas Verdes.','23.90'),
		new Pizza('Argentina','36.00','Muçarela, Catupiry, Quartirolo, Orégano, Queijo Parmesão.','24.00'),
		new Pizza('Califórnia','28.00','Muçarela, Abacaxis, Morangos, Kiwis, Pêssegos, Uvas, Cerejas, Ameixas.','23.50'),
		new Pizza('Brócolis','23.00','Molho de Tomate, Brócolis, Muçarela, Bacon, Azeitonas Pretas, Alho Torrado.','18.50'),
		new Pizza('Frango','21.90','Molho, Tomate, Frango Desfiado, Catupiry.','18.90'),
		new Pizza('Portuguesa','27.90','Muçarela, Presunto, Ervilha, Milho, Palmito, Cebola, Ovo, Catupiry, Tomate, Azeitonas Pretas','24.00'),
	];

//var Ind = [Pizza1,Pizza2,Pizza3,Pizza4,Pizza5,Pizza6,Pizza7,Pizza8,Pizza9,Pizza10,Pizza11,Pizza12];

/*var Bebida1 = new Bebida('Coca Cola','4.00','350 ml');
var Bebida2 = new Bebida('Guaraná Antártica','4.00','350 ml');
var Bebida3 = new Bebida('Pepsi','4.00','350 ml');
var Bebida4 = new Bebida('Fanta Laranja','4.00');
var Bebida5 = new Bebida('Fanta Uva','4.00','350 ml');
var Bebida6 = new Bebida('Chá de Tangerina','4.50','350 ml');
var Bebida7 = new Bebida('Chá de Hibisco','4.50','350 ml');
var Bebida8 = new Bebida('Chá de Limão','4.50','350 ml');
var Bebida9 = new Bebida('Suco de Morango','7.00','700 ml');
var Bebida10 = new Bebida('Suco de Abacaxi','7.00','700 ml');
var Bebida11 = new Bebida('Suco de Laranja','7.00','700 ml');
var Bebida12 = new Bebida('Suco Verde','7.00','700 ml');*/

var Bebidas = [
		new Bebida('Coca Cola','4.00','350 ml'),
		new Bebida('Guaraná Antártica','4.00','350 ml'),
		new Bebida('Pepsi','4.00','350 ml'),
		new Bebida('Fanta Laranja','4.00'),
		new Bebida('Fanta Uva','4.00','350 ml'),
		new Bebida('Chá de Tangerina','4.50','350 ml'),
		new Bebida('Chá de Hibisco','4.50','350 ml'),
		new Bebida('Chá de Limão','4.50','350 ml'),
		new Bebida('Suco de Morango','7.00','700 ml'),
		new Bebida('Suco de Abacaxi','7.00','700 ml'),
		new Bebida('Suco de Laranja','7.00','700 ml'),
		new Bebida('Suco Verde','7.00','700 ml'),
		/*Bebida1,Bebida2,Bebida3,Bebida4,Bebida5,Bebida6,Bebida7,Bebida8,Bebida9,Bebida10,Bebida11,Bebida12*/
	];


window.onload=function(){
	document.getElementById("Pizzas").scrollLeft = 0;
	document.getElementById("Bebidas").scrollLeft = 0;
	var Data = new Date();
	var Dia = Data.getDay();
	CarregaImgPromocao();
	for(var k=0;k<Ind.length;k++){
		CriaPizzas(k + 1);
	}
	j=0;
	for(var k=0;k<Bebidas.length;k++){
		CriaBebidas(k);
	}
	VerificaPromocao();
	j=0;
}

function VerificaPromocao(){
	
	for(var o=0;o<Ind.length;o++){
		if(Ind[o].Sabor==Ind[DiaHj].Sabor){
			break;
		}
	}
	o++;
	Ind[o-1].Preco = Ind[DiaHj].PrecoPromocao;
	document.getElementById("Promocao"+o).style.opacity = "1";
	document.getElementById("PrecoPizza"+o).innerHTML = "R$ "+Ind[o-1].Preco;
}

function MostraInfo(num){
	var InfoIcon = document.getElementById("Info");
	
	if(num==0){
		InfoIcon.style.opacity="1";
		InfoIcon.style.zIndex="10";
	}
	else{
		InfoIcon.style.opacity="0";
		InfoIcon.style.zIndex="-1";
	}
	
}

function CarregaImgPromocao(){
	//var Dia = new Date().getDay();
	var DiaSemana;
	/*switch(DiaHj){
		case 0:DiaSemana = "Domingo"; break;
		case 1:DiaSemana = "Segunda"; break;
		case 2:DiaSemana = "Terça"; break;
		case 3:DiaSemana = "Quarta"; break;
		case 4:DiaSemana = "Quinta"; break;
		case 5:DiaSemana = "Sexta"; break;
		case 6:DiaSemana = "Sábado"; break;
	}*/
	
	const diasPorExtenso = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
	DiaSemana = diasPorExtenso[DiaHj];
	
	
	document.getElementById("ImgPromocao").src="Images/PizzasPromoção/"+DiaSemana+".jpg";
	document.getElementById("txtTitle2").innerHTML = "Pizza "+Ind[DiaHj].Sabor;
	document.getElementById("txtTitle3").innerHTML = "Apenas R$ "+Ind[DiaHj].PrecoPromocao;
	
	
}

function EscondeComanda(){
	var Comanda = document.getElementById("Comanda");
	var Comanda2 = document.getElementById("IconEscondeComanda");
	if(i==0){
		Comanda.style.bottom = "-16vw";
		Comanda2.className="fas fa-arrow-circle-up";
		i=1;
	}
	else{
		Comanda.style.bottom = "0vw";
		Comanda2.className="fas fa-arrow-circle-down";
		i=0;
	}
	
}



function CriaPizzas(id){
	var novadiv = document.createElement('div');
		novadiv.setAttribute("id",'Pizza'+(id));
		novadiv.setAttribute("class","Item");
		novadiv.setAttribute("onmouseover","MostraPreco("+(id)+",'Pizza')");
		novadiv.setAttribute("onmouseout","EscondePreco("+(id)+",'Pizza')");
		novadiv.setAttribute("onclick","AdicionaItemComanda("+j+",0)");
		novadiv.innerHTML="<img id=ImgPizza"+(id)+" src='Images/Pizza"+(id)+".jpg'/><div id='ContainerPrecoPizza"+(id)+"' class='ContainerPreco'><p id='PrecoPizza"+(id)+"' class='Preco'>R$ "+Ind[j].Preco+"</p></div><p id='PizzaSabor' class='Sabor'>"+Ind[j].Sabor+"</p><i id='InfoPizzaIcon'class='fas fa-info-circle InfoItemIcon' onclick='MostraInfoProduto("+j+",0);'></i><i id='AddPizzaCartIcon' class='fas fa-cart-plus AddItemCartIcon' <!--onclick='AdicionaItemComanda("+j+",0)'--></i><div id='Promocao"+(id)+"'class='DivPromocao'><p class='txtDivPromocao'>Promoção</p></div>";
		if(id==Pizzas.length){
			novadiv.setAttribute("style","margin-right:5vw");
		}
		if(k!=0){
			document.getElementById("Pizza"+(id)+"").appendChild(novadiv);
		}
		else{
			document.getElementById("Pizzas").appendChild(novadiv);
		}
		j++;
}

function CriaBebidas(id){
	var novadiv = document.createElement('div');
		novadiv.setAttribute("id",'Bebida'+(j+1));
		novadiv.setAttribute("class","Item");
		novadiv.setAttribute("onmouseover","MostraPreco("+(j+1)+",'Bebida')");
		novadiv.setAttribute("onmouseout","EscondePreco("+(j+1)+",'Bebida')");
		novadiv.setAttribute("onclick","AdicionaItemComanda("+j+",1)");
		novadiv.innerHTML="<img id=ImgBebida"+(j+1)+" src='Images/Bebida"+(j+1)+".png'/><div id='ContainerPrecoBebida"+(j+1)+"' class='ContainerPreco'><p id='PrecoBebida"+(j+1)+"' class='Preco'>"+Bebidas[j].Preco+"</p></div><p id='BebidaSabor"+(j+1)+"' class='Sabor'>"+Bebidas[j].Sabor+"</p><i id='InfoBebidaIcon' class='fas fa-info-circle InfoItemIcon' onclick='MostraInfoProduto("+j+",1);'></i><i id='AddBebidaCartIcon' class='fas fa-cart-plus AddItemCartIcon' <!--onclick='AdicionaItemComanda("+j+",1)'--></i><div id='Promocao"+(j+1)+"'class='DivPromocao DivPromocaoBebida'><p class='txtDivPromocao'>Promoção</p></div>";
		if(j+1==Pizzas.length){
			novadiv.setAttribute("style","margin-right:5vw");
		}
		if(k!=0){
			document.getElementById("Bebida"+(j+1)+"").appendChild(novadiv);
		}
		else{
			document.getElementById("Bebidas").appendChild(novadiv);
		}
		j++;
}

function MostraPreco(Num,Produto){
	if(Produto=="Pizza"){
		var DivPizza = document.getElementById("ContainerPrecoPizza"+Num).style.opacity = "0.8"; 
	}
	else if(Produto=="Bebida"){
		var DivPizza = document.getElementById("ContainerPrecoBebida"+Num).style.opacity = "0.8"; 
	}
}

function EscondePreco(Num,Produto){
	if(Produto=="Pizza"){
		var DivBebida = document.getElementById("ContainerPrecoPizza"+Num).style.opacity = "0"; 
	}
	else if(Produto=="Bebida"){
		var DivBebida = document.getElementById("ContainerPrecoBebida"+Num).style.opacity = "0"; 
	}
}

function AdicionaItemComanda(IndiceVetor,Produto){
	ComandaItem.push(Produto);
	ComandaIndiceItem.push(IndiceVetor);
	if(Produto==0){
		TotalComanda += parseFloat(Ind[IndiceVetor].Preco);
		ComandaTodosItens.push(Ind[IndiceVetor].Sabor);
	}
	else{
		TotalComanda += parseFloat(Bebidas[IndiceVetor].Preco);
		ComandaTodosItens.push(Bebidas[IndiceVetor].Sabor);
	}
	ComandaTodosItens.push(Produto);
	
	if(j!=0){document.getElementById("Item"+j).style.marginRight = "0vw";}
	CriaItemcomanda(IndiceVetor,Produto);
	AlteraTotalComanda();
	j++;
	document.getElementById("Comanda").style.bottom = "0vw";
	document.getElementById("IconEscondeComanda").className = "fas fa-arrow-circle-down";
	i=0;
	VerificaRemoveTudo();
	VerificaFinaliza();
	//alert(ComandaTodosItens[j-1]);
}

function VerificaRemoveTudo(){
	if(ComandaIndiceItem.length>QtdMinRemoveTudo){
		btnRemoveTudo.style.zIndex = "10";
		btnRemoveTudo.style.opacity = "1";
	}
	else{
		btnRemoveTudo.style.zIndex = "-1";
		btnRemoveTudo.style.opacity = "0";
	}
}

function VerificaFinaliza(){
	if(ComandaIndiceItem.length>0){
		btnFinalizar.style.zIndex = "10";
		btnFinalizar.style.opacity = "1";
	}
	else{
		btnFinalizar.style.zIndex = "-1";
		btnFinalizar.style.opacity = "0";
	}
}

function AlteraTotalComanda(){
	document.getElementById("txtComanda2").innerHTML = "Total: R$ "+TotalComanda.toFixed(2);
}

function CriaItemcomanda(IndiceVetor,Produto){
	if(Produto==0){
		var novadiv = document.createElement('div');
		novadiv.setAttribute("id",'Item'+(j+1));
		novadiv.setAttribute("style","margin-right:5vw");
		novadiv.setAttribute("class","ItemComanda");
		novadiv.setAttribute("onmouseover","MostraPrecoItem("+(j+1)+",0)");
		novadiv.setAttribute("onmouseout","EscondePrecoItem("+(j+1)+",0)");
		novadiv.setAttribute("onclick","RemoveItemComanda("+(IndiceVetor)+","+Produto+","+j+")");
		novadiv.innerHTML ="<img src='Images/Pizza"+(IndiceVetor+1)+".jpg' id='ImgItem"+(j+1)+"'/><div id='ContainerPrecoItem"+(j+1)+"' class='ContainerPreco'><p id='PrecoItem"+(j+1)+"' class='PrecoComanda'>R$ "+Ind[IndiceVetor].Preco+"</p></div><p id='ItemSabor"+(j+1)+"' class='Sabor'>"+Ind[IndiceVetor].Sabor+"</p><div id='ContainerRemoveItemIcon"+(j+1)+"' class='ContainerRemoveItemIcon'><i <!--onclick='RemoveItemComanda("+(IndiceVetor)+","+Produto+","+j+");'-- class='fas fa-minus-circle RemoveItemIcon'></i></div>";
		if(z!=0){
			document.getElementById("Item"+(j+1)+"").appendChild(novadiv);
		}
		else{
			document.getElementById("ItensComanda").appendChild(novadiv);
		}
	}
	else{
		var novadiv = document.createElement('div');
		novadiv.setAttribute("id",'Item'+(j+1));
		novadiv.setAttribute("style","margin-right:5vw");
		novadiv.setAttribute("class","ItemComanda");
		novadiv.setAttribute("onmouseover","MostraPrecoItem("+(j+1)+",1)");
		novadiv.setAttribute("onmouseout","EscondePrecoItem("+(j+1)+",1)");
		novadiv.setAttribute("onclick","RemoveItemComanda("+(IndiceVetor)+","+Produto+","+j+")");
		novadiv.innerHTML ="<img src='Images/Bebida"+(IndiceVetor+1)+".png' id='ImgItem"+(j+1)+"'/><div id='ContainerPrecoItem"+(j+1)+"' class='ContainerPreco'><p id='PrecoItem"+(j+1)+"' class='PrecoComanda'>R$ "+Bebidas[IndiceVetor].Preco+"</p></div><p id='ItemSabor"+(j+1)+"' class='Sabor'>"+Bebidas[IndiceVetor].Sabor+"</p><div id='ContainerRemoveItemIcon"+(j+1)+"' class='ContainerRemoveItemIcon'><i <!--onclick='RemoveItemComanda("+(IndiceVetor)+","+Produto+","+j+");'-- class='fas fa-minus-circle RemoveItemIcon'></i></div>";
		if(z!=0){
			document.getElementById("Item"+(j+1)+"").appendChild(novadiv);
		}
		else{
			document.getElementById("ItensComanda").appendChild(novadiv);
		}
	}
}

function MostraPrecoItem(IndiceVetor,Produto){
	if(Produto==0){
		document.getElementById("ContainerPrecoItem"+(IndiceVetor)).style.opacity = "0.8";
	}
	else{
		document.getElementById("ContainerPrecoItem"+(IndiceVetor)).style.opacity = "0.8";
	}
}

function EscondePrecoItem(IndiceVetor,Produto){
	if(Produto==0){
		document.getElementById("ContainerPrecoItem"+(IndiceVetor)).style.opacity = "0";
	}
	else{
		document.getElementById("ContainerPrecoItem"+(IndiceVetor)).style.opacity = "0";
	}
}

function RemoveItemComanda(IndiceVetorPreco,Produto,IndiceVetorComanda){
	ComandaTodosItens.splice(IndiceVetorComanda,1);
	ComandaItem.splice(IndiceVetorComanda,1);
	ComandaIndiceItem.splice(IndiceVetorComanda,1);
	//AlteraTotalComanda();
	document.getElementById("ItensComanda").innerHTML="";
	var Num = 0;
	j=0;
	z=0;
	Larg = 5;
	if(Produto==0){
			TotalComanda -= parseFloat(Ind[IndiceVetorPreco].Preco);
		}
		else{
			TotalComanda -=  parseFloat(Bebidas[IndiceVetorPreco].Preco);
		}
	for(var Num = 0;Num<ComandaItem.length;Num++){
		
		if(j!=0){document.getElementById("Item"+j).style.marginRight = "0vw";}
		CriaItemcomanda(ComandaIndiceItem[Num],ComandaItem[Num]);
		j++;
		i=0;
	}
	AlteraTotalComanda();
	VerificaRemoveTudo();
	VerificaFinaliza();
	if(ComandaIndiceItem.length==0){EscondeComanda();}
	
}

function RemoveTudoComanda(){
	var Resposta = confirm("Deseja mesmo remover todos os itens da sua comanda?");
	if(Resposta){
		j=0;
		z=0;
		Larg = 5;
		TotalComanda=0;
		AlteraTotalComanda();
		document.getElementById("ItensComanda").innerHTML="";
		ComandaTodosItens = [];
		ComandaIndiceItem = [];
		ComandaItem = [];
		if(i==0){setTimeout(EscondeComanda,1000);}
		VerificaRemoveTudo();
		VerificaFinaliza();
	}
}

function MostraInfoProduto(IndiceVetorPreco,Produto){
	divCobreInfo.style.opacity = "0.8";
	divCobreInfo.style.zIndex = "1003";	
	document.getElementById("InfoProduto").style.opacity = "1";
	document.getElementById("InfoProduto").style.zIndex = "1004";
	window.scrollTo(0,0);
	if(Produto==0){
		document.getElementById("ImgProduto").src = "Images/Pizza"+(IndiceVetorPreco+1)+".jpg";
		document.getElementById("SaborPizzaInfo").innerHTML = Ind[IndiceVetorPreco].Sabor;
		document.getElementById("PrecoPizzaInfo").innerHTML = "Preço : R$ "+Ind[IndiceVetorPreco].Preco;
		document.getElementById("IngredientesPizzaInfo").innerHTML ="Ingredientes : "+ Ind[IndiceVetorPreco].Ingredientes;
	}
	else{
		document.getElementById("ImgProduto").src = "Images/Bebida"+(IndiceVetorPreco+1)+".png";
		document.getElementById("SaborPizzaInfo").innerHTML = Bebidas[IndiceVetorPreco].Sabor;
		document.getElementById("PrecoPizzaInfo").innerHTML = "Preço : R$ "+Bebidas[IndiceVetorPreco].Preco;
		document.getElementById("IngredientesPizzaInfo").innerHTML = "Quantidade : "+Bebidas[IndiceVetorPreco].Quantidade;
	}
}

function FechaInfoProduto(){
	if(document.getElementById("InfoProduto").style.opacity !=0){
		
		var animation = div_Info.animate([
		  {opacity:'1'},
		  {opacity:'0'}
		], 500);
		animation.addEventListener('finish', function() {
		  div_Info.style.opacity="0";
		  
		});
		
		var animation = divCobreInfo.animate([
		  {opacity:'0.5'},
		  {opacity:'0'}
		], 500);
		animation.addEventListener('finish', function() {
		  divCobreInfo.style.opacity="0";
		  
		});
		
		myVar = setTimeout(Joga_Tras, 500);
	}
	
}

function Joga_Tras(){
	div_Info.style.zIndex="-1";
	divCobreInfo.style.zIndex="-1";
}

function FinalizaPedido(){
	//var EnviarComanda = JSON.stringfy(ComandaTodosItens);
	alert("Iremos aprender em um futuro não tão distante!");
		j=0;
		z=0;
		Larg = 5;
		TotalComanda=0;
		AlteraTotalComanda();
		document.getElementById("ItensComanda").innerHTML="";
		ComandaTodosItens = [];
		ComandaIndiceItem = [];
		ComandaItem = [];
		if(i==0){setTimeout(EscondeComanda,1000);}
		VerificaRemoveTudo();
		VerificaFinaliza();
}


