<template>
  <div id="publicPolls">
    <div class="w-full flex flex-col items-center">
      <div class="header mb-8">
        <div class="self-start">
          <h2 class="text-4xl">Public polls</h2>
          <p class="mt-4 text-gray-900 text-opacity-50 dark:text-gray-300">
            Below are the public polls created by Fast Poll members.
          </p>
        </div>
      </div>
      <div class="filters flex items-center justify-between mb-5">
        <vs-input
          v-model="searchQuery"
          v-on:keyup.enter="getPolls()"
          primary
          icon-after
          placeholder="Search by poll or users"
          class="w-3/4"
        >
          <template #icon>
            <i class='bx bx-search dark:text-white' @click="getPolls()" :class="{'pointer-events-none': searchQuery.trim().length == 0}"></i>
          </template>
        </vs-input>
        <vs-select placeholder="Order by" v-model="orderByOption" color="success">
          <vs-option
            v-for="option in orderByOptions"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            >{{ option.label }}</vs-option
          >
        </vs-select>
      </div>

      <div v-if="filteredPolls.length > 0" class="cards">
        <div
          class="vs-card w-full py-4 px-8 mb-4 dark:bg-gray-900 dark:text-white dark:text-opacity-90"
          v-for="poll in filteredPolls"
          :key="poll.id"
        >
          <poll-card :poll="poll" @deletePoll="deletePoll(poll.id)"></poll-card>
        </div>
      </div>
      <div v-else>
        <p class="text-center text-gray-200">No Polls found!</p>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import PollCard from '@js/components/PollCard.vue';

export default {
  components: {
    PollCard,
  },
  data() {
    return {
      filteredPolls: [],
      searchQuery: '',
      filters: {},
      orderByOption: 'recent',

      orderByOptions: [
        { value: 'recent', label: 'Recent' },
        { value: 'older', label: 'Older' },
      ],
    };
  },
  computed: {
    polls() {
      return this.$store.state.polls.publicPolls;
    },
  },
  watch: {
    orderByOption() {
      this.getPolls();
    },
  },
  methods: {
    getPolls() {
      const loading = this.$vs.loading();
      this.$store
        .dispatch('polls/getPublicPolls',
          {
            searchQuery: this.searchQuery,
            orderByOption: this.orderByOption,
          })
        .then(_ => {
          this.filteredPolls = this.polls;
          loading.close();
        })
        .catch(err => {
          this.$vs.notification({
            title: 'Ooops',
            text: `Something went wrong, ${err}`,
            color: 'danger',
          });
          loading.close();
        });
    },
    deletePoll(pollId) {
      const loading = this.$vs.loading();
      this.$store
        .dispatch('polls/deletePoll', { pollId })
        .then(res => {
          loading.close();
          this.$vs.notification({
            title: 'Success',
            text: `${res.data.message}`,
            color: 'success',
          });
          this.getPolls();
        })
        .catch(err => {
          loading.close();
          this.$vs.notification({
            title: 'Ooops',
            text: `${err}`,
            color: 'danger',
          });
        });
    },
  },
  created() {
    this.getPolls();
  },
};
</script>

<style>
.header, .filters {
  width: 80%;
}
#publicPolls .vs-card {
  max-width: none;
  width: 80%;
  transition: transform 0.5s ease;
}

#publicPolls .vs-card:hover {
  transform: translateY(-8px);
}

#publicPolls .filters vs-input,
#publicPolls .cards {
  width: 80% !important;
}

#publicPolls .vs-input-content,
#publicPolls .vs-input {
  background-color: white !important;
}
#publicPolls .vs-input {
  width: 100%;
}

html.dark #publicPolls .vs-input {
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity)) !important;
  color: white;
}

html.dark #publicPolls .vs-input-content {
  background-color: unset !important;
}

html.dark #publicPolls .vs-select__input {
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity)) !important;
  color: white;
}

.vs-select input {
  background-color: white;
}

html.dark .vs-select__options {
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity)) !important;
  color: white;
}

html.dark .vs-icon-arrow:after, html.dark .vs-icon-arrow:before {
  background-color: white !important;
}

html.dark .vs-select__option:not(.activeOption) {
  color: rgba(255, 255, 255, .5) !important;
}
.vs-input__icon {
  cursor: pointer;
  z-index: 9000;
  pointer-events: visible !important;
}

html.dark .vs-input__icon {
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity)) !important;
}
</style>
