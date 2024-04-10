<template>
  <div class="about">
    <h2>Scroll down and look through these projects, <br> and you might just want to</h2>
      <iframe 
        src="https://giphy.com/embed/Tr5eaF2MxvieY" 
        width="300px" 
        height="300px"
        frameBorder="0"
      >
      </iframe>
  </div>
</template>

<style>
h2 {
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
}

.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
