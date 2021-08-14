<template>
  <div id="app">
    <a><router-link to="/">Order</router-link></a>
    |
    <a><router-link to="/check">Check</router-link></a>
    <br />
    <router-view></router-view>
  </div>
</template>