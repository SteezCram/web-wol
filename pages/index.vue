<template>
    <x-grid class="m-5" container cols="1" sm-cols="1" md-cols="2" lg-cols="3">
        <template v-for="x in devices">
            <x-card :title="x.name" :status-color="status_color(x.status)" :status-text="status_text(x.status)" :icon="type_icon(x.type)" :key="x.id">
                <x-card-header>
                    <x-card-title>
                        <x-icon class="mr-1">icon-{{ type_icon(x.type) }}</x-icon>

                        {{ x.name }}
                    </x-card-title>
                </x-card-header>
                
                <x-card-subtitle class="mb-2">{{ x.remote_type }} credentials</x-card-subtitle>
                
                <x-text-input v-model="x.remote_login" class="mb-1" text="Login" icon-prepend="account_circle" readonly></x-text-input>

                <x-text-input v-model="x.remote_password" text="Password" icon-prepend="lock_outline" :icon-append="passwordVisible ? 'eye' : 'eye-off'" :type="passwordVisible ? 'text' : 'password'" readonly
                    @click:append="passwordVisible = !passwordVisible"></x-text-input>

                <x-card-actions>
                    <x-btn class="ml-auto" color="green" color-offset="gray-900" @click="device_start(x.id)" v-if="x.status === 1 || x.status === -1">
                        <x-icon class="mr-1">icon-play</x-icon>
                        Start
                    </x-btn>

                    <x-btn class="ml-auto" color="red" color-offset="gray-900" v-else>
                        <x-icon class="mr-1">icon-pause1</x-icon>
                        Stop
                    </x-btn>
                </x-card-actions>
            </x-card>
        </template>
    </x-grid>
</template>

<script>
export default {
    data: function() {
        return {
            devices: [],

            passwordVisible: false,
        }
    },


    async fetch() {
        if (this.$store.state.user.id === 0) {
            return;
        }

        const result = (await this.$axios.get(`/api/device/${this.$store.state.user.id}/${this.$store.state.user.email}&${this.$store.state.user.password}`)).data;
        this.devices = result.data;
    },


    methods:
    {
        /** Start a device.
         * 
         * @param {number} id - Id of the device to start
         * 
        */
        device_start: async function(id)
        {
            const result = (await this.$axios.post(`/api/device/${id}/start`, {
                email: this.$store.state.user.email,
                password: this.$store.state.user.password,
            })).data;

            console.error(result);
        },

        /** Get the color for the status.
         * 
         * @param {number} status - Status of the device
         * 
        */
        status_color: function(status)
        {
            switch (status) {
                case -1:
                    return '';

                case 0:
                    return 'red';

                case 1:
                    return 'green';
            }
        },

        /** Get the text for the status.
         * 
         * @param {number} status - Status of the device
         * 
        */
        status_text: function(status)
        {
            switch (status) {
                case -1:
                    return '';

                case 0:
                    return 'Online';

                case 1:
                    return 'Offline';
            }
        },

        /** Get the icon for the type.
         * 
         * @param {number} type - Type of the device
         * 
        */
        type_icon: function(type)
        {
            switch (type) {
                case 1:
                    return 'ubuntu';

                case 2:
                    return 'apple';

                case 4:
                    return 'windows';
            }
        }
    }
}
</script>
