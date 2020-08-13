

function remove() {
    while (document.getElementsByClassName('my_propaganda')[0]) {
        document.getElementsByClassName('my_propaganda')[0].remove();

    }
    console.log("removido ad");
}

setTimeout(() => { remove(); }, 4000);
