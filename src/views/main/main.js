import { AbstractView } from "../../common/view.js"
import { Header } from "../../components/header/header"
import onChange from "on-change";
import { Search } from "../../components/seacrch/search.js";

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
    }

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.setTitle("Поиск книг");
    }

    appStateHook(path) {
        if( path === 'favorites' ) {
            console.log(path)
        }
    }

    render() {
        const main = document.createElement("div");
        main.append(new Search(this.state).render())
        this.app.innerHTML = "";
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader() {
        const header = new Header(this.appState).render()
        this.app.prepend(header);
    }
}