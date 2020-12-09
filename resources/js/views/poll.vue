<template>
    <div class="w-full">
        <vs-alert color="danger" v-if="error">
            <template #title>
                Poll Not Found
            </template>
            <p>Poll you requested not found, Please check again your poll url.</p>
        </vs-alert>
        <div class="mx-auto w-1/2 mb-12" v-if="poll">
            <div class="vs-card py-4 px-6">
                <h2 class="text-2xl font-semibold">{{ poll.poll_question }}?</h2>
                <div v-if="showPoll">
                    <div class="mt-5">
                        <vs-radio class="mt-2" v-model="option" :val="pollOption.id" v-for="pollOption in pollOptions" :key="pollOption.id">
                            {{ pollOption.option }}
                        </vs-radio>
                    </div>
                    <div class="flex items-center justify-between mt-6">
                        <vs-button primary icon :disabled="!option" @click="submitPoll">
                            Submit
                        </vs-button>
                        <vs-button shadow primary @click="showPoll = false">
                            Jump to result
                        </vs-button>
                    </div>
                </div>
                <div v-else>
                    <div class="mt-5">
                        <div class="pollOption vs-card py-4 px-6 mb-3" v-for="(pollOption, index) in pollOptions" :key="pollOption.id">
                            <h3 class="text-xl mb-4 font-semibold">{{ pollOption.option }}</h3>
                            <k-progress :color="colors[index]"  :percent="getVotesPercent(pollOption.votes, poll.totalVotes)" />
                            <p class="mt-4 text-sm text-black">{{ pollOption.votes }} Votes</p>
                        </div>
                        <div class="flex justify-end mt-6">
                            <vs-button shadow primary @click="showPoll = true">
                                Back to vote
                            </vs-button>
                        </div>
                    </div>
                </div>
                <p class="text-sm mt-4 text-gray-900 text-opacity-50">asked by {{ poll.created_by }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            poll: null,
            error: false,
            option: null,
            showPoll: true,
            colors: [
                '#409eff',
                '#581b98',
                '#f3558e',
                '#482ff7',
                '#21e6c1',
                '#faee1c',
                '#fc5185',
                '#ff5959',
                '#0e153a',
            ]
        }
    },
    watch: {
        showPoll() {
            if(this.showPoll === false) {
                console.log(this.poll)
                JSON.parse(this.poll.pollOptions).sort((a,b) => a.votes > b.votes ? 1 : -1);
                console.log(JSON.parse(this.poll.pollOptions));
            }
        }
    },
    computed: {
        pollOptions() {
            return JSON.parse(this.poll.pollOptions);
        },
    },
    methods: {
        fetchPollDetails() {
            axios.get(`/api/poll/${this.$route.params.uri}`)
            .then(res => {
                if(res.data.poll) {
                    this.poll = res.data.poll;
                } else {
                    this.error = true;
                }
            })
            .catch(err => console.log(err))
        },
        submitPoll() {
            let selectedOption = this.pollOptions.find(option => this.option === option.id);
            selectedOption.votes += 1;
            axios.put(`/api/polls/${this.poll.id}`, {
                pollOptions: this.pollOptions
            })
            .then(res => {
                this.$vs.notification({
                    title: 'Vote saved successfully',
                    text: `${res.data.message}`,
                    color: 'success'
                })
            })
            .catch(err => {
                console.log(err.response)
                this.$vs.notification({
                    title: 'Error',
                    text: `${err}`,
                    color: 'danger'
                });
            })
        },
        getVotesPercent(votes, totalVotes) {
            return parseFloat(((votes / totalVotes) * 100).toFixed(1)); 
        },
        compare( pollOptionsA, pollOptionsB ) {
            if ( pollOptionsA.votes < pollOptionsB.votes ){
                return -1;
            }
            if ( pollOptionsA.votes > pollOptionsB.votes ){
                return 1;
            }
            return 0;
        }
    },
    created() {
        this.fetchPollDetails();
    }
}
</script>

<style>
.vs-card {
    cursor: auto !important;
    max-width: 100% !important;
}

.pollOption {
    transition: transform 1s ease-out;
}

.pollOption:hover {
    transform: translateY(-5px);
    /* box-shadow: 0px 1px 2px 0px rgba(0,0,0,.25); */
}

.vs-radio-content {
    width: fit-content;
}
</style>