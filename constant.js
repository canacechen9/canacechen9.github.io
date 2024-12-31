// Create a function to generate head content for html
function printHTMLhead(){
    let text = `
<link rel="stylesheet" href="style.css"> <!--link to css-->     
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<meta name="author" content="Canace Chen">
    `;
    document.head.innerHTML = text;
}

// Create a function to generate top navigation content for individual work html
function printHTMLtopnav(){
    let text = `
<!--<h1>CANACE CHEN: Home</h1>-->
<!--Ref: https://www.youtube.com/watch?v=bk3Y4heVdFs-->
<h1><a class="hometitle" href="index.html">CANACE CHEN</a></h1>
<input type="checkbox" id="menu-option">
<label for="menu-option">Menu</label>

<nav class="menu">
    <ul>
        <li><a href="about.html">About +</a>
            <ul>
                <li><a href="Resume.pdf">Résumé</a></li> <!--Most of the times it is the easiest to just have a pdf of the resume-->
            </ul>
        </li>
        <li><a href="work.html">Work</a>
            <ul>
                <li><a href="Resume.pdf">Portfolio</a></li> 
            </ul>
        </li>
        <li id="contactl"><a href="#myfooter">Contact</a></li> <!--link to conntact section using tag-->
    </ul>
</nav>
    `;
    document.getElementById('topnav').innerHTML = text;
}

function removeContactLink(){
    document.querySelector("#contactl").remove();
}

// Create a function to generate platform links for html
function printHTMLplinks(){
    let text = `
<p>
    <a href="https://git.arts.ac.uk/21020295"><i class="bx bxl-github github"></i></a>
</p>
<p>
    <a href="https://www.linkedin.com/in/canace-chen-225b8726b/"><i class='bx bxl-linkedin-square'></i></a>
</p>
<p>
    <a href="mailto:c.chen0320213@arts.ac.uk"><i class='bx bx-envelope'></i></a>
</p>  
    `;
    document.getElementById('plinks').innerHTML = text;
}

// Create a function to generate simple footer content for html
function printHTMLsfooter(){
    let text = `
<hr>
<footer><strong>Copyright &copy;2024 Canace Chen</strong></footer>
    `;
    document.getElementById('simplefooter').innerHTML = text;
}

