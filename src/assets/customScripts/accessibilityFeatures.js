let fontSizePercentage = 100;

function changeFontSize(number){
    fontSizePercentage = fontSizePercentage + number;
    let bodyElement = document.getElementsByTagName("body")[0];
    style = `font-size: ${fontSizePercentage}% !important;`;
    bodyElement.style.setProperty("font-size", `${fontSizePercentage}%`,"important");
}
