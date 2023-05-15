radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("z", receivedNumber)
})
basic.showString("REC")
radio.setGroup(255)
serial.writeLine("Acceleration")
basic.forever(function () {
	
})
