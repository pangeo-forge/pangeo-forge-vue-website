<template>
  <div class="columns pt-6">
    <div class="column"></div>
    <div class="column">
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field>
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. SST"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        data() {
            return {
                data: [
                    'NOAA OISST',
                    'NASA MUR SST'
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>
