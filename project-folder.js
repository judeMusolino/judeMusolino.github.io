import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

class ProjectFolder extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    link: { type: String }
  };

  static styles = css`
    .folder {
      background: #fdd835; /* flat manila/yellow */
      border-radius: 6px;
      padding: 1rem;
      text-align: center;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      transition: transform 0.2s ease;
    }
    .folder:hover {
      transform: translateY(-5px);
    }
    .icon {
      font-size: 3rem;
    }
    h3 {
      margin: 0.5rem 0 0;
      font-size: 1rem;
    }
  `;

  render() {
    return html`
      <div class="folder" @click=${this._openFile}>
        <div class="icon">📁</div>
        <h3>${this.title}</h3>
      </div>
    `;
  }

  _openFile() {
    const event = new CustomEvent("open-file", {
      detail: { title: this.title, description: this.description, link: this.link },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}

customElements.define('project-folder', ProjectFolder);
