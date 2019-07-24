
<template>
    <footer>
        <hr>
        <div class="footer">
            <div class="container">
                <div class="content content1">
                <p> Built and Written by Vadini Agrawal</p>
                </div>
                <div class="content content2">
                <a href="https://www.twitter.com/@a_vadini" target="_blank"><img src="https://github.com/vadini-agrawal/image-repository/blob/master/images/twitter-icon.png?raw=true"  alt="Twitter Icon" style=" padding-right: 1rem;"/></a>
                <a href="https://www.vadiniagrawal.com" target="_blank"><img src="https://github.com/vadini-agrawal/image-repository/blob/master/images/website-cursor.png?raw=true"  alt="Website Icon" style=" padding-left: 1rem; padding-right: 1rem;"/></a>
                <a href="https://github.com/vadini-agrawal/social-impact-blog" target="_blank"><img src="https://github.com/vadini-agrawal/image-repository/blob/master/images/github-icon.png?raw=true"  alt="Github Icon" style=" padding-left: 1rem; "/></a>
                </div>
            </div> <br> <br> 
        </div> <br>
        <form class="subscribe" action="https://tinyletter.com/impactandintentions" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/impactandintentions', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
          Sign up to hear about new articles: <input class="form" type="text" style="width:140px" name="email" id="tlemail" /> &nbsp &nbsp
            <input type="hidden" value="1" name="embed"/><input class="submit" type="submit" value="Subscribe" /> &nbsp &nbsp powered by TinyLetter
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
        width: 65px;
        border: 1px solid #E77728;
        color: #E77728;
    }

    .submit:hover {
        height: 25px;
        width: 65px;
        border: 1px solid #E77728;
        background-color: #E77728;
        color: white;
    }
</style>
