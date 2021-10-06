import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.css";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "Hats",
          imageUrl:
            "http://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 2,
          title: "Sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 3,
          title: "Jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80",
        },
        {
          id: 4,
          title: "Womens",
          imageUrl:
            "https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        },
        {
          id: 5,
          title: "Mens",
          imageUrl:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1148&q=80",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}
export default Directory;
