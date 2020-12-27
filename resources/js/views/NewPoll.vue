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
                    <vs-input  class="py-2" color="success" shadow primary v-model="pollOption.option" :label-placeholder="'Option ' + (index + 1)"/>
                </div>
                <div class="flex">
                    <vs-button size="large" @click="addOption" :disabled="pollOptions.length === 8">Add another Option</vs-button>
                    <vs-button size="large" success flat shadow  class="ml-4" @click="createPoll" ref="button">Create your poll</vs-button>
                    <vs-dialog width="300px" not-center v-model="isPollCreated">
                        <template #header>
                            <h4 class="not-margin">
                                Your poll created successfully
                            </h4>
                        </template>


                        <div class="con-content relative">
                            <vs-input ref="urlInput" v-model="pollUrl" placeholder="Poll Url"></vs-input>
                            <box-icon name='copy' @click="copyUrl" class="cursor-pointer absolute copy"></box-icon>
                        </div>

                        <template #footer>
                            <div class="con-footer flex items-center justify-between">
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
                {id: 1, option: '', votes: 0},
                {id: 2, option: '', votes: 0},
            ],
            isPollCreated: false,
            pollUrl: '',
            pollUri: '',
        }
    },
    methods: {
        createPoll() {
            const loading = this.$vs.loading({
                target: this.$refs.button,
                scale: '0.6',
                opacity: 1,
                color: '#000'
            });
            //! filter pollOptions from null options
            let pollOptionsFiltered = this.pollOptions.filter(option => option.option !== '');
            axios.post('/api/polls', {
                pollQuestion: this.pollQuestion,
                pollOptions: pollOptionsFiltered
            })
            .then(res => {
                loading.close();
                this.pollUri = res.data.uri;
                this.pollUrl = `localhost:3000/poll/${this.pollUri}`;
                this.isPollCreated = true;
            })
            .catch(err => {
                loading.close();
                this.$vs.notification({
                    title: 'Error',
                    text: `${err.response.data.message}`,
                    color: 'danger'
                });
            })
        },
        checkPoll() {
            this.isPollCreated = false;
            this.$router.push({name: 'poll', params: {uri: this.pollUri}})
        },
        addOption() {
            this.pollOptions.push({id: this.pollOptions.length + 1, option: '', votes: 0});
        },
        copyUrl() {
            navigator.clipboard.writeText(this.pollUrl).then(() => {
                this.$vs.notification({
                     title: 'Text copied',
                    text: 'Poll Url copied successfully',
                    color: 'success'
                });
            }, (err) => {
                console.log('Poll Url not copied', err)
            });

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

.copy {
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}
</style>

