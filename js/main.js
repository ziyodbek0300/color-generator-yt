const colorInput = document.querySelector('input[type="color"]'),
    body = document.querySelector('body'),
    colorCode = document.querySelector(".colorCode");

colorInput.oninput = () => {
    let color = colorInput.value;
    body.style.background = color;
    colorCode.innerHTML = color;
}

colorCode.nextElementSibling.onclick = () => {
    navigator.clipboard.writeText(colorInput.value);
    colorCode.nextElementSibling.classList.remove('bi-clipboard');
    colorCode.nextElementSibling.classList.add('bi-clipboard-check');
    setTimeout(() => {
        colorCode.nextElementSibling.classList.add('bi-clipboard');
        colorCode.nextElementSibling.classList.remove('bi-clipboard-check');
    }, 3000);
}