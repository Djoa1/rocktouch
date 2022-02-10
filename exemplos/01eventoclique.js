function newButton(text, callback){
    //chama o body
    const $body = document.querySelector('body')
    //chama a criação de elemento - button
    const $button = document.createElement('button')
    //alterar o texto do elemento
    $button.textContent = text;
    //
    callback($button)
    $body.insertAdjacentElement('afterend', $button)

    return $button
}

newButton('Login', (button) => {
    button.style.cssText = `
    font-size: 40px;
    text-transform: uppercase;
    `;

    button.addEventListener('click', () => {
        console.log('oi!')
    })
})

newButton('signup', (button) => {
    button.style.cssText = `
    font-size: 60px;
    color: red;
    `
})