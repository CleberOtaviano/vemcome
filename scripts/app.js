'use strict';

let lista = [];

function obterLista() {
    let url = 'https://us-central1-vemcome-1337.cloudfunctions.net/api';

    // var firebaseHeaders = new Headers({
    //     "Content-Type": "text/plain",
    //     "Content-Length": content.length.toString(),
    //     "X-Custom-Header": "ProcessThisImmediately",
    // });

    // var inicio = {
    //     method: 'GET',
    //     headers: firebaseHeaders,
    //     mode: 'cors',
    //     cache: 'default'
    // }
    return fetch(url + '/obterLista')
        .then((response) => {
            return response.json();
        })
        .catch(() => {
            return null;
        });
}

function carregarListaAmigos() {
    obterLista()
        .then((response) => {
            lista = response;

            var ul = document.getElementById('lista');

            for (let item of lista) {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode('✔️ ' + item.nome));
                ul.appendChild(li);
            }
        });
}

function init() {
    // alert('MEU DEUS')
    carregarListaAmigos();

}

init();