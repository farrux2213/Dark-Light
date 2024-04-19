import { Component } from "react";
import "./App.css";

const styleWrapperDark = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  backgroundColor: "black",
};
const styleWrapperLight = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  backgroundColor: "white",
};
const styleTextLight = {
  color: "#000",
};
const styleTextDark = {
  color: "#fff",
};
class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   people: [
    //     {
    //       id: 1,
    //       name: "John",
    //       skill: "React",
    //       age: 30,
    //       tags: ["React", "TypeScript"],
    //     },
    //     {
    //       id: 2,
    //       name: "Jane",
    //       skill: "C++",
    //       age: 30,
    //       tags: ["C++", "TypeScript"],
    //     },
    //     {
    //       id: 3,
    //       name: "Jack",
    //       skill: "Python",
    //       age: 30,
    //       tags: ["Python", "TypeScript"],
    //     },
    //   ],
    // };
    this.state = {
      theme: "Light",
    };
  }
  render() {
    const themeDark = () => {
      if (this.state.theme === "Light")
        this.setState({
          theme: "Dark",
        });
      else
        this.setState({
          theme: "Light",
        });
    };

    return (
      // <div className="styleWrapper">
      //   <h1>Mapping</h1>
      //   {this.state.people.map(({ id, name, age, skill, tags }) => (
      //     <div key={id}>
      //       <h1>{name}</h1>
      //       <h2>{skill}</h2>
      //       <h3>{age}</h3>
      //       <h2>
      //         {tags.map((value, index) => (
      //           <div key={index}>
      //             <span>#{value}</span>
      //           </div>
      //         ))}
      //       </h2>
      //     </div>
      //   ))}
      // </div>
      <div
        style={
          this.state.theme === "Light" ? styleWrapperLight : styleWrapperDark
        }
      >
        <h1
          style={this.state.theme === "Light" ? styleTextLight : styleTextDark}
        >
          Mapping
        </h1>
        {this.state.theme}
        <button
          onClick={themeDark}
          style={this.state.theme === "Dark" ? styleTextDark : styleTextLight}
        >
          Switch to {this.state.theme === "Light" ? "Dark" : "Light"}
        </button>
      </div>
    );
  }
}

export default App;
