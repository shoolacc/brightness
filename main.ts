input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() + 10)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(led.brightness() - 10)
})
led.setBrightness(100)
basic.showLeds(`
    . . # . .
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    `)
