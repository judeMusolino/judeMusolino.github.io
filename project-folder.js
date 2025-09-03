import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

class ProjectFolder extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    link: { type: String }
  };

  static styles = css`
    .folder {
      display: inline-block;
      padding: 1rem;
      border: 2px solid #ccc;
      background: #fff;
      box-shadow: 4px 4px 0px #aaa;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .folder:hover {
      transform: translateY(-5px);
    }
  `;

  render() {
    return html`
      <div class="folder" @click=${() => this.openFile()}>
        📂 <br>${this.title}
      </div>
    `;
  }

  openFile() {
    const event = new CustomEvent('open-project', {
      detail: { title: this.title, description: this.description, link: this.link },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}

customElements.define('project-folder', ProjectFolder);
