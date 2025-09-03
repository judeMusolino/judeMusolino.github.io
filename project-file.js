import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

class ProjectFile extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    link: { type: String }
  };

  static styles = css`
    .file {
      background: #fff;
      border-radius: 8px;
      padding: 2rem;
      max-width: 600px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    h2 {
      margin-top: 0;
      color: #2a4d2e;
    }
    p {
      margin: 1rem 0;
    }
    a {
      display: inline-block;
      margin-top: 1rem;
      color: #2a4d2e;
      text-decoration: none;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    button {
      margin-top: 1.5rem;
      padding: 0.5rem 1rem;
      border: none;
      background: #2a4d2e;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background: #3e6e42;
    }
  `;

  render() {
    return html`
      <div class="file">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <a href="${this.link}" target="_blank">🔗 View Project</a>
        <br>
        <button @click=${this._close}>← Close File</button>
      </div>
    `;
  }

  _close() {
    this.dispatchEvent(new CustomEvent("close-file", { bubbles: true, composed: true }));
  }
}

customElements.define('project-file', ProjectFile);
