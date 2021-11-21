<template>
    <article :class="`${glass ? 'backdrop-filter glass' : 'bg-gray-100 dark:bg-gray-900'} rounded-lg`">
        <img v-if="image.length > 0" class="rounded-t-lg" :src="image">

        <div :class="`${dense ? 'px-2 py-3 sm:px-3' : 'px-4 py-5 sm:px-6'}`">
            <slot/>
        </div>
    </article>
</template>

<script>
export default {
    props:
    {
        dense: {
            type: Boolean,
            default: false
        },
        glass: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            default: '',
        },
    },
}
</script>