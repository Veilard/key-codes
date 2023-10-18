const insert = document.getElementById('insert')

window.addEventListener('keypress', (e) => {
    insert.innerHTML = `
    <div class="key">
    ${e.key === ' ' ? 'Space' : e.key}
    <small>event.key</small>
</div>

<div class="key key-code">
    ${e.keyCode}
    <small>event.keyCode</small>
</div>

<div class="key code">
    ${e.code}
    <small>event.code </small>
</div>`

})