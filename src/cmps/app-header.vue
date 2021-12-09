<template>
  <section class="app-header flex space-between align-center">
    <img class="cart" :src="require('@/assets/img/cart.png')" alt="cart" />
    <p class="branch">סניפים</p>
     <a class="phone" href="tel:+0548937502">054-8937502</a>

    <nav>
      <router-link to="/">
        <img class="logo" :src="require('@/assets/img/logo.png')" alt="logo" />
      </router-link>
    </nav>
  </section>
</template>