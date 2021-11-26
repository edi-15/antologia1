var btnatras = document.getElementById('atras');

btnatras.addEventListener('click', ()=> {
    history.back(-1);
});



// btnatras.addEventListener('click', ()=> {
        function getAllGetParams() {
            var result = [];
            var parts = [];
        
            location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
              parts = item.split("=");
              if(parts[0]!=""){     
                result.push(parts);
              }
            });
        
            return result;
          }
          
          params = getAllGetParams();
        // var dened = document.getElementById('dened');
        
        // if(dened == null) {
        //     window.location.href = "index.html";
        // }
        
        
        for(var i in params){  
            var namepage = params[i][1];
            var sumar =++ namepage;
        if( params[i][0] === "p" && namepage) {
            const xd =-- namepage;
            console.log(xd);
            if(namepage < 7) {
            document.getElementById('npages').innerHTML=`Pagina ${xd} de 7`;
            //------------
            document.getElementById('avanzar').innerHTML=`<a style='text-decoration:none;border:none;' href="${sumar}.html?p=${sumar}">Avanzar</a>`;
          }
          else if(!namepage) {

          }
          else {
            document.getElementById('avanzar').innerText=`ESTA FUE LA ULTIMA PAGINA`;
          }

        }
        else {
            document.getElementById('avanzar').innerText=`NO ES POSIBLE AVANZAR`;
        }
    }
    //});
        
    

var opninfo = document.getElementById('btninfo');
var info = document.querySelector('.info');
var closeinfo = document.querySelector('.closeinfo');

opninfo.addEventListener('click', ()=> {
  info.classList.toggle('opn');
});

closeinfo.addEventListener('click', ()=> {
  info.classList.toggle('opn');
});