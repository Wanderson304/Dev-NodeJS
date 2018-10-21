
/*Arquivo para aplicar o JavaScript na calculadora*/

		/*Função para mostrar os números na tela da calculadora (textview)*/
		function insert(num){
			document.form.textview.value = document.form.textview.value+num
		}

		/*Função para mostrar o resutados dos valores inseridos na tela da calculadora (textview)*/
		function equal(){
			var exp = document.form.textview.value
			if(exp){
				document.form.textview.value = eval(exp)
			}
		}

		/*Função para limpar a tela da calculadora (textview)*/
		function clean(){
			document.form.textview.value = "";
		}

		/*Função para apagar o ultimo caracter digitado na tela(textview)*/
		function back(){
			var exp = document.form.textview.value;
			document.form.textview.value = exp.substring(0,exp.lenghth-1);
		}
	

	
	