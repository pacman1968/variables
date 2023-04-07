input.onButtonPressed(Button.A, function () {
    entradas += 1
    basic.showString("" + (entradas))
})
input.onGesture(Gesture.Shake, function () {
    entradas = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    entradas += -1
    basic.showString("" + (entradas))
})
let entradas = 0
entradas = 0
