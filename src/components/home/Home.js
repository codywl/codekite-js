// This component is the home view of the center pane.
// Author: Cody Welsh
// License: GPL 3.0

import React from "react";
import styles from "../../styles/styles.css";

class PaneHome extends React.Component {
  render() {
    return (
      <div className={styles["panes__content"]}>
        <h1>Home Pane</h1>
        <p>This is the home pane; it&apos;s contained in Home.js.</p>
      </div>
    );
  }
}

export default PaneHome;
