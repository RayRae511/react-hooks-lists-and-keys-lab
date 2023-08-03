import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */
    
     links.map((links) => (
      <a key={links} href={`${links}`}>
      {links}
      </a>
     ))
  }
 
  </nav>;
}

export default NavBar;
