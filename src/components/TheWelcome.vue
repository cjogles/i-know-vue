<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Getting Started</template>
    This app will showcase my Vue.js skills for would be hiring managers and recruiters to get a better feel for what I can do.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling Used</template>

    This SPA uses
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. 
    <br>
    I will add externally linked projects that might use different Vue.js implementations and tooling as well.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem Described: for this app, and other projects</template>

    You will see within my projects different examples for utilizing Vue.js libraries and tools. For example:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>.
    I will also show <a href="https://vuejs.org/guide/extras/ways-of-using-vue.html" target="_blank" rel="noopener">different ways Vue.js can be used.</a><br>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Want me to work for you? Learn more 😊</template>
    <a href="https://www.linkedin.com/in/cjogles/" target="_blank" rel="noopener">Linkedin Profile</a>,<br>
    <a href="https://github.com/cjogles" target="_blank" rel="noopener">Github Profile</a>,<br>
    <a href="https://cjogles.github.io/work-website/" target="_blank" rel="noopener">Personal Work Portfolio</a>,<br>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    I appreciate you looking at my work. Looking forward to chatting with you.
  </WelcomeItem>
</template>
