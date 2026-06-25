<template>

    <Menubar :model="items">
        <template #start>
            <h3>AltairNotes2</h3>
        </template>
        <template #item="{ item, props, hasSubmenu }">
            <router-link v-slot="{ href, navigate }" :to="item.to" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span>{{ item.label }}</span>
                </a>
            </router-link>
        </template>
        <template #end>
            <div class="flex items-center gap-2">
                <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
            </div>
        </template>
    </Menubar>

    <slot />
</template>

<script>

import Menubar from 'primevue/menubar'

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