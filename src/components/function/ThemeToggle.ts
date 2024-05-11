// ---- lit ----
import { LitElement, html } from 'lit';

export class ThemeToggleButton extends LitElement {
  render() {
    return html`<div>Toggle Button</div>`;
  }
}

customElements.define('theme-toggle', ThemeToggleButton);