import React from "react";

export default function Header(props) {
  return (
    <header className="row block center">
      <div>
        <a herf="#/">
          <h1> KIYA Skin Care</h1>
        </a>
      </div>
      <div>
        <a herf="#/cart">Cart</a> <a href="#/sign in">SignIn</a>
      </div>
    </header>
  );
}
