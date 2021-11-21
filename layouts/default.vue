<template>
    <x-app>
        <x-shell>
            <template slot="menu">
                <x-flex>
                    <p class="text-lg">WEB-WOL</p>

                    <x-menu v-if="$store.state.user.id > 0" class="ml-auto" right y="5">
                        <template slot="activator">
                            <x-btn icon size="2xl" color="white">
                                <x-icon>icon-account_circle</x-icon>
                            </x-btn>
                        </template>

                        <x-card dense>
                            <x-card-header>
                                <x-flex>
                                    <x-icon class="text-5xl mr-1">icon-account_circle</x-icon>
                                    
                                    <x-flex col>
                                        <x-card-title>{{ $store.state.user.name }}</x-card-title>
                                        <x-card-subtitle>{{ $store.state.user.email }}</x-card-subtitle>
                                    </x-flex>
                                </x-flex>
                            </x-card-header>

                            <x-card-actions>
                                <x-btn color="red" color-offset="gray-900" @click="logout">
                                    <x-icon class="mr-1">icon-log-out</x-icon>
                                    Disconnect
                                </x-btn>
                            </x-card-actions>
                        </x-card>
                    </x-menu>
                </x-flex>
            </template>

            <div class="flex justify-center w-screen">
                <Nuxt/>
            </div>
        </x-shell>
    </x-app>
</template>

<script>
export default {
    beforeMount() {
        if (this.$store.state.user.id === 0) {
            this.$router.push('/login');
        }
    },


    methods: {
        /** Log out the user. */
        logout() {
            this.$cookies.remove('user');
            this.$store.commit('user/logout');

            this.$router.push('/login');
        }
    }
}
</script>
