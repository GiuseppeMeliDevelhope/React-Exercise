import React from "react";
import "./Container.css"; 

 class Container extends React.Component {
    render() {
        const { title, children } = this.props;
    
        return (
          <div className="container">
            {title && <h2 className="title">{title}</h2>}
            {children}
          </div>
        );
      }
    }
    
    export default Container;
    