<template>
    <div class="flex-grow disabled:opacity-50 disabled:pointer-events-none">
        <label :for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ text }}</label>
        
        <div class="mt-1 relative rounded-md shadow-sm">
            <div v-if="iconPrepend.length > 0" :class="`absolute inset-y-0 left-0 pl-3 flex items-center ${$listeners['click:prepend'] ? 'cursor-pointer' : ''}`"
                @click="$emit('click:prepend', $event);">

                <span class="text-gray-500 sm:text-sm">
                    <i :class="`icon-${iconPrepend}`"/>
                </span>
            </div>
            
            <input v-if="type !== 'number'" ref="input" :name="name" :type="type" :value="value"
                :class="`dark:bg-black border block w-full pl-8 pr-3 py-2 border-${borderColor()}-300 dark:border-${borderColor()}-700 rounded-md focus:outline-none focus:ring-${borderColor()}-500 focus:border-${borderHoverColor()}-500 sm:text-sm`"
                :readonly="readonly" :required="required" @blur="validate(value)" @input="$emit('input', $event.target.value)" @invalid="validate(value)">

            <input v-if="type === 'number'" ref="input" :name="name" type="number" :value="value"
                :class="`dark:bg-black border block w-full pl-8 pr-3 py-2 border-${borderColor()}-300 dark:border-${borderColor()}-700 rounded-md focus:outline-none focus:ring-${borderColor()}-500 focus:border-${borderHoverColor()}-500 sm:text-sm`"
                :max="max" :min="min" :readonly="readonly" :required="required" @blur="validate(value)" @input="$emit('input', $event.target.value)" @invalid="validate(value)">

            <div v-if="iconPrepend.length > 0" :class="`absolute inset-y-0 right-0 pr-3 flex items-center ${$listeners['click:append'] ? 'cursor-pointer' : ''}`"
                @click="$emit('click:append', $event);">

                <span class="text-gray-500 sm:text-sm">
                    <i :class="`icon-${iconAppend}`"/>
                </span>
            </div>
        </div>

        <x-text v-if="validationMessage.length > 0" sub :class="`text-${validationType === 'error' ? 'red' : 'yellow'}-500 mt-1`">
            <x-icon v-if="validationType === 'error'">icon-x-circle</x-icon>
            <x-icon v-else>icon-alert-triangle</x-icon>
            {{ validationMessage }}
        </x-text>
    </div>
</template>

<script>
export default {
    props:
    {
        color: {
            type: String,
            default: 'indigo'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        hasLabel: {
            type: Boolean,
            default: true,
        },
        iconAppend: {
            type: String,
            default: '',
        },
        iconPrepend: {
            type: String,
            default: '',
        },
        max: {
            type: Number,
            default: Number.MAX_SAFE_INTEGER,
        },
        min: {
            type: Number,
            default: Number.MAX_SAFE_INTEGER, 
        },
        name: {
            type: String,
            default: (Math.random() + 1).toString(36).substring(2),
        },
        rules: {
            type: Array,
            default: () => [],
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: 'Input',
        },
        type: {
            type: String,
            default: 'text',
        },
    },


    data: function() {
        return {
            passwordVisible: false,
            validationMessage: '',
            validationType: '',
        }
    },


    watch: {
        value: function(newValue) {
            this.validate(newValue);
        },
    },


    methods:
    {
        /** Get the border color to show.
         * 
         * @returns {string} Color to show
         * 
        */
        borderColor: function()
        {
            if (this.validationMessage.length === 0) {
                return 'gray';
            }

            switch (this.validationType) {
                case 'error':
                    return 'red';
                case 'warning':
                    return 'yellow';
                default:
                    return 'gray';
            }
        },

        /** Get the hover border color to show.
         * 
         * @returns {string} Color to show
         * 
        */
        borderHoverColor: function()
        {
            if (this.validationMessage.length === 0) {
                return this.color;
            }

            switch (this.validationType) {
                case 'error':
                    return 'red';
                case 'warning':
                    return 'yellow';
                default:
                    return this.color;
            }
        },


        /** Validate the value
         * 
         * @param {string} value - Value to validate
         * 
        */
        validate: function(value)
        {
            this.validationMessage = '';
            this.validationType = 'error';

            if (this.rules.length === 0) {
                return;
            }


            for (const rule of this.rules)
            {
                if (typeof rule === 'object')
                {
                    const result = rule.f(value);

                    if (result !== true) {
                        this.validationMessage = result;
                        this.validationType = rule.t;
                        this.$refs.input.setCustomValidity(result);
                        break;
                    }

                    continue;
                }


                const result = rule(value);

                if (result !== true) {
                    this.validationMessage = result;
                    this.$refs.input.setCustomValidity(result);
                    break;
                }
            }


            this.$refs.input.setCustomValidity('');
        },
    }
}
</script>