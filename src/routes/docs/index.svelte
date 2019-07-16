<script context="module">
  export async function preload() {
    const sections = await this.fetch(`docs.json`).then(r => r.json());
    return { sections };
  }
</script>

<script>
  import Section from "../../components/Section.svelte";
  export let sections;
</script>

<svelte:head>
  <title>Docs • Sapper</title>
</svelte:head>

{#each sections as section}
  <Section>
    <div class="w-10">
      <h2>{section.metadata.title}</h2>
    </div>
    <div class="w-2/3">
      {@html section.html}
    </div>
  </Section>
{/each}
