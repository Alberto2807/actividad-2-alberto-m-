input.onPinPressed(TouchPin.P0, function () {
    basic.showString("" + (input.temperature()))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.soundLevel()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
