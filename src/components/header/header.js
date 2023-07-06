import { DivComponent } from "../../common/div-component";

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="./src/static/logo.svg" alt="логотип"/>
            </div>
        `;

        return this.el
    }
}