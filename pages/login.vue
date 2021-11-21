<template>
    <div class="container m-5 max-w-lg">
        <x-card title="Login" subtitle="I know it's annoying, but it's at least secure... I guess?" icon="log-in">
            <x-card-header>
                <x-card-title>
                    <x-flex align="center">
                        <x-icon class="mr-1">icon-log-in</x-icon>
                        Login
                    </x-flex>
                </x-card-title>

                <x-card-subtitle>I know it's annoying, but it's at least secure... I guess?</x-card-subtitle>
            </x-card-header>

            <x-form ref="form" :onsubmit="login">
                <x-text-input v-model="email" class="mb-1" type="email" text="Email" icon-prepend="account_circle" required
                    :rules="emailRules">
                </x-text-input>

                <x-text-input v-model="password" :type="passwordVisible ? 'text' : 'password'" class="mb-2" text="Password" icon-prepend="lock_outline" :icon-append="passwordVisible ? 'eye' : 'eye-off'" required
                    :rules="passwordRules" @click:append="passwordVisible = !passwordVisible">
                </x-text-input>

                <x-checkbox v-model="keepMeLogged" color-offset="gray-900">
                    Keep me logged in
                </x-checkbox>

                <x-card-actions>
                    <x-btn type="submit" class="ml-auto" color="indigo" color-offset="gray-900">
                        <x-icon class="mr-1">icon-log-in</x-icon>
                        Login
                    </x-btn>
                </x-card-actions>
            </x-form>
        </x-card>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            email: '',
            keepMeLogged: false,
            password: '',
            passwordVisible: false,

            emailRules: [
                value => !!value || 'Email is required',
                value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Email is invalid',
            ],
            passwordRules: [
                value => !!value || 'Password is required',
            ],
        }
    },


    async beforeMount()
    {
        const user = this.$cookies.get('user');

        if (user === undefined) {
            return;
        }

        // Auto login procedure
        this.email = user.email;
        this.keepMeLogged = true;
        this.password = user.password;
        await this.login(true);
    },


    methods:
    {
        /** Log in the user. */
        login: async function(isAutoLogin = false)
        {
            const result = (await this.$axios.get(`/api/user/${this.email}&${this.password}${isAutoLogin ? '&true' : ''}`)).data;

            switch (result.code)
            {
                case 1:
                    console.error('Internal error');
                    break;

                case 100:
                    console.error('No account');
                    break;

                case 101:
                    console.error("Password don't match");
                    break;

                case 0:
                    if (this.keepMeLogged)
                    {
                        this.$cookies.set('user', {
                            email: this.email,
                            password: result.data.password,
                        },
                        {
                            path: '/',
                            maxAge: 60 * 60 * 24 * 7
                        });
                    }

                    this.$store.commit('user/login', result.data);
                    this.$router.push('/');
                    return;
            }

            // In case of login error, reset the password and the keep me logged checkbox
            this.keepMeLogged = false;
            this.password = '';
        },
    },
}
</script>
