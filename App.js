

        import React from "react";
        import ReactDOM from "react-dom";
        import ReactDOM from "react-dom/client";



        const parent = [React.createElement("div", {id: "parent",key:1}, React.createElement("div", {id: "child",key:2}, [React.createElement("h1", {id: "heading",key:3}, "I'm an H1 tag"),React.createElement("h2", {id: "heading",key:4}, "I'm an H2 tag")] )),React.createElement("div", {id: "parent",key:5}, React.createElement("div", {id: "child",key:6}, [React.createElement("h1", {id: "heading",key:7}, "I'm an H1 tag"),React.createElement("h2", {id: "heading",key:8}, "I'm an H2 tag")] ))];
        const root = ReactDOM.createRoot(document.getElementById("root"));


        root.render(parent);
        // root.render(parent);
        

        // root.render(parent);
