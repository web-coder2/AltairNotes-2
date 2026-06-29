<template>
  <div class="page-wrapper">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <router-link class="navbar-brand" :to="'/'">AltairNotes2</router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li v-for="item in items" class="nav-item" :key="item.to">
            <router-link class="nav-link" :to="item.to">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="main-content container-fluid mt-5 mb-5">
      <slot />
    </div>

    <footer class="bg-dark text-light py-3 cool-footer">
      <div class="d-flex justify-content-between align-items-end container-fluid">
        <div class="col-sm-2">
          <h6 class="text-warning">Разработчики форума</h6>
          <span>Web-coder - Fronted</span><br>
          <span>w3b-c0d3r - Backend</span><br>
          <span>assassin-coder - Designer(drugs)</span><br>
          <span>hard-coder - FullStack</span>
        </div>
        <div class="col-sm-4 offset-sm-2">
          <h1 class="text-center">ALTAIR_NOTES_2</h1>
          <p class="text-center text-warning">&copy; 2026 Все права защищены</p>
        </div>
        <div class="col-sm-4 offset-sm-2">
          <h6 class="text-warning">контакты и прочее</h6>
          <span>Email: <a href="http://gmail.com">yasher18@bk.ru</a></span><br>
          <span>Telegran: <a href="http://telegram.com">@Yasheriza18</a></span><br>
          <span>Youtube: <a href="http://youtube.com">web-coder.tube</a></span><br>
          <span>GitHub: <a href="http://github.com">web-coder2</a></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>

.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex: 1;
}

body {
    background-image: url('/main.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

</style>

<script>
export default {
  data() {
    return {
      items: [
        { label: 'index', to: '/' },
        { label: 'about', to: '/about' },
        { label: 'notes', to: '/notes' },
      ],
    }
  },
}
</script>