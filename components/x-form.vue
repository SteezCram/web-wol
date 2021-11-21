<template>
    <form ref="form" :name="name" novalidate="true" @submit="validate($event)">
        <slot/>
    </form>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
        },
        onsubmit: {
            type: [Function, Promise],
            default: () => {},
        },
    },


    methods:
    {
        /** Validate all the input in the form. */
        validate: function(e)
        {
            const inputs = this.$el.querySelectorAll('input');
            let canContinue = true;
            
            for (const x of inputs) {
                if (x.checkValidity() === false) {
                    canContinue = false;
                }
            }

            if (canContinue) {
                this.onsubmit();
            }

            e.preventDefault();
        }
    }
}
</script>
