class Land extends HTMLElement {
    constructor() {
         super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="style/css/default.css">
        <link rel="stylesheet" href="style/css/components.css">
        <link rel="stylesheet" href="style/css/pages.css">

        <div class="land-container">
            <!-- float:left -->
            <div class="disp-left">
                <div class="gifs">
                    <img src="imgs/gifs/char1.gif" alt="">
                    <img src="imgs/gifs/char2.gif" alt="">
                    <img src="imgs/gifs/char3.gif" alt="">
                    <img src="imgs/gifs/char4.gif" alt="">
                    <img src="imgs/gifs/char5.gif" alt="">
                    <img src="imgs/gifs/char6.gif" alt="">
                    <img src="imgs/gifs/char7.gif" alt="">
                    <img src="imgs/gifs/char8.gif" alt="">
                    <img src="imgs/gifs/char9.gif" class="char9-gif" alt="">
                </div>
            </div>
    
            <!-- float:right -->
            <div class="disp-right">
                <div class="product-description">
                    <div>
                        <img src="imgs/logo.png" alt="product logo"><br>
                        <div class="main-description">顔イラストでVtuber!<br></div>
                        <div class="sub-description">
                            用意するのは1枚のイラストだけであとはAIにおまかせ.<br>
                            さあ,あなたもVtuber気分を味わおう !
                        </div>
                        <button class="to-download-btn" onclick="window.open('https://drive.google.com/drive/folders/1ZPVfz4f4PAbgHfV33CDD0TPmnyapCzX9','_blank')">ダウンロード</button>
                        <button class="github-btn" onclick="window.open('https://github.com/AnimFaceGAN/Ganimation','_blank')">github</button>
                        <div class="space"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <!----- footer ----->
        <global-footer></global-footer>
        `
    }
  }
   
  customElements.define('land-page', Land)