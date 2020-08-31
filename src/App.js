import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Tree.js";
import "@ui5/webcomponents/dist/TreeItem.js";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Toast";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/MultiComboBox";
import "@ui5/webcomponents-fiori/dist/ShellBar";


class App extends Component {
  constructor (props) {
    super(props);
    this.switch = React.createRef();
  }

/*   componentDidMount() {
    this.switch.addEventListener('change', event => {
        console.log('switch is toggled');
    })
  } */

  buttonClick = () => {
    console.log("Button clicked");
    const toast = document.getElementById('wcToastBasic');
    console.log("DOM element found");
    console.log(toast);
    toast.show();
  }

  render () {
    const spanStyle = {
      lineHeight: '1.4rem',
    };

    const tableStyle = {
      width: '12rem',
    };
    
    return (
      <div className="App">
        <ui5-shellbar
          primary-title="Corporate Portal"
          secondary-title="secondary title"
          show-notifications
          notification-count="22"
        >
            <ui5-avatar slot="profile" image="../../../assets/images/avatars/woman_avatar_5.png"></ui5-avatar>
            <img slot="logo" src="../../../assets/images/sap-logo-svg.svg"/>
            <ui5-input slot="searchField" placeholer="Enter service..."></ui5-input>
        </ui5-shellbar>
        <div className="Page">
          <div>
            <ui5-title level="H2">UI5 Web Components, React demo application.</ui5-title>
          </div>
          <div className="Content">
            <ui5-label>UI5 Button</ui5-label>
            <br /><br />
            <ui5-button ref={this.switch} click={this.buttonClick}>Hello!</ui5-button>
            
            <br /><br />
            <ui5-label>UI5 Tree</ui5-label>
            <br /><br />
            <ui5-tree id="myTree" class="full-width">
              <ui5-tree-item expanded text="Tree 1" icon="paste" selected>
                <ui5-tree-item expanded text="Tree 1.1" selected>
                  <ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>
                  <ui5-tree-item text="Tree 1.1.2"></ui5-tree-item>
                </ui5-tree-item>
              </ui5-tree-item>
              <ui5-tree-item text="Tree 2" icon="copy">
                <ui5-tree-item text="Tree 2.1">
                  <ui5-tree-item text="Tree 2.1.1"></ui5-tree-item>
                  <ui5-tree-item text="Tree 2.1.2">
                    <ui5-tree-item text="Tree 2.1.2.1"></ui5-tree-item>
                    <ui5-tree-item text="Tree 2.1.2.2"></ui5-tree-item>
                    <ui5-tree-item text="Tree 2.1.2.3"></ui5-tree-item>
                    <ui5-tree-item text="Tree 2.1.2.5"></ui5-tree-item>
                  </ui5-tree-item>
                </ui5-tree-item>
                <ui5-tree-item text="Tree 2.2"></ui5-tree-item>
              </ui5-tree-item>

              <ui5-tree-item expanded text="Tree 3 (no icon)">
              </ui5-tree-item>
            </ui5-tree>

            <br /><br />
            <ui5-label>UI5 Multi Combo Box</ui5-label>
            <br /><br />
            <ui5-multi-combobox placeholder="Choose your countries">
              <ui5-mcb-item selected text="Argentina"></ui5-mcb-item>
              <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
              <ui5-mcb-item text="Denmark"></ui5-mcb-item>
              <ui5-mcb-item text="England"></ui5-mcb-item>
              <ui5-mcb-item text="Albania"></ui5-mcb-item>
              <ui5-mcb-item text="Morocco"></ui5-mcb-item>
              <ui5-mcb-item text="Portugal"></ui5-mcb-item>
              <ui5-mcb-item text="Germany"></ui5-mcb-item>
              <ui5-mcb-item text="Philippines"></ui5-mcb-item>
              <ui5-mcb-item text="Paraguay"></ui5-mcb-item>
            </ui5-multi-combobox>

            <br /><br />
            <ui5-label>UI5 Table</ui5-label>
            <br /><br />
            <ui5-table class="demo-table" id="table" no-data-text="No Data" show-no-data>
              <ui5-table-column slot="columns" style={tableStyle}>
                <span style={spanStyle}>Product</span>
              </ui5-table-column>

              <ui5-table-column slot="columns" min-width="800" popin-text="Supplier">
                <span style={spanStyle}>Supplier</span>
              </ui5-table-column>

              <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin>
                <span style={spanStyle}>Dimensions</span>
              </ui5-table-column>

              <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin>
                <span style={spanStyle}>Weight</span>
              </ui5-table-column>

              <ui5-table-column slot="columns">
                <span style={spanStyle}>Price</span>
              </ui5-table-column>
            </ui5-table>

            <br /><br />
            <button onClick={this.buttonClick}>Fire Toast</button>
            <ui5-toast id="wcToastBasic">UI5 Toast Message</ui5-toast>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
