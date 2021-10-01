<template>
  <div id="app">
    <a><router-link to="/order">Order</router-link></a>
    |
    <a><router-link to="/check">Check</router-link></a>
    |
    <a><router-link to="/">Moralis</router-link></a>
    <br />
    <router-view></router-view>
  </div>
</template>
