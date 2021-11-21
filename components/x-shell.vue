<template>
    <x-flex :col="!vertical" class="h-full w-full overflow-y-auto overflow-x-hidden">
        <header :class="`bg-indigo-600 sticky ${vertical ? 'h-screen' : 'w-screen'} p-3`">
            <slot name="menu"/>
        </header>

        <slot/>
    </x-flex>
</template>

<script>
export default {
    props: {
        vertical: {
            type: Boolean,
            default: false
        },
    }
}
</script>
