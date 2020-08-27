import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Tree.js";
import "@ui5/webcomponents/dist/TreeItem.js";
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/StandardListItem.js";

function App() {
  return (
    <div className="App">
      <p>This is a UI5 List</p>
      <ui5-list id="myList" class="full-width">
        <ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" info="In-stock" info-state="Success">Pineapple</ui5-li>
        <ui5-li icon="nutrition-activity" description="Occurs between red and yellow" info="Expires" info-state="Warning">Orange</ui5-li>
        <ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" info="Re-stock" info-state="Information">Blueberry</ui5-li>
        <ui5-li icon="nutrition-activity" description="The tropical stone fruit" info="Re-stock" info-state="Error">Mango</ui5-li>
      </ui5-list>

      <p>This is a UI5 Tree</p>
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

      <p>This is a UI5 Button</p>
      <ui5-button>Hello world!</ui5-button>
    </div>
  );
}

export default App;
