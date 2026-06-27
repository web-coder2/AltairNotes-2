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

<div class="container-fluid mt-5">
    <slot />
</div>


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