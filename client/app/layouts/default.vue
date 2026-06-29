<template>

<nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <router-link class="navbar-brand" :to="'/'">AltairNotes2</router-link>


    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li v-for="item in items" class="nav-item">
                <router-link class="nav-link" :to="item.to">{{ item.label }}</router-link>
            </li>
        </ul>
    </div>
</nav>

<div class="container-fluid mt-5 mb-5">
    <slot />
</div>


<footer class="bg-dark text-light mt-auto py-3">
    <div class="d-flex justify-content-between align-items-end container-fluid">
        <div>
            <h6 class="text-warning">Разработчики форума</h6>
            <p>Web-coder - Fronted</p>
            <p>w3b-c0d3r - Backend</p>
            <p>assassin-coder - Designer(drugs)</p>
            <p>hard-coder - FullStack</p>
        </div>
        <div>
            <h1 class="text-center">ALTAIR_NOTES_2</h1>
            <p class="text-center text-warning">&copy; 2026 Все права защищены</p>
        </div>
        <div>
            <h6 class="text-warning">контакты и прочее</h6>
            <p>Email: <a href="http://gmail.com">yasher18@bk.ru</a></p>
            <p>Telegran: <a href="http://telegram.com">@Yasheriza18</a></p>
            <p>Youtube: <a href="http://youtube.com">web-coder.tube</a></p>
            <p>GitHub: <a href="http://github.com">web-coder2</a></p>
        </div>
    </div>
</footer>

</template>

<script>

    export default {
        data() {
            return {
                items: [
                    { label: 'index', to: '/' },
                    { label: 'about', to: '/about' },
                    { label: 'notes', to: '/notes' },
                ]
            }
        }
    }

</script>