
<template>
    <footer>
        <hr>
        <div class="footer">
            <div class="container">
                <div class="content content1">
                <p> Built and Written by Vadini Agrawal</p>
                </div>
                <div class="content content2">
                <a href="https://www.twitter.com/@a_vadini" target="_blank"><img src="../public/twitter-icon.png"  alt="Twitter Icon" style=" padding-right: 4%;"/></a>
                <a href="https://www.vadiniagrawal.com" target="_blank"><img src="../public/website-cursor.png"  alt="Website Icon" style=" padding-right: 4%;"/></a>
                <a href="https://github.com/vadini-agrawal/social-impact-blog" target="_blank"><img src="../public/github-icon.png"  alt="Github Icon" /></a>
                </div>
            </div> <br> <br> 
        </div> <br>
        <form class="subscribe" action="https://tinyletter.com/impactandintentions" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/impactandintentions', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
          Sign up to hear about new articles: <input class="form" type="text" style="width:140px" name="email" id="tlemail" /> &nbsp &nbsp
            <input type="hidden" value="1" name="embed"/><input class="submit" type="submit" value="Subscribe " /> &nbsp &nbsp powered by TinyLetter
            </p>
        </form> 
    </footer>
</template>


<style>
    .container{
        width:100%;
        color: grey;
    }
    .content{
        float:left;
    }
    .content1{
        width: 50%;
    }
    .content2{
        width: 50%;
        text-align: right;
        padding-top: 1rem;
    }
    .form {
        height: 1rem;
        width: 4rem;
    }
    .subscribe {
        color: grey;
        padding-top: 2rem;
        text-align: center;
    }
    .link {
        color: grey;
    }
    .link-hover {
        text-decoration: none;
    }
    .submit {
        height: 25px;
        width: 70px;
        text-align: center;
        border: 1px solid #E77728;
        color: white !important;
        background-color: #E77728;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        opacity: 1;
    }

    .submit:hover {
        height: 25px;
        width: 70px;
        text-align: center;
        border: 1px solid #E77728;
        color: #E77728 !important;
        background-color: white;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        opacity: 1;
    }
</style>
