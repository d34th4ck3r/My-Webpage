
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

class MainPane extends React.Component {

  updateDesc(){
    return {__html: this.props.nodeDescription};
  }

  render() {
    return(
      <div className="col-md node my-3 my-md-0" id="node">
        <h3 id="node-heading">
          {this.props.nodeTitle}
        </h3>
        <span id="node-desc" dangerouslySetInnerHTML={this.updateDesc()}>
        </span>
      </div>
    )
  }
}


export default class PersonalInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      nodeTitle: "About Me",
      nodeDescription: "I am a Trilingual(English, 日本語, हिंदी) Software Engineer/Architect, based out of Tokyo, who started writing code at the age of 13 and being writing it ever since. Currently I am working as a Senior Software Engineer/Team Lead(Data Engineering) for an American Company and advisor for various startups. The buzzwords for me(right now) are: Reinforcement Learning, Kubernetes, and Blockchain Protocols. I frequently write about these topics which I plan to start posting here soon. Beside all the computer science stuff, I also like discussing about Philosophy and Psychology. Feel to send a message, if you want start a discussion on any of these topics. <br/> \
      This website is WIP."
    }
  }

  setCurrentNode(currentElement){
    const currentTarget = currentElement.currentTarget
    this.setState({
      nodeTitle: currentTarget.children[0].innerHTML,
      nodeDescription: currentTarget.children[1].innerHTML,
    })
  }

  render(){
    return (
      <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md my-3 my-md-0">
          <div>
            <h3>
              &nbsp;
            </h3>
          </div>
          <div className="row row-cols-1 d-none d-md-block">
            <div className="node-btn button d-flex align-items-center" id="about-me" onClick={(e) => this.setCurrentNode(e)}>
              <div className="w-100 text-right mr-2" id="about-me-title">
                About Me
              </div>
              <div hidden="true" id="about-me-desc">
                I am a Trilingual(English, 日本語, हिंदी) Software Engineer/Architect, based out of Tokyo, who started writing code at the age of 13 and being writing it ever since. Currently I am working as a Senior Software Engineer/Team Lead(Data Engineering) for an American Company and advisor for various startups. The buzzwords for me(right now) are: Reinforcement Learning, Kubernetes, and Blockchain Protocols. I frequently write about these topics which I plan to start posting here soon. Beside all the computer science stuff, I also like discussing about Philosophy and Psychology. Feel to send a message, if you want start a discussion on any of these topics. <br/>
                This website is WIP.
              </div>
            </div>
            <div className="node-btn button d-flex align-items-center" id="work-ex" onClick={(e) => this.setCurrentNode(e)}>
              <div className="w-100 text-right mr-2" id="work-ex-title">
                Work Experience
              </div>
              <div hidden="true" id="work-ex-desc">
                Continents I have worked in: North America, Europe, Asia. <br/>
                Companies I have worked for: SoftBank, Square Enix, Wikia, Teradata, Google. <br/>
              </div>
            </div>
            <div className="node-btn button d-flex align-items-center" id="open-src" onClick={(e) => this.setCurrentNode(e)}>
              <div className="w-100 text-right mr-2" id="open-src-title">
                Open Source Contributions
              </div>
              <div hidden="true" id="open-src-desc">
                I am active participants in multiple open source projects. You can find me actively hanging out on IRC of Kubernetes, KubeFlow, Django etc. Recently I have started participating in OpenCollective.
              </div>
            </div>
            <div className="node-btn button d-flex align-items-center" id="interests" onClick={(e) => this.setCurrentNode(e)}>
              <div className="w-100 text-right mr-2" id="interests-title">
                Interests
              </div>
              <div hidden="true" id="interests-desc">
                - Networks and Security (Pen Testing, Intrution Detection etc) <br/>
                - Financial Markets (Derivatives, Algorithmic Trading, Options Trading, Quants etc) <br/>
                - Languages (日本語, हिंदी WIP: 中文, española) <br/>
                - Middleware (ROS, Linux Kernel etc)
              </div>
            </div>
          </div> 
        </div>
        <MainPane nodeTitle={this.state.nodeTitle} nodeDescription={this.state.nodeDescription} />
        <div className="col-md my-3 my-md-0">
          <h3 className="mb2">Contact</h3>
          <div className="row row-cols-1 ">
            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6D%61%69%6C%40%67%61%75%74%61%6D%62%61%6A%61%6A%2E%63%6F%6D" target="_blank" className="col dark-gray width-120 py-2 text-decoration-none">
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                style={{fontSize: `20px`, alignItems: `center`}}
              />
              <span className="h5 header-font px-3">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/d34th4ck3r" target="_blank" className="col dark-gray width-120 py-2 text-decoration-none">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{fontSize: `20px`, alignItems: `center`}}
              />
              <span className="h5 header-font px-3">LinkedIn</span>
            </a>
            <a href="https://github.com/d34th4ck3r/" target="_blank" className="col dark-gray width-120 py-2 text-decoration-none">
              <FontAwesomeIcon
                icon={faGithub}
                style={{fontSize: `20px`, alignItems: `center`}}
              />
              <span className="h5 header-font px-3">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}