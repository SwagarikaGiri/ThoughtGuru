import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';

import './App.css';
import author1 from './assets/img/1.jpeg'
import author2 from './assets/img/2.jpeg'
import author3 from './assets/img/3.jpeg'
// import author4 from './assets/img/4.jpeg'
import LoadingPage from './components/LoadingPage'
import ResultTable from './components/ResultTable'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic:'',
      loading:false,
      submitError:'',
      data:{}


    };
    // this.onChangeValue=this.onChangeValue.bind(this)
    // this.onInputChange=this.onInputChange.bind(this)
    this.onChangeHandler= this.onChangeHandler.bind(this)
  }
  onChangeHandler(event) {
    this.setState({submitError:''})
    this.setState({topic:event.target.value});
    
  }

 submitHandler=(event)=>{
   event.preventDefault();
   let topic = this.state.topic
   if(!topic){
     this.setState({submitError:'Please enter a topic'})
   }

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
        <a className="navbar-brand js-scroll-trigger" href="#page-top">TweetGuru</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#results">Get Thought Leaders</a>
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
          <div className="intro-lead-in">TweetGuru : Recommendation system that suggest us influencer or thought leader in various field of ML/AI</div>
          {/* <div className="intro-heading text-uppercase"></div> */}
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
        
      </div>
    </header>
  
    
    <section className="page-section" id="results">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Get Thought Leaders </h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
           
            <h6>Please enter the topic</h6>
            <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.submitHandler}>
            {/* <div className="row"> */}
              <div >
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Enter Topic" onChange={this.onChangeHandler} value={this.state.topic}/>
                  <p className="help-block text-danger">{this.state.submitError}</p>
                </div>
              </div>
      
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-primary text-uppercase" type="submit">Get Results</button>
              </div>
            {/* </div> */}
            </form>
            {/* <form onSubmit = {this.onHandleSubmit}>
      <input type="text" name="name" value={this.state.accession} onChange={this.onInputChange}/>
      <div onChange={this.onChangeValue}>
        <input type="radio" value="bp" name="ontology" /> BP
        <input type="radio" value="mf" name="ontology" /> MF
        <input type="radio" value="cc" name="ontology" /> CC
      </div>
    
    <input type="submit" value="Submit" />
  </form>
  {loading ? <LoadingPage/>: <ResultTable results={data}/>} */}
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
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author1} alt=""/>
              <h4>Swagarika J Giri</h4>
              <p className="text-muted">ASDE-II</p>
              <p className="text-muted">Publicis Sapient</p>
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
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author2} alt=""/>
              <h4>Pralay Ramteke</h4>
              <p className="text-muted"> Data Scientist</p>
              <p className="text-muted"> Wunderman Thompson Commerce </p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://twitter.com/pralayramteke">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/puevigreven">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/pralay-ramteke/?originalSubdomain=in">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author3} alt=""/>
              <h4>Pramod Pai </h4>
              <p className="text-muted">Masters</p>
              <p className="text-muted">Northeastern University</p>
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
          {/* <div className="col-sm-3">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author1} alt=""/>
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
         
        */}
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Something about Made-With_Ml</p>
          </div>
        </div>
      </div>
    </section>
    
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; TweetGuru</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
            
              <li className="list-inline-item">
                <a href="https://github.com/puevigreven/TwitterThoughtLeaders">
                <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/SwagarikaGiri/ThoughtGuru">
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
