import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"; 


export class MyProj extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.description="This is the description of the project.";
    this.title="Project Title";
    this.image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"; 
    this.button="Details"; 
  }

  static get styles() {
    return css`
      
      :host {
        display: inline-flex;
      }

      
      .proj {
        background-color: #efefefef; 
        border-radius: 5%;
        width: 300px; 
        height: 240px; 
        padding: 16px; 
        margin: 2px auto;  
}

      #proj-list {
      display: flex;
}
      .heading {
        font-size: 32px; 
        color: black; 
        text-align: center;
        margin: 8px; 
        height: 36px;  
        overflow: hidden; 
}

      .image {
        float: center; 
        margin: 8px 4px 4px 10px; 
        border-radius: 0%;     
}

      .btn {
        background-color: blue; 
        color: white; 
        font-size: 16px; 
        border-radius: 0%; 
        /*1 value is all margins, 2 values is top+bot, l+r*/
        padding: 8px 40px; 
        /*margin goes up,right,down,left*/
        margin: 16px 4px 4px 80px; 
}

      .btn:focus,
      .btn:hover {
        background-color: lime; 
}

    `;
  }

  render() {
    return html`
      <div class="wrapper">
      <div class="proj">
      <div class="heading">${this.title}</div>
      <div class="image">
      <meme-maker class="meme" alt="Cat stalking a small toy" image-url="${this.image}" top-text="" bottom-text=""> </meme-maker> 
      </div>
      <p class="para">${this.para}</p>
      <button class="btn">${this.button}</button>
    </details>
    </div>
  </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type:  String },
      para: { type: String },
      button: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}


globalThis.customElements.define(MyProj.tag, MyProj);
