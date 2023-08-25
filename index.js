let data = [{
    id: generateUUID(),
    name: "Ana Britto",
    handle: "ana_britto",

},
{
    id: generateUUID(),
    name: "Ricardo Costa",
    handle: "ricardocosta",
},
{
    id: generateUUID(),
    name: "Tiago Montana",
    handle: "tiagomontana",
}];

data = JSON.parse(localStorage.getItem('pessoasIniciais')) || data
localStorage.setItem('pessoasIniciais', JSON.stringify(data))


function addContact() {
    localStorage.removeItem('currentItem')
    window.location.href = "createcontact.html"
}
function searchContact() {
    var input, filter, ul, li, i;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    filter.length <= 0 ? document.getElementById("showing-contacts").style.display = "none" : document.getElementById("showing-contacts").style.display = "";
    ul = document.getElementById("contact-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].textContent.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function createPessoa(pessoa) {
    var nomectt = pessoa.name
    var handlectt = pessoa.handle

    var contactlist = document.getElementById('contact-list');

    var divcttadd = document.createElement('div');
    divcttadd.className = 'divcttadd'

    divcttadd.setAttribute("id", pessoa.id);

    var p1ctt = document.createElement('p');
    var p2ctt = document.createElement('p');
    p1ctt.innerHTML = nomectt;
    p2ctt.innerHTML = handlectt;

    contactlist.appendChild(divcttadd);
    divcttadd.appendChild(p1ctt);
    divcttadd.appendChild(p2ctt);

    var img1 = document.createElement("IMG");
    img1.src = "icons/caneta.svg";
    img1.style.width = "30px";
    img1.style.height = "30px";
    img1.style.cursor = "pointer"
    divcttadd.appendChild(img1);
    img1.onclick = () => {
        localStorage.setItem('currentItem', JSON.stringify(pessoa))
        window.location.href = 'createcontact.html'
    };


    var img2 = document.createElement("IMG");
    img2.src = "icons/cancel.svg";
    img2.style.width = "30px";
    img2.style.height = "30px";
    img2.style.cursor = "pointer"
    divcttadd.appendChild(img2);
    img2.onclick = () => {
        let data = JSON.parse(localStorage.getItem(PI))
        data = data.filter(el => {
            return el.id != pessoa.id
        })
        localStorage.setItem(PI, JSON.stringify(data))
        window.location.reload()
    };
}
function createAll(data) {
    data.forEach((pessoa) => {
        const existePessoa = document.getElementById(pessoa.id)
        if (!existePessoa) {
            createPessoa(pessoa)
        }
    })
}

function search() {
    const pesquisa = document.getElementById('searchInputTxt').value
    let dados = JSON.parse(localStorage.getItem(PI))
    dados = dados.filter(el => {
        return el.name.toLowerCase().includes(pesquisa.toLowerCase())
    })
    const div=document.getElementById('contact-list')
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }
    createAll(dados)
}

const enterPesq = document.getElementById('searchInputTxt')
enterPesq.addEventListener('keyup', (event) => {
    search()
});