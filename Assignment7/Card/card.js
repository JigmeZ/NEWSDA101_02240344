class CustomCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.classList.add('card');

        wrapper.innerHTML = `
            <div class="card-header">
                <slot name="header"></slot>
            </div>
            <div class="card-content">
                <slot name="content"></slot>
            </div>
            <div class="card-footer">
                <slot name="footer"></slot>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            :host {
                --card-background: #fff;
                --card-border: 1px solid #ddd;
                --card-border-radius: 10px;
                --card-padding: 20px;
                --card-header-bg: #f4f4f9;
                --card-footer-bg: #f4f4f9;
                --card-text-color: #333;
                display: block;
                margin: 20px;
                font-family: Arial, sans-serif;
            }

            .card {
                background-color: var(--card-background);
                border: var(--card-border);
                border-radius: var(--card-border-radius);
                padding: var(--card-padding);
                color: var(--card-text-color);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }

            .card-header, .card-footer {
                background-color: var(--card-header-bg);
                padding: 10px;
                text-align: center;
                font-weight: bold;
                border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
            }

            .card-footer {
                background-color: var(--card-footer-bg);
                border-radius: 0 0 var(--card-border-radius) var(--card-border-radius);
                text-align: center;
                font-weight: normal;
                color: #777;
            }

            .card-content {
                padding: 15px;
            }

            .card-content p {
                margin: 0;
                line-height: 1.6;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define('custom-card', CustomCard);
