const priorities = [
  {
    number: "01",
    title: "Tough on violent crime",
    text: "Lacey voted to stop no-cash bail for violent criminals and to end parole for rapists and murderers.",
  },
  {
    number: "02",
    title: "Lower health care costs",
    text: "She supports policies that lower the cost of insurance and expand access to health care for Texas families.",
  },
  {
    number: "03",
    title: "Support public schools",
    text: "Lacey voted for pay raises for school librarians, counselors, nurses, and teachers who take on harder teaching jobs.",
  },
  {
    number: "04",
    title: "Responsible AI rules",
    text: "She passed AI regulations that ban behavioral manipulation, social scoring, and deepfakes.",
  },
  {
    number: "05",
    title: "Rein in home appraisals",
    text: "Lacey will fight to lower property taxes by bringing the out-of-control home appraisal process back in line.",
  },
];

const endorsements = [
  "President Donald J. Trump",
  "Governor Greg Abbott",
  "Senator Ted Cruz",
  "Land Commissioner Dawn Buckingham",
  "Harris County Commissioner Tom Ramsey",
  "Houston City Council Member Amy Peck",
  "Houston City Council Member Mary Nan Huffman",
  "Texas House Republican Caucus PAC",
  "Houston Police Officers Union",
  "Houston Professional Fire Fighters Association",
  "Texas State Rifle Association",
  "Texas Alliance for Life",
  "Texas Oil and Gas Association",
  "National Federation of Independent Business",
  "Texas Homeschool Coalition",
];

const volunteerOptions = [
  "Request a yard sign",
  "Endorse Lacey for re-election",
  "Make phone calls",
  "Blockwalk",
  "Take materials to a meeting",
  "Write letters",
  "Work the polls",
  "Sign me up for email updates",
];

export default function Home() {
  const searchParams = new URLSearchParams(window.location.search);
  const submitted = searchParams.get("submitted") === "1";
  const formReturnUrl = `${window.location.origin}/?submitted=1#volunteer-form`;
  const formPageUrl = `${window.location.origin}/#volunteer-form`;

  return (
    <main>
      <div className="election-bar" aria-label="Election dates">
        <span>Early voting: October 19–October 30</span>
        <span>Election day: Tuesday, November 3</span>
      </div>

      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Lacey Hull home">
          <img src="/images/lacey-hull-logo.png" alt="Lacey Hull for State Representative" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#issues">Issues</a>
          <a href="#district">District</a>
          <a href="#endorsements">Endorsements</a>
          <a href="#volunteer">Get involved</a>
        </nav>
        <a className="button button-red header-donate" href="https://www.laceyhull.com/donate">
          Contribute today
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo">
          <img src="/images/lacey-at-capitol.jpg" alt="Lacey Hull with a young constituent in the Texas House chamber" />
          <span className="photo-label">Serving West Houston</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Our State Representative · House District 138</p>
          <h1 id="hero-title">
            Proven.<br />
            Conservative.<br />
            <span>For Texas.</span>
          </h1>
          <p className="hero-summary">
            A native Houstonian fighting for safer communities, stronger families, lower costs, and a future where every Texas child can thrive.
          </p>
          <div className="hero-actions">
            <a className="button button-red" href="https://www.laceyhull.com/donate">Contribute now</a>
            <a className="text-link" href="#about">Meet Lacey <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Record highlights">
        <p>Protecting our southern border</p>
        <p>Protecting children online</p>
        <p>Fighting domestic violence</p>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">Meet Lacey Hull</p>
          <h2>Houston roots.<br /><span>Texas resolve.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="lead">
              Lacey Hull is a native Houstonian who was born and raised in House District 138, attended Spring Branch ISD schools, and earned a bachelor&apos;s degree in political science and history from the University of Houston.
            </p>
            <p>
              First elected in 2020, Lacey lives in Spring Branch with her family and attends Bayou City Fellowship Church. She serves as Chair of the House Committee on Human Services and has been appointed to the State Affairs Committee, the Sunset Advisory Commission, and the Joint Committee studying the effects of media on minors.
            </p>
            <p>
              Lacey has championed legislation to promote nutrition and consumer transparency, protect victims of crime, safeguard children online, and defend the rights of families in public education and the child welfare system.
            </p>
            <a className="text-link" href="#issues">See her record <span aria-hidden="true">→</span></a>
          </div>
          <figure className="about-photo">
            <img src="/images/lacey-with-family.jpg" alt="Lacey Hull with family members in a Houston neighborhood" />
            <figcaption>Born, raised, and serving in House District 138.</figcaption>
          </figure>
        </div>
      </section>

      <section className="statement" aria-label="Campaign commitment">
        <p>Individual liberty. Economic opportunity. Public safety. Quality education.</p>
      </section>

      <section className="issues section-shell" id="issues">
        <div className="issues-intro">
          <p className="eyebrow">A proven conservative record</p>
          <h2>Focused on what<br /><span>matters at home.</span></h2>
        </div>
        <div className="priority-list">
          {priorities.map((priority) => (
            <article className="priority" key={priority.number}>
              <span className="priority-number">{priority.number}</span>
              <div>
                <h3>{priority.title}</h3>
                <p>{priority.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="district" id="district">
        <div className="district-number" aria-hidden="true">138</div>
        <div className="district-copy">
          <p className="eyebrow">Texas House District 138</p>
          <h2>West Houston is home.</h2>
          <p>
            Representative Hull proudly serves the hard-working Texans and close-knit communities of Spring Branch, Jersey Village, Spring Valley, Hilshire Village, Tanglewood, and Bear Creek.
          </p>
          <a className="button button-outline" href="https://www.laceyhull.com/our-district">View our district</a>
        </div>
        <img src="/images/community-walk.jpg" alt="Lacey Hull meeting neighbors during a community walk" />
      </section>

      <section className="endorsements section-shell" id="endorsements">
        <div className="section-heading section-heading-light">
          <p className="eyebrow">Endorsed by leaders Texans trust</p>
          <h2>Standing with<br /><span>Lacey Hull.</span></h2>
        </div>
        <div className="endorsement-grid">
          {endorsements.map((endorsement) => (
            <div className="endorsement" key={endorsement}>{endorsement}</div>
          ))}
        </div>
      </section>

      <section className="volunteer" id="volunteer">
        <div className="volunteer-images" aria-label="Campaign volunteers">
          <img src="/images/campaign-team.jpg" alt="Lacey Hull campaign volunteers holding signs" />
          <img src="/images/yard-sign-volunteers.jpg" alt="Volunteers holding Lacey Hull yard signs" />
        </div>
        <div className="volunteer-copy">
          <p className="eyebrow">Join Team Hull</p>
          <h2>Help keep a proven voice in Austin.</h2>
          <p>
            Knock doors, make calls, host a meet-and-greet, or request a yard sign. Every conversation helps build a stronger House District 138.
          </p>
          <a className="text-link red-link volunteer-jump" href="#volunteer-form">Complete the form <span aria-hidden="true">↓</span></a>
        </div>

        <div className="volunteer-form-wrap" id="volunteer-form">
          <div className="form-heading">
            <p className="eyebrow">Get involved</p>
            <h2>Stand with Lacey.</h2>
            <p>Tell us how you would like to help. Required fields are marked below.</p>
          </div>

          {submitted && (
            <div className="form-notice form-success" role="status">
              Thank you. Your information has been received by Team Hull.
            </div>
          )}
          <form className="volunteer-form" action="https://formsubmit.co/campaign@laceyhull.com" method="post">
            <input name="_subject" type="hidden" value="New Lacey Hull volunteer submission" />
            <input name="_template" type="hidden" value="table" />
            <input name="_next" type="hidden" value={formReturnUrl} />
            <input name="_url" type="hidden" value={formPageUrl} />

            <div className="honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="_honey" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <fieldset className="form-section name-fields">
              <legend>Name</legend>
              <label>
                <span>First name <small>(required)</small></span>
                <input name="firstName" type="text" autoComplete="given-name" maxLength={80} required />
              </label>
              <label>
                <span>Last name <small>(required)</small></span>
                <input name="lastName" type="text" autoComplete="family-name" maxLength={80} required />
              </label>
            </fieldset>

            <label className="form-field">
              <span>Email <small>(required)</small></span>
              <input name="email" type="email" autoComplete="email" maxLength={254} required />
            </label>

            <label className="form-field">
              <span>Phone</span>
              <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
            </label>

            <label className="form-field">
              <span>Address</span>
              <input name="address" type="text" autoComplete="street-address" maxLength={240} />
            </label>

            <fieldset className="form-section interest-fields">
              <legend>I&apos;d like to:</legend>
              {volunteerOptions.map((option) => (
                <label className="check-row" key={option}>
                  <input name="interests" type="checkbox" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>

            <label className="check-row consent-row">
              <input name="smsConsent" type="checkbox" value="yes" />
              <span>
                If I provide a mobile number, I consent to receive informational text messages from Lacey Hull for Texas. Message frequency may vary. Message and data rates may apply. Text STOP to opt out or HELP for help.
              </span>
            </label>

            <button className="button button-red form-submit" type="submit">Submit</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/images/lacey-hull-logo.png" alt="Lacey Hull for State Representative" />
        </div>
        <div>
          <p>Political Ad Paid for by Lacey Hull for Texas</p>
          <p>Treasurer, Elizabeth “Buffie” Ingersoll</p>
          <p>PO Box 19231 · Houston, TX 77224</p>
        </div>
        <div className="footer-links">
          <a href="https://www.laceyhull.com/privacy-policy">Privacy policy</a>
          <a href="https://www.laceyhull.com/termsandconditions">Terms &amp; conditions</a>
          <a href="http://facebook.com/LaceyHullForTexas">Facebook</a>
          <a href="http://instagram.com/LaceyHullforTexas">Instagram</a>
        </div>
      </footer>
    </main>
  );
}
