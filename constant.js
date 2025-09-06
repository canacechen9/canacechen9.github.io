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

// Create a function to generate footer contents for html
function printHTMLsfooter1(){
    let text = `
<!--Contact section-->
<div class="flex-container2"> <!--Create a flex container to align the 2 containers (inquiries & feedback and contact info) in the same row-->
    <!--Inquiries and Feedback-->
    <div class="card1">
        <h4>Inquiries & Feedback</h4>
        <!--Ref: https://lordicon.com/icons/wired/lineal/981-consultation-->
        <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
        <lord-icon
            src="https://cdn.lordicon.com/kjkiqtxg.json"
            trigger="loop"
            colors="outline:#121331,primary:#848484,secondary:#c69cf4,tertiary:#faefd1"
            style="width:80px;height:80px;display:inline-block;padding-top:30px;margin-right:20%">
        </lord-icon>
        <!--receive form data with email-->
        <!--Ref: https://www.youtube.com/watch?v=rt7AWExUk0Y-->
        <form action="https://formspree.io/f/xgebllvq" method="POST" id="form">
            <div class="container8">
                <!--Input fields (subject and guest contact)-->
                <input type="text" name="subject" placeholder="Subject" required>
                <div class="inputf2">
                    <input type="text" name="your_contact" placeholder="Your contact" required><br>
                </div>
                <!--Textarea (type content)-->
                <textarea name="YourInquiries&Feedback" placeholder="Your inquiries & feedback"></textarea><br>
                <!--Submission button-->
                <div class="btn mybtn2">
                    <button type="submit" name="submit">Submit</button>
                </div>
            </div>
        </form> 
    </div>
    <!--Contact info-->
    <div class="card2">
        <h4>Contact Me</h4>
        <!--Ref: https://lordicon.com/icons/wired/lineal/177-envelope-mail-send-->
        <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
        <lord-icon
            src="https://cdn.lordicon.com/gzmgulpl.json"
            trigger="loop"
            colors="outline:#e4e4e4,primary:#d4f49c,secondary:#107c91"
            style="width:80px;height:80px;display:inline-block;padding-top:30px;">
        </lord-icon>
        <div class="container9">
            <p>
                Email: canaceec@icloud.com<br>
                Instagram: canacechen9549<br>
                Discord: Canace #7547<br>
            </p>
        </div>
    </div>
</div>
<hr>
<br>
<!--Footer: copyright-->
<footer><strong>Copyright &copy;2025 Canace Chen</strong></footer>
    `;
    document.getElementById('myfooter').innerHTML = text;
}

function printHTMLsfooter(){
    let text = `
<!--Footer: copyright-->
<footer><strong>Copyright &copy;2025 Canace Chen</strong></footer>
    `;
    document.getElementById('simplefooter').innerHTML = text;
}


