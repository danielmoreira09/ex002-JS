function verifica(){
    var anoAtual = new Date();
    var agora = anoAtual.getFullYear();
    var nasc = window.document.getElementById("nascimento");
    var res = window.document.querySelector('div#res');

    if(nasc.value.length == 0 || nasc.value > agora){
        window.alert('Ano de Nascimento informado está errado. Verifique e tente novamente!');
    }
    else{
        var idade = agora - Number(nasc.value);
        var fsex = window.document.getElementsByName('sexo');
        var genero = '';
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', '../_imagem/foto-bebe-m.png');
            }
            else if(idade < 21){
                img.setAttribute('src', '../_imagem/foto-jovem-m.png');
            }
            else if(idade < 50){
                img.setAttribute('src', '../_imagem/foto-adulto-m.png');
            }
            else{
                img.setAttribute('src', '../_imagem/foto-idoso-m.png');
            }
        }
        else if (fsex[1].checked){
            genero = "Mulher";
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', '../_imagem/foto-bebe-f.png');
            }
            else if(idade < 21){
                img.setAttribute('src', '../_imagem/foto-jovem-f.png');
            }
            else if(idade < 50){
                img.setAttribute('src', '../_imagem/foto-adulto-f.png');
            }
            else{
                img.setAttribute('src', '../_imagem/foto-idoso-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.</br></br>`
        res.appendChild(img);
    }
}