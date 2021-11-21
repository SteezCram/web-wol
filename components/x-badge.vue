<template>
    <span :class="`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${color}-100 dark:bg-${color}-900 text-${color}-800 dark:text-${color}-100`">
        <slot/>
    </span>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: undefined,
        },
    }
}
</script>
