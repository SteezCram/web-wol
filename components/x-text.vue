<template>
    <p v-if="type === 'text' && !sub" class="text-base leading-5">
        <slot/>
    </p>
    <p v-else-if="type === 'text' && sub" class="text-xs leading-3">
        <slot/>
    </p>

    <p v-else-if="type === 'head' && !sub" class="text-xl leading-6">
        <slot/>
    </p>
    <p v-else-if="type === 'head' && sub" class="text-base leading-5">
        <slot/>
    </p>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text',
        },
        sub: {
            type: Boolean,
            default: false,
        },
    }
}
</script>
