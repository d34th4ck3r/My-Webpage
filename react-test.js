class HelloMessage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "Hello ", this.props.name);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(HelloMessage, {
  name: "Taylor"
}), document.getElementById('react-div'));
