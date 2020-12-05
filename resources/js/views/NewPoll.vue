<template>
    <div class="mt-12">
        <p class="text-3xl font-semibold">Create a poll</p>
        <p class="mt-2 text-gray-900 text-opacity-50">Complete the below fileds to create your poll</p>

        <div class="poll w-1/2 mt-8">
            <div class="pollQuestion w-full">
                <vs-input class="w-full" primary v-model="pollQuestion" label-placeholder="Poll Question" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pollQuestion: ''
        }
    }
}
</script>

