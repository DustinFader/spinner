const spinnerArray = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ',
                       '\r|  ', '\r/  ', '\r-  ', '\r\\  ']
for (let i = 0; i < spinnerArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerArray[i])
  }, i * 200 + 100);
}