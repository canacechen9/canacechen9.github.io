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
<!--Ref: https://www.youtube.com/watch?v=bk3Y4heVdFs-->
<a href="index.html" class="nav-item name-link">Canace Chen</a>
<div class="nav-item toggle-container">
    <button id="view-toggle" class="nav-item">Grid</button>
</div>

<div class="right-nav">
    <a href="Resume.pdf" class="nav-item resume-link">Résumé</a>
    <a href="info.html" class="nav-item info-link">Info</a>
</div>
    `;
    document.getElementById('topnav').innerHTML = text;
}

// Create a function to generate top navigation content for individual work html
function printHTMLprojectnav(){
    let text = `
<!--Ref: https://www.youtube.com/watch?v=bk3Y4heVdFs-->
<a href="index.html" class="nav-item name-link">Canace Chen</a>

<div class="right-nav">
    <a href="#" onclick="history.back(); return false;" class="nav-item back-link">Back</a>
</div>
    `;
    document.getElementById('projectnav').innerHTML = text;
}

// Create a function to generate top navigation content for category html
function printHTMLcatenav(){
    let text = `
<!--Ref: https://www.youtube.com/watch?v=bk3Y4heVdFs-->
<a href="index.html" class="nav-item name-link">Canace Chen</a>
<div class="nav-item toggle-container">
    <button id="view-toggle" class="nav-item">Grid</button>
</div>

<div class="right-group">
    <a href="#" onclick="history.back(); return false;" class="nav-item back-link">Back</a>
    <div class="info-stack">
        <a href="info.html" class="nav-item info-link">Info</a>
        <a href="Resume.pdf" class="nav-item resume-link">Résumé</a>
    </div>
</div>
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

function printHTMLmyfooter(){
    let text = `
<p>Copyright &copy;2026 Canace Chen</p>
    `;
    document.getElementById('myfooter').innerHTML = text;
}

