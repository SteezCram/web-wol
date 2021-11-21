<template>
    <div class="relative" v-on-clickaway="close">
        <div @click="toggleMenu($event)">
            <slot name="activator"/>
        </div>

        <transition name="fade-small">
            <div v-show="menu" ref="menu" class="absolute">
                <slot/>
            </div>
        </transition>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';


export default {
    mixins: [clickaway],

    props: {
        top: {
            type: Boolean,
            default: false,
        },
        right: {
            type: Boolean,
            default: false,
        },

        x: {
            type: [Number, String],
            default: 0,
        },
        y: {
            type: [Number, String],
            default: 0,
        },
    },


    data: function() {
        return {
            menu: false
        }
    },


    methods:
    {
        /** Close the menu. */
        close: function()
        {
            if (!this.menu) {
                return;
            }

            this.menu = false;
        },

        /** Toggle the menu 
         * 
         * @param {Event} event - Click event of the activator to toggle the menu
         * 
        */
        toggleMenu: function(e)
        {
            this.menu = !this.menu;

            if (!this.menu) {
                return;
            }

            
            const bouding = e.target.getBoundingClientRect();

            const x = typeof this.x === 'string' ? parseInt(this.x) : this.x;
            const y = typeof this.y === 'string' ? parseInt(this.y) : this.y;

            this.top ? this.$refs.menu.style.bottom = `${bouding.height + y}px` : this.$refs.menu.style.top = `${bouding.height + y}px`;
            this.right ? this.$refs.menu.style.right = `${x}px` : this.$refs.menu.style.left = `${x}px`;
        }
    }
}
</script>