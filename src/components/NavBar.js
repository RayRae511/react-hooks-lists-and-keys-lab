import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */
    
     links.map((links) => (
      <a key={link} href={`${link}`} {link}/>
     ))
  }
 
  </nav>;
}

export default NavBar;
