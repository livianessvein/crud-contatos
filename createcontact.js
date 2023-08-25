const currentItem=JSON.parse(localStorage.getItem('currentItem'))
    var btnadd = document.getElementById('btnadd')
    btnadd.value=currentItem?'EDIT CONTACT':'ADD CONTACT'
    
    function edit() {
        var nome = document.getElementById('name').value;
        var handle = document.getElementById('handle').value;
        const pessoa = { id:generateUUID(),name:nome, handle }
        
        const dados= JSON.parse(localStorage.getItem('pessoasIniciais'))
        const index=dados.findIndex(el=>el.id==currentItem.id)
        dados[index]=pessoa
        
        localStorage.setItem('pessoasIniciais',JSON.stringify(dados))
        window.location.href = 'index.html'
    }
    function add() {
        var nome = document.getElementById('name').value;
        var handle = document.getElementById('handle').value;
        const pessoa = { id:generateUUID(),name:nome, handle }
        const dados= JSON.parse(localStorage.getItem('pessoasIniciais'))
        dados.push(pessoa)
        localStorage.setItem('pessoasIniciais',JSON.stringify(dados))
        window.location.href = 'index.html'
    }

    btnadd.onclick = currentItem?edit:add