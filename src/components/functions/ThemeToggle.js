// ---- lit ----
import { LitElement, html, css } from 'lit';

export class ThemeToggleButton extends LitElement {
  static styles = css``;
  render() {
    return html`<div>Toggle Button</div>`;
  }
}

customElements.define('theme-toggle', ThemeToggleButton);
