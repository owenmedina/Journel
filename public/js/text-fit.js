const title = document.querySelector(".title");
const text = title.textContent;

function getTextLines(element) {
  const elementHeight = element.offsetHeight;
  const lineHeight =
    parseFloat(element.style.lineHeight) ||
    document.defaultView
      .getComputedStyle(element)
      .getPropertyValue("lineHeight");
  console.log("elementHeight", elementHeight);
  console.log(
    "lineHeight",
    document.defaultView
      .getComputedStyle(element)
      .getPropertyValue("lineHeight")
  );

  return Math.round(elementHeight / lineHeight);
}

/** Gets the size information given by amount of text and font-size
 * @param {string} text text whose information is to be returned
 * @param {number} fontSize font-size of the text at render
 * @returns {number} size information of the text at render given a font-size
 */
function getTextInfo(text, fontSize = "12px") {
  // Create container for text
  const textDiv = document.createElement("div");

  // Set styles
  const textFitCalculationClass = "tf-calculation";
  textDiv.classList.add([textFitCalculationClass]);
  textDiv.style.fontSize = fontSize;

  // Set the text of the div to the text
  textDiv.textContent = text;

  // Render
  document.body.appendChild(textDiv);

  // Compute dimensions
  const textDivRendered = document.querySelector(`.${textFitCalculationClass}`);
  const width = textDivRendered.offsetWidth;
  const height = textDivRendered.offsetHeight;

  // Compute number of lines
  //   const lines = getTextLines(textDiv);

  // Remove from document
  textDiv.parentNode.removeChild(textDiv);

  return { width, height };
}

/** Computes the decreased font size for use with element.style.fontSize
 * @param {string} fontSize the value of element.style.fontSize
 * @returns the new font-size which can be used in CSS
 */
function getDecreasedFontSize(fontSize) {
  const fontSizeCopy = fontSize;
  const numberRegex = /\d+(?:\.\d+)?/g;
  let fontSizeNumber = parseFloat(fontSizeCopy.match(numberRegex)[0]);
  const fontSizeUnits = fontSizeCopy.replace(numberRegex, "");
  if (fontSizeNumber > 50) {
    return `${fontSizeNumber - 20}${fontSizeUnits}`;
  }
  if (fontSizeNumber > 25) {
    return `${fontSizeNumber - 5}${fontSizeUnits}`;
  }
  if (fontSizeNumber < 1) {
    return `${fontSizeNumber - 0.25}${fontSizeUnits}`;
  }
  return `${fontSizeNumber - 1}${fontSizeUnits}`;
}

function fitText(element, text, maxLines = 1) {
  const elementWidth = element.offsetWidth;
  const elementHeight = element.offsetHeight;
  const fontSize = window
    .getComputedStyle(element)
    .getPropertyValue("font-size");

  // Get dimensions needed by text
  let dimensions = getTextInfo(text, fontSize);

  // Compute how much effective width it needs at its current font-size
  //   let effectiveWidth = dimensions.lines * dimensions.width;

  // Keep decreasing font-size until content fits
  let newFontSize = fontSize;
  //   while (elementHeight < dimensions.height || elementWidth < dimensions.width) {
  //     newFontSize = getDecreasedFontSize(fontSize);
  //     dimensions = getTextInfo(text, newFontSize);
  //   }
  console.log("heights", elementHeight, dimensions.height);
  console.log("widths", elementWidth, dimensions.width);
  console.log("font size", fontSize);
  const graceSpace = elementWidth / 4;
  while (
    (elementHeight / dimensions.height) * elementWidth <
    dimensions.width + graceSpace
  ) {
    newFontSize = getDecreasedFontSize(newFontSize);
    dimensions = getTextInfo(text, newFontSize);
    console.log("newFontSize2", newFontSize);
    console.log("heights2", elementHeight, dimensions.height);
    console.log("widths2", elementWidth, dimensions.width);
  }

  element.style.fontSize = newFontSize;
}

fitText(title, text);
