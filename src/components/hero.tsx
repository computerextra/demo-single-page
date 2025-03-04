export default function Hero() {
  return (
    <div
      id="start"
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage: "url(ggfyjy8.jpg)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row rounded-2xl py-8 px-4 bg-base-200/60">
        <img
          src="https://placehold.co/200x280"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">FIRMENNAME</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quaerat voluptatibus facilis fuga. Aspernatur, numquam possimus
            exercitationem sint voluptates eum, error recusandae pariatur
            voluptas distinctio nesciunt, doloremque sunt commodi illum? Vitae
            obcaecati quod consectetur quia ab impedit sunt odit nemo velit
            nostrum veritatis beatae nobis aliquam, ducimus magnam id eligendi.
            Exercitationem, quasi? Praesentium numquam autem delectus ullam
            natus odit esse?
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Schreiben Sie uns</legend>
              <label className="fieldset-label">Ihre Email-Adresse</label>
              <input
                type="email"
                className="input"
                placeholder="muster@beispiel.de"
              />
              <label className="fieldset-label">Ihre Nachricht</label>
              <textarea
                className="textarea"
                placeholder="Ich finde Ihre Webseite super, ich hätte auch gerne eine. Bitte nehmen Sie kontakt mit mir auf."
                rows={4}
              ></textarea>
              <button className="btn btn-neutral mt-4" disabled>
                Nachricht senden
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
