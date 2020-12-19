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
                <div class="pollHeader flex items-center justify-between">
                    <h2 class="text-2xl font-semibold" v-if="this.poll.poll_question[this.poll.poll_question.length - 1] === '?'">{{ poll.poll_question }}</h2>
                    <h2 class="text-2xl font-semibold" v-else>{{ poll.poll_question }}?</h2>
                    <p v-if="!showPoll">Total Votes: {{ poll.totalVotes }}</p>
                </div>
                <div v-if="showPoll">
                    <div class="mt-5">
                        <vs-radio class="mt-2" v-model="option" :val="pollOption.id" v-for="pollOption in pollOptions" :key="pollOption.id">
                            {{ pollOption.option }}
                        </vs-radio>
                    </div>
                    <div class="flex items-center justify-between mt-6">
                        <vs-button ref="button" primary icon :disabled="!option" @click="submitPoll">
                            Submit
                        </vs-button>
                        <vs-button shadow primary @click="showPoll = false">
                            Jump to result
                        </vs-button>
                    </div>
                </div>
                <div v-else>
                    <div class="mt-5">
                        <div class="pollOption vs-card py-4 px-6 mb-3"  v-for="(pollOption, index) in pollOptionsSorted" :key="pollOption.id">
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
            ],
            pollOptionsSorted: [],
        }
    },
    computed: {
        pollOptions() {
            return JSON.parse(this.poll.pollOptions);
        },
    },
    methods: {
        fetchPollDetails() {
            const fetchLoading = this.$vs.loading({
                text: 'loading...',
                type: 'circles',
            });
            axios.get(`/api/poll/${this.$route.params.uri}`)
            .then(res => {
                if(res.data.poll) {
                    fetchLoading.close();
                    this.poll = res.data.poll;
                    this.pollOptionsSorted = [...this.pollOptions].sort((a,b) => a.votes > b.votes ? -1 : 1);
                } else {
                    fetchLoading.close();
                    this.error = true;
                }
            })
            .catch(err => console.log(err))
        },
        submitPoll() {
            const loading = this.$vs.loading({
                target: this.$refs.button,
                scale: '0.6',
                background: 'primary',
                opacity: 1,
                color: '#fff'
            });
            let selectedOption = this.pollOptions.find(option => this.option === option.id);
            selectedOption.votes += 1;
            this.poll.totalVotes += 1;
            this.pollOptionsSorted = [...this.pollOptions].sort((a,b) => a.votes > b.votes ? -1 : 1);
            axios.put(`/api/polls/${this.poll.id}`, {
                pollOptions: this.pollOptions
            })
            .then(res => {
                loading.close();
                this.$vs.notification({
                    title: 'Vote saved successfully',
                    text: `${res.data.message}`,
                    color: 'success'
                })
            })
            .catch(err => {
                loading.close();
                console.log(err.response)
                if(err.response.status === 429) {
                    this.$vs.notification({
                        title: 'Error',
                        text: `You already voted for this poll`,
                        color: 'danger'
                    });
                } else {
                    this.$vs.notification({
                        title: 'Error',
                        text: `${err.response.data.message}`,
                        color: 'danger'
                    });
                }
            })
        },
        getVotesPercent(votes, totalVotes) {
            if(totalVotes === 0) return 0
            return parseFloat(((votes / totalVotes) * 100).toFixed(1)); 
        },
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
    transition: transform 1s ease;
}

.pollOption:hover {
    transform: translateY(-5px);
    /* box-shadow: 0px 1px 2px 0px rgba(0,0,0,.25); */
}

.vs-radio-content {
    width: fit-content;
}
</style>