class Header extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="style/css/components.css">

        <div class="global-header">
            <div class="logo" part="logo">
                <a href="#" id="land" data-state="inactive" onclick="changePage(this);">
                    <img class="icon-img" src="imgs/icon.png" alt="product icon">
                    <img class="logo-img" src="imgs/logo.svg" alt="product logo">
                </a>
            </div>
            <div class="nav">
                <ul class="menu">
                    <li id="about"    data-state="inactive" onclick="changeNav(this);"><a href="#"><span>ABOUT</span></a></li>
                    <li id="news"     data-state="inactive" onclick="changeNav(this);"><a href="#"><span>NEWS</span></a></li>
                    <li id="download" data-state="inactive" onclick="changeNav(this);"><a href="#"><span>DOWNLOAD</span></a></li>
                </ul>
            </div>
        </div>
        `
    }
  }
   
  customElements.define('global-header', Header)