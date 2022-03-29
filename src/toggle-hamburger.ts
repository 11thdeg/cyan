import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("toggle-hamburger")
export class ToggleHamburger extends LitElement {
	static styles = [
		css`
			:host {
				display: block;
			}
		`
	]

	@property({type: Boolean}) toggled = false

	render() {
		return html`<input type="checkbox" .checked=${this.toggled}>`
	}
}