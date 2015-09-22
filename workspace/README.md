     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Hi there! Welcome to Cloud9 IDE!

To get you started, we included a small hello world application.

1) Open the hello-world.html file

2) Click on the Preview button to open a live preview pane

3) Make some changes to the file, save, watch the preview, and have fun!

Happy coding!
The Cloud9 IDE team


## Support & Documentation

Visit http://docs.c9.io for documentation, or http://support.c9.io for support.
To watch some training videos, visit http://www.youtube.com/user/c9ide

<div id="mainContent">
<p id="helloText">?</p>
<button id="clickButton" class="buttonStyle">click me</button>
</div>
<script> 
var myButton = document.getElementById("clickButton");
var myText = document.getElementById("helloText");

myButton.addEventListener('click', doSomething, false)

function doSomething() {
	myText.textContent = "hello, world!";
}
</script>