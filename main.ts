basic.forever(function () {
    pins.servoWritePin(AnalogPin.P8, 0)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P8, 180)
    basic.pause(2000)
})
