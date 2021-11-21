<template>
    <button v-if="!text && !icon" :class="`disabled:opacity-50 disabled:pointer-events-none break-words w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-${size} font-medium text-white bg-${color}-600 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${colorOffset} focus:ring-${color}-500 sm:w-auto sm:text-sm`"
        :type="type" @click="$emit('click', $event)">

        <div class="pointer-events-none" center>
            <slot/>
        </div>
    </button>

    <button v-else-if="text" :class="`disabled:opacity-50 disabled:pointer-events-none break-words text-${size} text-${color}-600 hover:text-${color}-900`"
        :type="type" @click="$emit('click', $event)">
        
        <x-flex class="pointer-events-none" center>
            <slot/>
        </x-flex>
    </button>

    <button v-else-if="icon" :class="`disabled:opacity-50 disabled:pointer-events-none p-1 rounded-full text-${size} text-${color} hover:bg-${color} hover:bg-opacity-30`"
        :type="type" @click="$emit('click', $event)">

        <x-flex class="pointer-events-none" center>
            <slot/>
        </x-flex>
    </button>
</template>

<script>
export default {
    props:
    {
        color: { 
            type: String, 
            default: 'indigo',
        },
        colorOffset: { 
            type: String, 
            default: 'transparent',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        icon: { 
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        text: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'base',
        },
    },
}
</script>
