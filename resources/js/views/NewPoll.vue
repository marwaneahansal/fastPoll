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
                    <vs-input class="py-2" color="success" shadow primary v-model="pollOption.option" :label-placeholder="'Option ' + (index + 1)"/>
                </div>
                <div class="flex">
                    <vs-button size="large" @click="pollOptions.push({option: ''})" :disabled="pollOptions.length === 8">Add another Option</vs-button>
                    <vs-button size="large" success flat shadow  class="ml-4" @click="createPoll">Create your poll</vs-button>
                    <vs-dialog width="300px" not-center v-model="isPollCreated">
                        <template #header>
                        <h4 class="not-margin">
                            Your poll created successfully
                        </h4>
                        </template>


                        <div class="con-content">
                        <vs-input v-model="pollUrl" placeholder="Poll Url"></vs-input>
                        </div>

                        <template #footer>
                        <div class="con-footer">
                            <vs-button @click="checkPoll">
                            Check poll
                            </vs-button>
                            <vs-button @click="isPollCreated=false" dark transparent>
                            Cancel
                            </vs-button>
                        </div>
                        </template>
                    </vs-dialog>
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
            ],
            isPollCreated: false,
            pollUrl: '',
            pollUri: '',
        }
    },
    methods: {
        createPoll() {
            axios.post('/api/polls', {
                pollQuestion: this.pollQuestion,
                option1: this.pollOptions[0].option,
                option2: this.pollOptions[1].option,
                option3: this.pollOptions[2] ? this.pollOptions[2].option : null,
                option4: this.pollOptions[3] ? this.pollOptions[3].option : null,
                option5: this.pollOptions[4] ? this.pollOptions[4].option : null,
                option6: this.pollOptions[5] ? this.pollOptions[5].option : null,
                option7: this.pollOptions[6] ? this.pollOptions[6].option : null,
                option8: this.pollOptions[7] ? this.pollOptions[7].option : null,
            })
            .then(res => {
                this.pollUri = res.data.uri;
                this.pollUrl = `localhost:3000/poll/${this.pollUri}`;
                this.isPollCreated = true;
            })
            .catch(err => console.log(err))
        },
        checkPoll() {
            this.isPollCreated = false;
            this.$router.push({name: 'poll', params: {uri: this.pollUri}})
        }
    },
    
}
</script>

<style>
.vs-input-content {
    background-color: white !important;
}
.vs-input {
    width: 100%;
}
</style>

