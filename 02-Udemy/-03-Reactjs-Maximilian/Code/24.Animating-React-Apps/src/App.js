import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = { isModalOpen: false, showBlock: false };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          onClick={() =>
            this.setState((presState) => ({ showBlock: !presState.showBlock }))
          }
          className="Button"
        >
          Toggle
        </button>

        <Transition
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
          in={this.state.showBlock}
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity .5s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>

        {/* <Modal show={this.state.isModalOpen} closed={this.closeModal} />
        <Backdrop show={this.state.isModalOpen} /> */}

        {/*  use Conditional rendering to make sure that element remove from DOM when its headen for accessability */}

        {/* <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.showModal}
          timeout={400}
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition> */}

        {this.state.isModalOpen && (
          <Modal show={this.state.isModalOpen} closed={this.closeModal} />
        )}
        {this.state.isModalOpen && <Backdrop show={this.state.isModalOpen} />}
        <br />
        <br />
        <button onClick={this.showModal} className="Button">
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
