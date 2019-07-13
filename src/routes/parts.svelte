<script>
  import Section from "../components/Section.svelte";
  import Button from "../components/Section.svelte";
  import Checkbox from "../components/Section.svelte";
  import Radio from "../components/Section.svelte";
  import Textfield from "../components/Section.svelte";
  import Dropdown from "../components/Section.svelte";
</script>

<style>
  .Page {
    font-family: Visby;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<Section>
  <h1>Typography</h1>
  <h2>Sub Heading</h2>
  <h3>Descriptive Heading</h3>
  <h4>Heading Level Four</h4>
  <h5>Small Heading</h5>
  <h6>Heading Level Six</h6>

  <!-- <caps>Uppercase Heading</caps> -->

  <p>
    <small>Some legal text</small>
  </p>

  <p>
    Lorem ipsum dolor sit amet,
    <a href="/">consectetur</a>
    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
    <code>code</code>
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
  </p>
</Section>

<Section>
  <div class="w-1/3">
    <h2>Font Style</h2>
  </div>
  <div class="w-2/3">
    <p>Create manageable font styles.</p>

    <ul>
      <li>
        <code>font-display</code>
      </li>
      <li>
        <code>font-link</code>
      </li>
      <li>
        <code>font-quote</code>
      </li>
      <li>
        <code>font-code</code>
      </li>
      <li>
        <code>font-caps</code>
      </li>
    </ul>

    <code>code</code>
  </div>

</Section>

<Section>
  <h2 class="w-1/3">Color Theme</h2>

  <div class="w-2/3">
    <p>
      Apply color themes to a container and all corrosponding children elements
      will automatically inherit the appropriate colour.
    </p>

    <ul>
      <li>
        <code>ct</code>
        applies the default colour theme
      </li>
      <li>
        <code>ct-reverse</code>
        reverses the current color theme
      </li>
    </ul>

    <code>code</code>
  </div>

</Section>

<!-- <Section>
    <code>
      <pre>
        default: theme => theme(color.theme.light); light: color: "#4F148F",
        backgroundColor: "#F0EDF7", headingColor: "red", linkColor: "pink"
      </pre>
    </code>

    <table>
      <tbody>
        <tr>
          <td>.text-heading</td>
          <td>font-family: Arial;</td>
        </tr>
      </tbody>
    </table>

    <Button>Button</Button>
    <Radio>Radio button</Radio>
    <Checkbox>Checkbox</Checkbox>
    <Dropdown>Dropdown</Dropdown>
    <Textfield>Textfield</Textfield>
  </Section> -->
