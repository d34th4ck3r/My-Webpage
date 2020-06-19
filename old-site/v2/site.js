activeStyle = "color: #AAA;"
deActivatedStyle = "color: white;"
stringBuffer = []
newHTML = ""

function updateNodeDesc() {
    nodeDesc = document.getElementById("node-desc");
    nodeDesc.innerHTML = newHTML;
    newHTML += " " + stringBuffer.shift();
    if(stringBuffer.length)
        setTimeout("updateNodeDesc()", 32);
}


function writeNodeFor(element) {
    nodeHeading = document.getElementById("node-heading");
    nodeDesc = document.getElementById("node-desc");

    elementTitle = document.getElementById(element.id + "-title");
    elementDesc = document.getElementById(element.id + "-desc");

    nodeHeading.innerHTML = elementTitle.innerHTML;
    stringBuffer = elementDesc.innerHTML.split(" ");
    nodeDesc.innerHTML = "";
    newHTML = stringBuffer.shift();
    updateNodeDesc();
}

function setCurrentNode(currentElement) {
    nodeBtns = document.getElementsByClassName('node-btn');
    for(i=0; i< nodeBtns.length; i++) {
        nodeBtns[i].setAttribute('style', deActivatedStyle);
    }
    currentElement.setAttribute('style', activeStyle);
    writeNodeFor(currentElement);
}

onload = function() {
    aboutMe = document.getElementById("about-me");
    setCurrentNode(aboutMe);
}