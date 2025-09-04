import { LitElement, html, css } from 'lit';

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
    this.showModal = false;
  }

  static get styles() {
    return css`
      :host { display: inline-block; margin: 12px; }

      .proj {
        width: 300px;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        transition: transform 0.2s;
      }

      .proj:hover { transform: scale(1.03); }

      .proj img { width: 100%; height: 180px; object-fit: cover; }

      .proj-title { text-align: center; font-weight: bold; margin: 8px 0; }

      .modal-overlay {
        display: flex;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.6);
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }

      .modal {
        background: #fff;
        border-radius: 10px;
        width: 400px;
        max-width: 90%;
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
            ${this.link1 ? html`<a href="${this.link1}" target="_blank">Link 1</a>` : ''}
            ${this.link2 ? html`<a href="${this.link2}" target="_blank">Link 2</a>` : ''}
          </div>
        </div>
      </div>
      ` : ''}
    `;
  }
}

customElements.define(MyProj.tag, MyProj);