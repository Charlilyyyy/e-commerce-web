<template>
    <section class="header">
        <div class="wrapper">
            <header>
               <nav>
                  <div class="menu-icon">
                     <i class="fa fa-bars fa-2x"></i>
                  </div>
                  <div class="logo">
                    <a class="border-0 logo my-auto" href="/">CHARLIE SHOP DEMO</a>
                     
                  </div>
                  <!-- <button class="btn btn-primary">jk</button> -->
                  <div class="menu">
                     <ul >
                        <li><a class="fw-bold btn btn-warning" style="color:black" href="/login">Login</a></li>
                     </ul>
                  </div>
               </nav>
            </header>   
         </div>
    </section>
</template>

<script>



export default {
    name: 'Navbar'
}
</script>

<style scoped>
    /* #charlie-name{
        color: bisque;
        font-size: 100px;
        position: relative;
        animation-name: charlie;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

    @keyframes charlie{
        0% {
            color:blue;
            top: 10%;
            left: 35%;
        }
        25% {
            color: red;
            top: 15%;
            left: 40%;
        }
        50% {
            color:blue;
            top: 20%;
            left: 45%; 
        }
        75% {
            color: red;
            top: 25%;
            left: 40%;
        }
        100% {
            color: blue;
            top: 35%;
            left: 35%;
        }
    } */

    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
}

body {
      font-family: "Helvetica Neue",sans-serif;
      font-weight: lighter;
}



header {
      width: 100%;
      /* height: 85px; */
      /* background: url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg   ) no-repeat 50% 50%;
      background-size: cover; */
      /* background-color: rgba(0, 0, 0, 0.2); */
}

.content {
      width: 94%;
      margin: 4em auto;
      font-size: 20px;
      line-height: 30px;
      text-align: justify;
}

.logo {
        text-decoration: none;
        line-height: 60px;
        position: fixed;
        float: left;
        margin: 16px 46px;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 2px;
        animation-name: logo;
        animation-duration: 4s;
        animation-iteration-count: infinite;
}

@keyframes logo{
      0% {
            color:#7b3f00;
            /* top: 10%;
            left: 35%; */
        }
        25% {
            color: #f3e5ab;
            /* top: 15%;
            left: 40%; */
        }
        50% {
            color:#7b3f00;
            /* top: 20%;
            left: 45%;  */
        }
        75% {
            color: #f3e5ab;
            /* top: 25%;
            left: 40%; */
        }
        100% {
            color: #7b3f00;
            /* top: 35%;
            left: 35%; */
        }
}

nav {
      position: fixed;
      width: 100%;
      line-height: 60px;
}

nav ul {
      line-height: 60px;
      list-style: none;
      background: rgba(0, 0, 0, 0.3);
      overflow: hidden;
      color: #fff;
      padding: 0;
      text-align: right;
      margin: 0;
      padding-right: 40px;
      transition: 1s;
}

nav.black ul {
      background: #000;
}

nav ul li {
      display: inline-block;
      padding: 16px 40px;;
}

nav ul li a {
      text-decoration: none;
      color: #fff;
      font-size: 16px;
}

.menu-icon {
      line-height: 60px;
      width: 100%;
      background: #000;
      text-align: right;
      box-sizing: border-box;
      padding: 15px 24px;
      cursor: pointer;
      color: #fff;
      display: none;
}

@media(max-width: 786px) {

      .logo {
            position: fixed;
            top: 0;
            margin-top: 16px;
      }

      nav ul {
            max-height: 0px;
            background: #000;
      }

      nav.black ul {
            background: #000;
      }

      .showing {
            max-height: 34em;
      }

      nav ul li {
            box-sizing: border-box;
            width: 100%;
            padding: 24px;
            text-align: center;
      }

      .menu-icon {
            display: block;
      }

}

</style>