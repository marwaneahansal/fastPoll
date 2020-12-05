<template>
    <div class="mt-12 w-1/2 mx-auto">
        <p class="text-3xl font-semibold">Create a poll</p>
        <p class="mt-2 text-gray-900 text-opacity-50">Complete the below fileds to create your poll</p>

        <div class="poll w-full mt-8 mb-12">
            <div class="pollQuestion w-full">
                <vs-input class="w-full mb-3" shadow primary v-model="pollQuestion" label-placeholder="Poll Question" />
            </div>

            <div class="pollOptions">
                <div class="mb-3 relative" v-for="(pollOption, index) in pollOptions" :key="index">
                    <vs-input class="py-2" shadow primary v-model="pollOption[index]" :label-placeholder="'Option ' + (index + 1)"/>
                </div>
                <div class="flex">
                    <vs-button @click="pollOptions.push({option: ''})" :disabled="pollOptions.length === 8">Add another Option</vs-button>
                    <vs-button color="success" class="ml-4 text-black" @click="createPoll">Create your poll</vs-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            pollQuestion: '',
            pollOptions: [
                {option: ''},
                {option: ''},
                {option: ''},
                {option: ''}
            ]
        }
    },
    methods: {
        createPoll() {
            axios.post('/api/polls', {
                pollQuestion: this.pollQuestion,
                pollOptions: this.pollOptions
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>
    .poll .vs-con-input-label {
        width: 100% !important; 
    }

    .colorSwatch {
        z-index: 1000;
    }
</style>

