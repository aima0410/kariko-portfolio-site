// ---- lit ----
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('note-list')
export class NoteList extends LitElement {
  @property({ type: String })
  title: string = '';

  @property({ type: String })
  description: string = '';

  static styles = css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      list-style: none;
      letter-spacing: 0.046em;
    }
    li {
      inline-size: 100%;
      padding: 20px 18px 16px 24px;
      border: solid 3px var(--txtDK);
      border-radius: 5px;
      margin-block-end: 20px;
      color: var(--txtDK);
      font-family: var(--ja);
    }
    h4 {
      margin-block-end: 4px;
      font-size: var(--txtLG);
      font-weight: 700;
    }
    p {
      font-size: clamp(11px, 2vw, 14px);
      font-weight: 400;
    }
  `;
  render() {
    return html`<li>
      <h4>${this.title}</h4>
      <p>ここに記事の出だし文が入る。${this.description}</p>
    </li>`;
  }
}
