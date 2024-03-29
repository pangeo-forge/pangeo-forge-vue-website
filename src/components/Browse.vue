<template>
  <b-container fluid class="browse content">
    <div>
      <br>
      <b-alert variant="danger" show>
        <p>
          👋 <strong>Hello!</strong> This is a development version of the Pangeo Forge
          <a href="https://stacspec.org/"> STAC Catalog</a>.
          Content and styling are under 🚧 active construction 🚧. Please check back soon for updates.
        </p>
      </b-alert>
    </div>
    <b-spinner v-if="data === null" label="Loading..."></b-spinner>
    <b-alert v-else-if="typeof data === 'string'" variant="danger" show>{{ data }}</b-alert>
    <b-container v-else>
      <b-alert v-if="data.access !== 'public'" variant="info" show>
        <p>
          <strong>This {{ type }} is {{ data.access }}!</strong>&nbsp;
          <template v-if="data.access === 'protected'">You can browse parts of the catalog, but some parts may not load up. Please follow these instructions to gain full access:</template>
          <template v-else>Please follow these instructions to gain access:</template>
        </p>
        <blockquote>
          <Description :description="data.accessInfo" />
        </blockquote>
      </b-alert>
      <template v-if="data.access === 'private'">
        <h1>{{ data.title }}</h1>
        <p><a :href="data.url" target="_blank"><code>{{ data.url }}</code></a></p>
      </template>
      <template v-else>
        <b-alert v-if="isHttp || corsWarning" variant="warning" show>
          <template v-if="isHttp">
            This {{ type }} is accessible only via unsecured HTTP and can't be accessed directly from a secured web page.
          </template>
          <template v-if="corsWarning">
            This {{ type }} doesn't support <a href="https://developer.mozilla.org/de/docs/Web/HTTP/CORS" target="_blank">CORS</a>.
          </template>
          STAC Index tries to proxy the request, but links, images or other references might be broken while browing through the {{ type }}.
          The URLs shown below will include the STAC Index proxy (<code>{{ proxyUrl }}</code>) and should not be used as provided in the browser.
          Use the offical link to the {{ type }} instead:<br /><a :href="data.url" target="_blank"><code>{{ data.url }}</code></a>
        </b-alert>
        <b-alert v-if="isOutdated" variant="info" dismissible show>
          This STAC catalog or API does use a legacy version of STAC. Stable versions of STAC are 1.0.0 or later.
          Please inform the data provider about the new STAC version and kindly ask them to update the catalog to STAC 1.0 for better interoperability and tooling support.
        </b-alert>
        <div v-if="data.access !== 'private'" id="app"></div>
      </template>
    </b-container>
  </b-container>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import isPlainObject from 'lodash/isPlainObject';
import { Description } from '@openeo/vue-components';

export default {
  name: 'Browse',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
  components: {
    Description
  },
  props: {
    id: {
      type: String,
      validator: function (value) {
        return Boolean(value.match(/^[a-z0-9-]+$/i));
      }
    },
    collection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: null,
      corsWarning: false,
      isHttp: false,
      isOutdated: false
    };
  },
  computed: {
    type() {
      if (this.collection) {
        return "Collection"
      }
      else if (this.data.isApi) {
        return "API";
      }
      else {
        return "Catalog";
      }
    },
    proxyUrl() {
      return this.$axios.defaults.baseURL + '/proxy?';
    }
  },
  async mounted() {
    try {
      // let endpoint = (this.data ? '/collections/' : '/catalogs/') + this.id
      let endpoint = this.data
      let response = await this.$axios.get(endpoint);
      if (!isPlainObject(response.data)) {
        this.data = "Information retrieved from the server are invalid.";
        return;
      }
      else {
        this.data = response.data;
        if (this.data.access !== 'private') {
          let createBrowser = require('stac-browser/src/main').default;
          let url = this.data.links[0].href; // assumes {"rel": "self"} is first object in array
          /*
          if (url.startsWith('http://')) {
            url = this.makeProxyUrl(url);
            this.isHttp = true;
          }*/
          try {
            let response = await this.$axios.get(url, {
              timeout: 1000,
              maxContentLength: 0
            });
            if (!this.data.isApi && isPlainObject(response.data) && (typeof response.data.stac_version !== 'string' || !response.data.stac_version.match(/^1\.\d+\.\d+$/))) {
              this.isOutdated = true;
            }
          } catch (error) {
            if(error.message == 'Network Error' || error.name == 'NetworkError') {
              url = this.makeProxyUrl(url);
              this.corsWarning = true;
            }
          }
          await createBrowser(url, this.$router.path);
        }
        else {
          document.title = this.data.title + " - Pangeo Forge";
        }
      }
    } catch (error) {
      this.data = "Can't load information from the server: " + error.message;
      return;
    }
  },
  methods: {
    makeProxyUrl(url) {
      return this.proxyUrl + encodeURIComponent(url);
    }
  }
}


</script>

<style scoped>
blockquote {
  border-left: 5px rgba(0,0,0,0.5) solid;
  padding-left: 1em;
  margin: 0;
}
</style>

<style>
@media (min-width: 1900px) {
.browse .container, .browse .container {
      max-width: 1600px;
  }
}

.content ol,
.content ul {
    margin-left: 0;
}

.browse .loaded {
  padding: 0;
  font-size: 0.95em;
}
.browse a.btn-outline-dark:hover {
  color: #fff;
}
.browse .metadata td.title {
    font-size: 1em;
}

.tabs a,
.tabs a:hover {
    float: left;
    color: #007bff;
    text-decoration: none;
}
</style>
