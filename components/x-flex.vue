<template>
    <div :class="`flex flex-${col ? reverse ? 'col-reverse' : 'col' : reverse ? 'row-reverse' : 'row'} flex-${wrap ? 'wrap' : 'nowrap'}
        justify-${center ? 'center' : justify} items-${center ? 'center' : align} divide-${divideAxis && divide ? `${divideAxis}-${divide}` : divideAxis ? divideAxis : divide}`">

        <slot/>
    </div>
</template>

<script>
export default {
    props:
    {
        align: {
            type: String,
            default: 'start'
        },
        center: {
            type: Boolean,
            default: false
        },
        col: {
            type: Boolean,
            default: false
        },
        justify: {
            type: String,
            default: 'start'
        },
        reverse: {
            type: Boolean,
            default: false
        },
        wrap: {
            type: Boolean,
            default: false,
        },

        divide: {
            type: [Number, String],
            default: null
        },
        divideAxis: {
            type: String,
            default: null
        },
    },
}
</script>
