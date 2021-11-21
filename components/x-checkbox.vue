<template>
    <div class="flex items-center">
        <input ref="input" :id="name" :name="name" type="checkbox" :value="value"
            :class="`appearance-none h-4 w-4 checked:bg-${color}-600 checked:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-${colorOffset} focus:ring-${color}-500 border border-gray-300 dark:border-gray-700 rounded`"
            :disabled="disabled" @blur="validate(value)" @input="$emit('input', $event.target.value)" @invalid="validate(value)">
        
        <label class="pl-2 text-sm" :for="name">
            <slot/>
        </label>
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
        colorOffset: {
            type: String,
            default: 'transparent'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            default: (Math.random() + 1).toString(36).substring(2),
        },
        rules: {
            type: Array,
            default: () => [],
        },
        value: {
            type: [Boolean, Number, String],
            default: false,
        },
        text: {
            type: String,
            default: '',
        },
    },


    watch: {
        value: function(newValue) {
            this.validate(newValue);
        },
    },


    methods:
    {
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
