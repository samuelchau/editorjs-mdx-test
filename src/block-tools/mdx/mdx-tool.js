import { default as React } from 'react';
import ReactDOM from 'react-dom';
import MdxBlock from './MdxBlock';

export default class MdxTool {

  static get toolbox() {
    return {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="208" height="128" viewBox="0 0 208 128"><rect width="198" height="118" x="5" y="5" ry="10" stroke="#000" stroke-width="10" fill="none"/><path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z"/></svg>',
      title: 'MDX',
    };
  }

  static get enableLineBreaks() {
    return true
  }

  static get isReadOnlySupported() {
    return true;
  }

  constructor({ data }) {
    console.log("constructor() called");
    this.data = data;

    this.nodes = {
      holder: null,
    };
  }

  render() {
    console.log("render() called");
    const rootNode = document.createElement('div');
    rootNode.contentEditable = true;
    rootNode.setAttribute('spellcheck', false);
    this.nodes.holder = rootNode;

    const onDataChange = (newData) => {
      this.data = newData;
    }

    ReactDOM.render(
      (
        <MdxBlock
          onDataChange={onDataChange}
          data={this.data} />
      ),
      rootNode);

    return this.nodes.holder;
  }

  save() {
    console.log("save() called");
    return this.data;
  }
}
