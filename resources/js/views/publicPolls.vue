<template>
    <div id="publicPolls">
        <div class="w-full flex flex-col items-center">
            <div class="header mb-8">
                <div class="self-start">
                    <h2 class="text-4xl">Public polls</h2>
                    <p class="mt-4 text-gray-900 text-opacity-50">Below are the public polls created by Fast Poll members.</p>
                </div>
            </div>
            <div class="searchInput">
                <vs-input v-model="searchQuery" placeholder="Search by poll or users" class="py-2 mb-4"/>
            </div>
            <div class="vs-card py-4 px-6 mb-4" v-for="poll in filteredPolls" :key="poll.id">
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
export default {
	data() {
		return {
			filteredPolls: [],
			searchQuery: '',
			filters: {},
		}
	},
	computed: {
		polls () {
			return this.$store.state.polls.publicPolls;
		}
	},
	watch: {
		searchQuery() {
			this.filteredPolls = this.searchPolls(this.polls, this.searchQuery);
		}
	},
	methods: {
		getPolls() {
			const loading = this.$vs.loading();
			this.$store.dispatch('polls/getPublicPolls')
			.then(_ => {
				this.filteredPolls = this.polls;
				loading.close();
			})
			.catch(err => {
				this.$vs.notification({
					title: 'Ooops',
					text: `Something went wrong, ${err}`,
					color: 'danger'
				});
				loading.close();
			});
		},
		searchPolls(polls, query) {
			return polls.filter(item => {
				return item.poll_question.toLowerCase().includes(query.toLowerCase()) || item.created_by.toLowerCase().includes(query.toLowerCase());
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
		transition: transform .5s ease;
	}


	#publicPolls .vs-card:hover {
		transform: translateY(-8px);
		/* box-shadow: 0px 1px 2px 0px rgba(0,0,0,.25); */
	}

	#publicPolls .searchInput {
		width: 60% !important;
	}

	#publicPolls .vs-input-content, #publicPolls .vs-input{
		background-color: white !important;
	}
	#publicPolls .vs-input {
		width: 100%;
	}
</style>