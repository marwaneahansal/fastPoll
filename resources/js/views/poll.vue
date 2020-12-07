<template>
    <div class="w-full">
        <vs-alert color="danger" v-if="error">
            <template #title>
                Poll Not Found
            </template>
            <p>Poll you requested not found, Please check again your poll url.</p>
        </vs-alert>
        <div class="mx-auto w-1/2" v-if="poll">
            <div class="vs-card py-4 px-6">
                <div>
                    <h3 class="text-2xl font-semibold">{{ poll.poll_question }}?</h3>
                    
                </div>
                <div class="mt-5">
                    <vs-radio class="mt-2" v-model="option" val="1" v-if="poll.option_1">
                        {{ poll.option_1 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" val="2" v-if="poll.option_2">
                        {{ poll.option_2 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" val="3" v-if="poll.option_3">
                        {{ poll.option_3 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" val="4" v-if="poll.option_4">
                        {{ poll.option_4 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" val="5" v-if="poll.option_5">
                        {{ poll.option_5 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" val="6" v-if="poll.option_6">
                        {{ poll.option_6 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" val="7" v-if="poll.option_7">
                        {{ poll.option_7 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" val="8" v-if="poll.option_8">
                        {{ poll.option_8 }}
                    </vs-radio>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <vs-button primary icon :disabled="!option" @click="submitPoll">
                        Submit
                    </vs-button>
                    <vs-button shadow primary>
                        Jump to result
                    </vs-button>
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
            option: null
        }
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
            axios.put(`/api/polls/${this.poll.id}`, {
                option: this.option,
            })
            .then(res => {
                console.log('submit',res)
                if(res.data.message) {
                    this.$vs.notification({
                        title: 'Vote saved successfully',
                        text: `${res.data.message}`,
                        color: 'success'
                    })
                } else {
                    this.$vs.notification({
                        title: 'Somtheing gone wrong!!',
                        text: `${res.data.error}`,
                        color: 'danger'
                    })
                }
            })
            .catch(err => {
                this.$vs.notification({
                    title: 'Error',
                    text: `${err}`,
                    color: 'danger'
                });
            })
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
.vs-radio-content {
    width: fit-content;
}
</style>