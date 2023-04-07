basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
let px = 0
let py = 0
basic.forever(function () {
    led.unplot(px, py)
    px = px + 1
    basic.pause(200)
    if (px >= 5) {
        px = 0
        py = py + 1
    }
})
