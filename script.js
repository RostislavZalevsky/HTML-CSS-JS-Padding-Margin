var Text = document.getElementById("Text");
Text.onkeydown = ClearText;

var margintop = document.getElementById("margin-top");
var marginbottom = document.getElementById("margin-bottom");
var marginleft = document.getElementById("margin-left");
var marginright = document.getElementById("margin-right");

var bordertop = document.getElementById("border-top");
var borderbottom = document.getElementById("border-bottom");
var borderleft = document.getElementById("border-left");
var borderight = document.getElementById("border-right");

var paddingtop = document.getElementById("padding-top");
var paddingbottom = document.getElementById("padding-bottom");
var paddingleft = document.getElementById("padding-left");
var paddingright = document.getElementById("padding-right");

function ChangeProperty() {
    Text.style.margin =
        margintop.value  + "px " +
        marginright.value  + "px " +
        marginbottom.value  + "px " +
        marginleft.value  + "px";

    Text.style.borderTopWidth = bordertop.value + "px";
    Text.style.borderRightWidth = borderight.value + "px";
    Text.style.borderBottomWidth = borderbottom.value + "px";
    Text.style.borderLeftWidth = borderleft.value + "px";

    Text.style.padding =
        paddingtop.value + "px " +
        paddingright.value + "px " +
        paddingbottom.value + "px " +
        paddingleft.value + "px";
}

function ClearText() {
    Text.innerHTML = "";
    Text.onkeydown = null;
}