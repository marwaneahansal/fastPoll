<template>
    <div id="publicPolls">
        <div class="w-full flex flex-col items-center">
            <div class="header mb-8">
                <div class="self-start">
                    <h2 class="text-4xl">Public polls</h2>
                    <p class="mt-4 text-gray-900 text-opacity-50">Below are the public polls created by Fast Poll members.</p>
                </div>
            </div>
            <div class="vs-card py-4 px-6 mb-4" v-for="poll in polls" :key="poll.id">
                <div class="pollHeader flex items-center justify-between cursor-pointer" @click="$router.push({name: 'poll', params:{ uri: poll.uri }})">
                    <h2 class="text-2xl font-semibold" v-if="poll.poll_question[poll.poll_question.length - 1] === '?'">{{ poll.poll_question }}</h2>
                    <h2 class="text-2xl font-semibold" v-else>{{ poll.poll_question }}?</h2>
                </div>
                <p class="text-xl mt-6">Total Votes: {{ poll.totalVotes }}</p>
                <p class="mt-4 text-gray-900 text-opacity-50">asked by {{ poll.created_by }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            polls: null
        }
    },
    methods: {
        getPolls() {
            const loading = this.$vs.loading();
            axios.get('/api/polls')
            .then(res => {
                console.log(res.data.polls);
                this.polls = res.data.polls;
                loading.close();
            })
            .catch(err => {
                console.log(err);
                loading.close();
            });
        }
    },
    created() {
        this.getPolls();
    }
}
</script>
    
<style>
    .header {
        width: 60%;
    }
    #publicPolls .vs-card {
        max-width: none;
        width: 60%;
        transition: transform 1s ease;
    }


    #publicPolls .vs-card:hover {
        transform: translateY(-8px);
        /* box-shadow: 0px 1px 2px 0px rgba(0,0,0,.25); */
    }
</style>