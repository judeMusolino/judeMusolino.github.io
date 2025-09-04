import { LitElement, html, css } from 'https://unpkg.com/lit@3.1.2/index.js?module';

export class MyProj extends LitElement {
  static get tag() {
    return 'my-proj';
  }

  static get properties() {
    return {
      title: { type: String },
      para: { type: String },
      image: { type: String },
      date: { type: String },
      link1: { type: String },
      link2: { type: String },
      link1name: { type: String },
      link2name: { type: String },
      showModal: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.para = "";
    this.image = "";
    this.date = "";
    this.link1 = "";
    this.link2 = "";
    this.link1name = "";
    this.link2name = "";
    this.showModal = false;
  }

  static get styles() {
    return css`
      :host { 
        display: inline-flex; 
        align-content: left; 
        margin: 4rem;
      }

      .proj {
        width: 400px;
        border-radius: 10%;
        overflow: hidden;
        cursor: pointer;
        background: #efefef;
        border: 1px solid #131111;
        box-shadow: 2px 2px 0 #131111;
        transition: transform 0.4s ease, filter 0.4s ease;
        transform-origin: top center;
      }

      .proj:hover {
        transform: scale(1.05);
        filter: drop-shadow(0 6px 6px #1311116a);
      }

      .proj img { width: 100%; height: 180px; object-fit: cover; }

      .proj-title { text-align: center; font-weight: bold; margin: 8px 0; }

      .modal-overlay {
        display: flex;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: #13111199;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }

      .modal {
        background: #fff;
        border-radius: 8%;
        max-width: 50%;
        padding: 20px;
        position: relative;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      }

      .close-btn {
        position: absolute;
        top: 10px;
        right: 15px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
      }

      .modal img { width: 100%; border-radius: 5px; margin-bottom: 10px; }

      .modal h2 { margin-top: 0; }

      .links a { margin-right: 10px; color: blue; text-decoration: underline; }
    `;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  render() {
    return html`
      <div class="proj" @click=${this.toggleModal}>
        <img src="${this.image}" alt="${this.title}" />
        <div class="proj-title">${this.title}</div>
      </div>

      ${this.showModal ? html`
      <div class="modal-overlay" @click=${e => { if(e.target.classList.contains('modal-overlay')) this.toggleModal(); }}>
        <div class="modal">
          <div class="close-btn" @click=${this.toggleModal}>×</div>
          <img src="${this.image}" alt="${this.title}" />
          <h2>${this.title}</h2>
          <p>${this.para}</p>
          <p><strong>Date:</strong> ${this.date}</p>
          <div class="links">
            ${this.link1 ? html`<a href="${this.link1}" target="_blank">${this.link1name}</a>` : ''}
            ${this.link2 ? html`<a href="${this.link2}" target="_blank">${this.link2name}</a>` : ''}
          </div>
        </div>
      </div>
      ` : ''}
    `;
  }
}

customElements.define(MyProj.tag, MyProj);