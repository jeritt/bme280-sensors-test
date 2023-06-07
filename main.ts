input.onButtonPressed(Button.A, function () {
    serial.writeValue("Temp (C)", BME280.temperature(BME280_T.T_C))
    serial.writeValue("RH (%)", BME280.humidity())
    serial.writeValue("Dew Point", BME280.Dewpoint())
    serial.writeValue("Pressure (hPa)", BME280.pressure(BME280_P.hPa))
})
