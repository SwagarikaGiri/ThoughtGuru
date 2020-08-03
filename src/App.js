import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';

import './App.css';
import author1 from './assets/img/1.jpeg'
import author2 from './assets/img/2.jpeg'
import author3 from './assets/img/3.jpeg'
import author4 from './assets/img/4.jpeg'
import LoadingPage from './components/LoadingPage'
import ResultTable from './components/ResultTable'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ontology:'',
      accession:'',
      loading:false,
      data:{}


    };
    this.onChangeValue=this.onChangeValue.bind(this)
    this.onInputChange=this.onInputChange.bind(this)
  }
  onChangeValue(event) {
    this.setState({ontology: event.target.value});
    
  }


  onInputChange(event){

    this.setState({accession: event.target.value});
  }
  showDelayMessage=()=>{
    return(
    <div>
     Please wait for atleast two minutes to get the results
    </div>
    )

  }
  showResultTable=()=>{
    return(
      <div>
       result is here
      </div>
      )

  }

  onHandleSubmit=(event)=>{
    event.preventDefault();
    let accession = this.state.accession
    let ontology = this. state.ontology
    let path = 'http://0.0.0.0:5000/accession?accession_no='+accession+'&ontology='+ontology
    // console.log("***************"+path+"***************")
    this.setState({ loading: true },()=>{
      axios.get(path).then( 
        (response) => { 
          this.setState({
            loading:false,
            data:response.data.data
          })
          
        }, 
        (error) => { 
            console.log(error); 
        }); 
      

    });
   
   
  }
  render()
  {
    let loading = this.state.loading
    let data = this.state.data
    // console.log(this.state)
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Multi-PredGO</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#results">Get Results</a>
            </li>
             <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  
    
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Multi-PredGO is a multi-modal protein function prediction model that uses the protein sequence, protein structure, and protein-protein interaction network-based information to predict GO-based protein function. 
          As the protein function classes are dependent on each other, we have used a neuro-symbolic hierarchical classification model,
           which resembles the structure of Gene Ontology (GO), for effectively predicting the dependent protein functions.</div>
          {/* <div className="intro-heading text-uppercase"></div> */}
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
        
      </div>
    </header>
  
    
    <section className="page-section" id="results">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Get Results</h2>
            <h3 className="section-subheading text-muted">This tool only needs protein sequence as an input. The source code of the model is available on <a href="https://github.com/SwagarikaGiri/Multi-PredGO"><h6>Github Link</h6></a> Example Accession Number : P53368, P27348</h3>
           
            <h6>Please enter the accession number and select the ontology</h6>
            <form onSubmit = {this.onHandleSubmit}>
      <input type="text" name="name" value={this.state.accession} onChange={this.onInputChange}/>
      <div onChange={this.onChangeValue}>
        <input type="radio" value="bp" name="ontology" /> BP
        <input type="radio" value="mf" name="ontology" /> MF
        <input type="radio" value="cc" name="ontology" /> CC
      </div>
    
    <input type="submit" value="Submit" />
  </form>
  {loading ? <LoadingPage/>: <ResultTable results={data}/>}
  </div>
          
        </div>
        <div className="row text-center">
       
        </div>
      </div>
    </section>
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author1} alt=""/>
              <h4>Swagarika J Giri</h4>
              <p className="text-muted">Researcher (M. Tech IIT Patna)</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://twitter.com/swagarika95">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/SwagarikaGiri">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/swagarika-giri-b3102aab/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author2} alt=""/>
              <h4>Pratik Dutta</h4>
              <p className="text-muted">Researcher (Ph. D IIT Patna) </p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://twitter.com/dutta_prat?lang=en">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.iitp.ac.in/~pratik.pcs16/">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/bioinformfaticspratik/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author4} alt=""/>
              <h4>Parth Halani </h4>
              <p className="text-muted">Researcher (B. Tech IIIT Guwahati) </p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/p1halani?tab=repositories">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/p1halani/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author3} alt=""/>
              <h4>Sriparna Saha</h4>
              <p className="text-muted">Assoc. Prof IIT Patna</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://www.iitp.ac.in/~sriparna/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.iitp.ac.in/~sriparna/">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/sriparna-saha-1a1338161/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
         
       
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Pratik Dutta acknowledges Visvesvaraya PhD Scheme for Electronics and IT, an initiative of Ministry of Electronics and Information Technology (MeitY), Government of India for fellowship support. Dr. Sriparna Saha gratefully acknowledges the Young Faculty Research Fellowship (YFRF) Award, supported by Visvesvaraya PhD scheme for Electronics and IT, Ministry of Electronics and Information Technology (MeitY), Government of India, being implemented by Digital India Corporation (formerly Media Lab Asia) for carrying out this research.  </p>
          </div>
        </div>
      </div>
    </section>
    
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; MULTI-PREDGO 2020</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
            
              <li className="list-inline-item">
                <a href="https://github.com/SwagarikaGiri/Multi-PredGO">
                <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/SwagarikaGiri/Multi-PredGO-FrontEnd">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#something">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#something">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
      </div>
    );

  }


  
}

export default App;
