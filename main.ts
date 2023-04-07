input.onButtonPressed(Button.A, function () {
    entradas += 1
    basic.showString("" + (entradas))
})
input.onButtonPressed(Button.B, function () {
    entradas += -1
    basic.showString("" + (entradas))
})
let entradas = 0
entradas = 0
