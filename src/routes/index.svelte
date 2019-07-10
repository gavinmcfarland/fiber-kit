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

<div class="Page color-theme-light">

  <h1>Section</h1>

  <Section>
    <h2>Font Style</h2>

    <table>
      <tbody>
        <tr>
          <td>.text-heading</td>
          <td>font-family: Arial;</td>
        </tr>
      </tbody>
    </table>

    <p>Usage</p>

    <div>
      <code>code</code>
    </div>
  </Section>

  <Checkbox />

  <p>
    <strong>
      Try editing this file (src/routes/index.svelte) to test live reloading.
    </strong>
  </p>

  <h1>Defining the Problem</h1>
  <h2>Sub Heading</h2>
  <h3>Descriptive Heading</h3>
  <h4>Heading Level Four</h4>
  <h5>Small Heading</h5>
  <h6>Heading Level Six</h6>

  <caps>Uppercase Heading</caps>

  <p>
    Lorem ipsum dolor sit amet,
    <a>consectetur</a>
    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
    <code>code</code>
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
  </p>

  <code>
    <pre>Some code</pre>
  </code>

  <p>
    <small>Some legal text</small>
  </p>

  <div class="grid">
    <p>
      Morbi vel leo tellus. Donec ut dolor elementum, porttitor nisl a,
      consectetur dui. Suspendisse tincidunt odio eget odio iaculis efficitur.
      Phasellus aliquet quis ipsum at faucibus. Vivamus eu sapien tempor, rutrum
      leo at, eleifend nisi. Praesent viverra consectetur nibh, at.
    </p>
    <p>
      Suspendisse porta sollicitudin magna interdum ornare. Aliquam at purus
      aliquam, dapibus tortor id, consectetur tortor. Nullam mattis, velit eget
      faucibus lobortis, nisl felis molestie nulla, sed aliquet ante urna eget
      sem. Nullam non elementum orci, vel condimentum eros. Duis egestas.
    </p>
    <p>
      Proin libero ex, sodales in justo quis, fermentum gravida tellus. Cras in
      odio eu diam aliquam laoreet. Vestibulum venenatis blandit ipsum, id
      pharetra lectus placerat a. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Maecenas ornare.
    </p>
    <p>
      Sed efficitur enim leo, vel gravida nisi aliquet non. Pellentesque
      consectetur tortor eros, rutrum pellentesque ex iaculis et. Fusce sed
      aliquam felis. Aliquam egestas, augue laoreet feugiat commodo, nisi risus
      blandit augue, dictum feugiat arcu nisi quis sem. Quisque ac.
    </p>
  </div>

  <Button>Button</Button>
  <Radio>Radio button</Radio>
  <Checkbox>Checkbox</Checkbox>
  <Dropdown>Dropdown</Dropdown>
  <Textfield>Textfield</Textfield>

</div>
