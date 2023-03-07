var cel = document.getElementById('cel')
var fah = document.getElementById('fah')

cel.addEventListener('click', function () {
    let c = this.value;
    let f = (c * 9 / 5) + 32
    fah.value = f
})

fah.addEventListener('click', function () {
    let f = fah.value
    c = (f - 32) * 5 / 9
    cel.value = c
})