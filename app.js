function randColor () {
    let r = Math.floor(Math.random()*256);
    let g = 0;
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

let letters = document.querySelectorAll('.letter')

    console.log(letters);

    setInterval ( function () {
        for (letter of letters) {
            letter.style.color = randColor();
        }
    }, 1750)
