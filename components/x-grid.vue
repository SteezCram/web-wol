<template>
    <section :class="`${container ? 'container' : ''} grid grid-cols-${cols} sm:grid-cols-${smCols} md:grid-cols-${mdCols} lg:grid-cols-${lgCols} xl:grid-cols-${xlCols}
        gap-${gapAxis ? `${gapAxis}-${gap}` : gap} sm:gap-${smGapAxis ? `${smGapAxis}-${smGap}` : smGap} md:gap-${mdGapAxis ? `${mdGapAxis}-${mdGap}` : mdGap}
        lg:gap-${lgGapAxis ? `${lgGapAxis}-${lgGap}` : lgGap} xl:gap-${xlGapAxis ? `${xlGapAxis}-${xlGap}` : xlGap} divide-${divideAxis && divide ? `${divideAxis}-${divide}` : divideAxis ? divideAxis : divide}`">
        
        <slot/>
    </section>
</template>

<script>
export default {
    props:
    {
        cols: {
            type: [Number, String],
            default: 12
        },
        smCols: {
            type: [Number, String],
            default: null
        },
        mdCols: {
            type: [Number, String],
            default: null
        },
        lgCols: {
            type: [Number, String],
            default: null
        },
        xlCols: {
            type: [Number, String],
            default: null
        },

        container: {
            type: Boolean,
            default: false
        },

        divide: {
            type: [Number, String],
            default: null
        },
        divideAxis: {
            type: String,
            default: null
        },

        gap: {
            type: [Number, String],
            default: null
        },
        smGap: {
            type: [Number, String],
            default: null
        },
        mdGap: {
            type: [Number, String],
            default: null
        },
        lgGap: {
            type: [Number, String],
            default: null
        },
        xlGap: {
            type: [Number, String],
            default: null
        },
        gapAxis: {
            type: String,
            default: null
        },
        smGapAxis: {
            type: String,
            default: null
        },
        mdGapAxis: {
            type: String,
            default: null
        },
        lgGapAxis: {
            type: String,
            default: null
        },
        xlGapAxis: {
            type: String,
            default: null
        },
    }
}
</script>
