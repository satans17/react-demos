var React = require('react');

exports = module.exports;

exports.simple = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});


exports.NodeList = React.createClass({
  render: function(){
    return (
      <ol>
      {
        this.props.children.map(function(child){
          return <li>{child}</li>
        })
      }
    </ol>
    )
  }
})


exports.findDOMNode = React.createClass({
  handleClick: function() {
    React.findDOMNode(this.refs.myTextInput).focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});


exports.linkButton = React.createClass({
  getInitialState:function(){
    return {
      linked:false
    }
  },
  handleClick:function(evt){
    this.setState({
      linked:!this.state.linked
    })
  },
  render:function(){
    var text = this.state.linked?'like':'haven\'t like';
    return (
      <p onClick={this.handleClick}>
      You {text} this. Click to toggle;
      </p>
    )
  }
})



exports.input = React.createClass({
  getInitialState: function() {
    return {value: this.props.placeholder};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
      <input type="text" value={value} onChange={this.handleChange} />
      <p>{value}</p>
      </div>
    );
  }
});