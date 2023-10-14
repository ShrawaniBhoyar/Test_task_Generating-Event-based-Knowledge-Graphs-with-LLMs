
import ProcessEvents from './components/processEvents'

const Header = () => {
  return (
    <>
      <div className="pricing-header  text-center" style={{ width: '100%', textAlign: "center", marginTop: "5% !important", margin: "auto" }}>
        <h1 className="display-3" ><b><u>Generate</u></b> Event-Based Knowledge Grap</h1>
        <p className="lead" style={{ textWrap: "nowrap" }}>Quicly convert your events into knowledge grap using google generative AI.</p>
        <br></br>
      </div>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">

            <small className="d-block mb-3 text-muted">&copy; 2023</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Types of Graphs</a></li>
              <li><a className="text-muted" href="#">Next Js</a></li>
              <li><a className="text-muted" href="#">Databases & Support*</a></li>
              <li><a className="text-muted" href="#">Bootstap 5</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Knowledge Graph</a></li>
              <li><a className="text-muted" href="#">Google Generative Apis</a></li>
              <li><a className="text-muted" href="#">Next JS</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div className="container">
          <ProcessEvents />
          <Footer />
        </div>
      </main>
    </>
  )
}
