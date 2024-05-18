// ---- lit ----
import { LitElement, html, css } from 'lit';
import { customElement } from "lit/decorators.js";

@customElement("theme-toggle")
export class ThemeToggleButton extends LitElement {
  static styles = css`
    button {
      position: fixed;
      top: 24px;
      right: 20px;
      cursor: pointer;
      inline-size: 54px;
      block-size: 24px;
      padding-inline: 3px;
      padding-block: 3px;
      border-radius: 15px;
      border: none;
      outline: solid 1px var(--txtBT);
      background-color: #e3e7e9;
      box-shadow: 0 2px 5px #20505b52;
      text-align: left;
    }
    span {
      display: inline-block;
      inline-size: 18px;
      block-size: 18px;
      border-radius: 50%;
      outline: solid 1px var(--txtBT);
      background-color: var(--bgNM);
    }
  `;
  render() {
    return html`<button aria-label="サイトのダークモードとライトモードを切り替えるトグルボタン">
      <span></span>
    </button>`;
  }
}