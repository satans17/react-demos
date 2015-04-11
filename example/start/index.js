var React = require('react');
var Component = require('./component');
var Simple = Component.simple;
var NodeList = Component.NodeList;
var FindDOMNode = Component.findDOMNode;
var LinkButton = Component.linkButton;
var Input = Component.input;

React.render(
  <Simple name="John" />,
  document.getElementById('demo1')
);





React.render(
  <NodeList>
    <span>hello</span>
    <span>world</span>
  </NodeList>,
  document.getElementById('demo2')
)




React.render(
  <FindDOMNode />,
  document.getElementById('demo3')
);


React.render(
  <LinkButton />,
  document.getElementById('demo4')
)


React.render(
  <Input placeholder='Join' />,
  document.getElementById('demo5')
)