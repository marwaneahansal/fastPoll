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
                    <vs-radio class="mt-2" v-model="option" :val="poll.option_1" v-if="poll.option_1">
                        {{ poll.option_1 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" :val="poll.option_2" v-if="poll.option_2">
                        {{ poll.option_2 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" :val="poll.option_3" v-if="poll.option_3">
                        {{ poll.option_3 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" :val="poll.option_4" v-if="poll.option_4">
                        {{ poll.option_4 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" :val="poll.option_5" v-if="poll.option_5">
                        {{ poll.option_5 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" :val="poll.option_6" v-if="poll.option_6">
                        {{ poll.option_6 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" :val="poll.option_7" v-if="poll.option_7">
                        {{ poll.option_7 }}
                    </vs-radio>
                    <vs-radio class="mt-2" v-model="option" :val="poll.option_8" v-if="poll.option_8">
                        {{ poll.option_8 }}
                    </vs-radio>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <vs-button primary icon>
                        Submit
                    </vs-button>
                    <vs-button shadow primary>
                        Jump to result
                    </vs-button>
                </div>
                <p class="text-small text-gray-900 text-opacity-50">asked by {{ poll.created_by }}</p>
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
                console.log(res.data.poll)
                if(res.data.poll) {
                    this.poll = res.data.poll;
                } else {
                    this.error = true;
                }
            })
            .catch(err => console.log(err))
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