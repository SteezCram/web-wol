<template>
    <x-flex class="mt-5" :justify="placement">
        <slot/>
    </x-flex>
</template>

<script>
export default {
    props: {
        placement: {
            type: String,
            default: 'end'
        }
    }
}
</script>
