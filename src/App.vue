<template>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
}

*,
::before,
::after {
  background-repeat: no-repeat;
  box-sizing: inherit;
}

* {
  padding: 0;
  margin: 0;
}

button,
input {
  background-color: transparent;
  border-style: none;
}
</style>
