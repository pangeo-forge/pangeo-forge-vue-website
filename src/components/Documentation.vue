<template>
    <section class="section" id="dochome">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-quarters-tablet is-half-desktop has-text-centered">
        <div class="block">
          <h1 class="title is-1">Documentation</h1>
          <p>Resources for using Pangeo Forge</p>
        </div>
      </div>
    </div>
    <div class="content" id="firststeps">
        <h3 class="title is-3">First steps</h3>
        <p>New to Pangeo Forge?  Start here!</p>
        <ul>
            <li><strong>What is Pangeo Forge?</strong> - Read more about what Pangeo Forge is and
            how it works.</li>
            <li><strong>Introduction Tutorial</strong> - Ready to code?  Walk through creating and
            deploying your first data transformation pipeline.</li>
        </ul>
        <hr class="solid">
    </div>
    <div class="content" id="organization">
        <h3 class="title is-3">How the documentation is organized</h3>
        <p>There are a number of places to access resources when working with components of Pangeo
        Forge.  Here is an overview of what you will find:</p>
        <ul>
            <li>The <strong>Introduction Tutorial</strong> is the place to start with Pangeo Forge.
            It walks the user through the process of getting setup with their first data transformation.</li>
            <li><strong>Guides</strong> explain core Pangeo Forge concepts in detail. They provide
            background information to aid in gaining a depth of understanding.</li>
            <li><strong>API Reference Pages</strong> are the technical descriptions of the repositories
            that make up Pangeo Forge. They are useful when you want to review a particular
            funcationality in depth, but assume you already have a working knowledge of the code base.</li>
        </ul>
        <p>While the overview information and intruduction tutorial can be found on the current website,
        guides and reference pages are locations the documentation pages for theie respective Pangeo 
        Forge repository.  Links to those pages are listed in the next section.</p>
        <hr class="solid">
    </div>
    <div class="content" id="repositories">
        <h3 class="title is-3">Repository reference</h3>
        <p>There are many respositories that make up Pangeo Forge. Here are links to the different
            documentation pages:</p>
        <ul>
            <li><code>pangeo-forge-recipes</code> - Guides | Reference</li>
            <li><code>pangeo-forge-azure-bakery</code> - Guides | Reference</li>
            <li><code>pangeo-forge-aws-bakery</code> - Guides | Reference</li>
        </ul>
        <hr class="solid">
    </div>
    <div class="content" id="community">
        <h3 class="title is-3">Connecting to the community</h3>
        <p>Pangeo Forge is a community run effort.  There are roles that people play to support the effort:</p>
        <ol>
            <li>recipe contributors — contributors who write recipes to define the data conversions.  This can be anyone with a desire to create analysis ready cloud-optimized (ARCO) data</li>
            <li>bakery maintainers — contributors who deploy bakeries on cloud infrastructure to process and host the transformed data. This is typically an organization with a grant to fund the infrastructure</li>
        </ol>
<blockquote>
The safety and security of all community members is our top priority.
Please familiarize yourself with our
<a href="https://github.com/pangeo-forge/roadmap/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</a>.
</blockquote>
        <p>If you are new to Pangeo Forge and looking to get involved, we suggest getting started with recipe
        contribution.  You can do in two ways:</p>
        <ol>
            <li>Open a ticket with a dataset request (no code required!) - Get started here (link) </li>
            <li>Write a recipe for a dataset you'd like to see transformed - See recipe creation docs</li>
        </ol>
        <h4>Maintainers</h4>
        <p>Want to help upkeep the Pangeo Forge infrustructure?  See the Contributing docs.</p>
    </div>
    </section>
</template>

<script>
    export default {
        name: 'DocHome',
    }
</script>
