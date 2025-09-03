import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

class ProjectFile extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    link: { type: String }
  };

  static styles = css`
    .file {
      font-family: 'Courier New', monospace;
    }
    h2 {
      margin-top: 0;
    }
    a {
      color: #2a4d2e;
      font-weight: bold;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <div class="file">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <p><a href="${this.link}" target="_blank">View on GitHub</a></p>
      </div>
    `;
  }
}

customElements.define('project-file', ProjectFile);
