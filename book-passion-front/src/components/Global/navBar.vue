<template>
    <nav>
      <div class="nav-wrapper">
        <RouterLink to="/" class="brand-logo"><img src="/pile-de-livres.webp" /></RouterLink>
        <!-- <a href="#" class="brand-logo"><img src="/LolPictures/masterLol.webp" /></a> -->
        <p class="hamburger-logo" for="checked">≡</p>
        <input type="checkbox" name="checked" id="checked" />
        <ul id="nav-mobile" class="option">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/books">Books</router-link>
          </li>
          <li>
            <router-link to="/userPage">My Books</router-link>
          </li>
          <li>
            <a href="#" class="login">
              <RouterLink to="/login" id="router-link">
                <p>Login</p>
                <CaUserAvatarFilledAlt class="icon" />
              </RouterLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { CaUserAvatarFilledAlt } from '@kalimahapps/vue-icons'
  import { RouterLink } from 'vue-router'
  </script>
  
  <script>
  let oldScrollY = window.scrollY
  
  window.addEventListener('scroll', () => {
    let navbar = document.querySelector('nav')
  
    if (window.scrollY > oldScrollY) {
      navbar.style.top = `-${navbar.offsetHeight}px`
      navbar.style.transition = '0.3s'
      // console.log('down')
    } else {
      navbar.style.top = '0'
      navbar.style.transition = '0.3s'
  
      // console.log('up')
    }
  
    oldScrollY = window.scrollY
  })
  </script>
  <style scoped>
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    /* background-color: #8d86c9; */
  }
  
  .hamburger-logo {
    font-size: 50px;
    display: none;
  }

  #router-link {
    display: flex;
    align-items: center;
  }
  
  .brand-logo img {
    width: 75px;
    height: 75px;
    margin: 20px;
  }
  
  .option {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: kanit;
  }
  
  .option li {
    margin: 0 10px;
  }
  
  .option a {
    color: white;
    text-decoration: none;
  }
  
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    backdrop-filter: blur(20px);
  }
  
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    margin: 0 3rem;
  }
  
  .login p {
    font-size: 20px;
    display: none;
  }
  
  #checked {
    display: none;
  }
  
  @media (max-width: 768px) {
    .hamburger-logo {
      display: block;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  
    .option {
      /* display: none; */
      height: 0;
      font-size: 0;
      flex-direction: column;
      position: absolute;
      top: 100px;
      left: 0;
      width: 100%;
      background-color: black;
    }
  
    .login p {
      font-size: 0;
    }
  
    .login {
      font-size: 0;
    }
  
    .option li {
      margin: 10px 0;
    }
  
    #checked:checked + .option,
    #checked:checked + .option .login p {
      /* display: flex; */
      font-size: 20px;
      height: calc(100vh - 100px);
      transition: 0.25s;
    }
  
    #checked:not(:checked) + .option {
      height: 0;
      font-size: 0;
      transition: 0.25s;
    }
  
    .option a {
      color: white;
      text-decoration: none;
      padding: 10px 0;
      display: block;
      text-align: center;
    }
  
    .option.active {
      display: flex;
    }
  
    .login p {
      display: block;
    }
  
    .login .icon {
      display: none;
    }
  }
  </style>
  