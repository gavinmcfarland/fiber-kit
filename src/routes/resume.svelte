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

<div class="Page ct">

  <div class="profile sub-content block grid">
    <h2 class="font-heading text-2xl">Profile</h2>
    <div>
      <p>
        A versatile designer with a track record of creating successful services
        and products on a variety of projects. A breadth of experience
        end-to-end from discovery, user research, interaction design, technical
        knowledge and business considerations. Working across small and large
        teams, both co-located and remotely. Comfortable leading strategically
        or helping tactically.
      </p>
    </div>

  </div>
  <div class="skills sub-content block grid">
    <h2 class="font-heading text-2xl">Core Skills</h2>
    <div>
      <ul class="compact">
        <li>Sketching concepts and ideas</li>
        <li>Problem-solving complex systems and small details</li>
        <li>Prototyping (InVision/Framer/HTML&CSS&JS)</li>
        <li>Visual and graphic design (Sketch/Figma)</li>
        <li>Responsive design and design systems</li>
        <li>Facilitating and managing user testing sessions</li>
      </ul>
    </div>

  </div>
  <!-- <div class="highlights sub-content">
			<h2>Highlights</h2>
			<ul>
				<li>Implementing design thinking process within analytics optmisation team helped contribute to continued YoY growth of accquisition by over 300%.</li>
				<li>Research of the John Lewis iPad App showed that customers’ browsing habits were not fully supported. I organised workshops and tested new designs with customers. We succeeded in driving changes to the navigation and browsing of content which substantially increased sales and downloads. The iPad App gained a 4.5 rating on the App store.</li>
				<li>Working with Venntro I helped to increase the number of complete profiles on their dating platform. To start only a small percentage of customers completed their profile. I interviewed customers to understand their dating habits and assessed usability pain points. By introducing users to the profile creation process earlier on we increased completed profiles by 4 times of what it was before.</li>
			</ul>
		</div> -->
  <div class="employment-history sub-content block grid">
    <h2 class="font-heading text-2xl">Employment History</h2>
    <div>

      <h3>American Express (Principal Designer)</h3>
      <h4>
        Sep 2017 - Present
        <span>1 year 6m</span>
      </h4>
      <p>
        Supporting and managing design and research initiatives for acquisition
        team. Using qualitative and quantitative data to inform hypotheses for
        MVT and A/B tests. Involved in leading new design system to improve
        consistency and efficiency across markets.
      </p>
      <ul>
        <li>
          Interviewed and helped onboard new UX designers as the team grew
        </li>
        <li>
          New design initiatives helped contribute to continued YoY growth of
          acquisition by over 300%
        </li>
      </ul>

      <h3>Dept for International Trade (Senior Interaction Designer)</h3>
      <h4>
        Sep 2016 - May 2017
        <span>9 months</span>
      </h4>
      <p>
        Product design for an internal case management system for civil servants
        which helps them process export licence applications for individuals and
        companies. Identified common needs and user journies to create reusable
        components working with existing design system.
      </p>

      <h3>Home Office (Senior UX Designer)</h3>
      <h4>
        Jul - Aug 2016
        <span>2 months</span>
      </h4>
      <p>
        Tactical support for government service providing aid to refugees
        seeking asylum in the UK. Creating wireframes and design specs and
        collaborated on a new design system used to build the next release of
        service.
      </p>

      <h3>10 Lord (Principal Designer)</h3>
      <h4>
        Mar - Jun 2016
        <span>4 months</span>
      </h4>
      <p>
        Identified key problems tenants, landlords and letting agents face with
        renting for startup. Created several prototypes of mobile app which
        business used to explain their idea to users and investors that allowed
        them to get the investment they needed.
      </p>

      <h3>Dept for Business, Innovation and Skills (Lead UX Designer)</h3>
      <h4>
        Nov 2015 - Feb 2016
        <span>4 months</span>
      </h4>
      <p>
        Digital transformation of government platform used by research academics
        to apply for grant funding. Worked with product owners to understand the
        grant funding process and needs to prototype heuristic outline of
        service under ambitious deadlines.
      </p>

      <h3>Amia (Senior UX Designer / User Researcher)</h3>
      <h4>
        Aug - Oct 2015
        <span>3 months</span>
      </h4>
      <p>
        Researched and helped design Nectar iPhone and Android App. Worked
        closely with in-house designers to iterate prototypes during testing
        sessions. Insights from user testing were used to guide roadmap for
        features being released.
      </p>

      <h3>John Lewis (Lead UX Designer for iPad)</h3>
      <h4>
        Nov 2013 - Jun 2015
        <span>1 year 8 months</span>
      </h4>
      <p>
        Initially joined as tactical support for enhancing customer experience
        of iPhone and mobile website. After 9 months moved to iPad team as Lead
        UX Designer. Redesigned omni-channel ecommerce experience for iPad app.
        Coordinated in-store guerrilla user testing to validate design
        decisions.
      </p>
      <ul>
        <li>
          Release of redesigned iPad app saw App Store ratings go from 3 stars
          to 4.5 stars.
        </li>
        <li>
          iPad app received awards including Most Effective Tablet App
          (Effective Mobile Marketing Awards 2015) and Best Customer Experience
          for iPad (Draper Digital Awards 2016).
        </li>
      </ul>

      <h3>Venntro (Senior UX Designer)</h3>
      <h4>
        Sep 2011 - Sep 2013
        <span>
          2 years
          <span />
        </span>
      </h4>
      <p>
        Multi-functional role for white label online dating with over 12,000
        sites. Designed and coded frontend interfaces for mobile web app and
        desktop site. Managed changes to code on Github using command line.
        Conducted customer interviews to collate data on application usage.
        Sketched user journies and wireframes.
      </p>

      <h3>Jobsite (Frontend Designer and Senior UX Designer)</h3>
      <h4>
        Sep 2007 - Sep 2013
        <span>
          4 years
          <span />
        </span>
      </h4>
      <p>
        Initially joined the organisation in 2007 designing emails and page
        templates for online job board. In 2011 took on additional
        responsibilities including the facilitation of user studies and
        organising workshops with stakeholders.
      </p>

    </div>

  </div>

  <div class="education sub-content block grid" style="margin-bottom: 0">
    <div>
      <h2 class="font-heading text-2xl">Education</h2>
    </div>
    <div>
      <h3>Year In Industry Student Placement</h3>
      <h4>2004 - 2005</h4>
      <p>Rolls Royce Derby, Web Designer</p>
      <h3>Queen Elizabeth’s Grammar School Ashbourne</h3>
      <h4>2000 - 2004</h4>
      <p>Graphic Design, Art, Maths (A levels)</p>
    </div>

  </div>

</div>
