const myaccess_template = document.createElement('template');
myaccess_template.innerHTML = `
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <!-- Icons -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
    <!-- Window tab icon -->
    <link rel="icon" href="/../assets/images/webicon.png" type="images/x-icon">
    
    <style>
        .navbar {
            padding: 20px;
            text-align: center;
            // background-color: #f4f4f4;
        }

        .container {
            display: flex;
            // justify-content: center;
            // align-items: center;
            gap: 10px;
        }

        #password {
            padding: 5px;
            font-size: 16px;
        }

        button {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>

    <div class="navbar">
        <div class="container">
            <!--<input type="password" id="password" placeholder="Password">-->
            <div type="password" id="password" placeholder="Password"></div>
            <button id="unlockBtn">Open Resume</button>
        </div>
    </div>
`;

class MyAccess extends HTMLElement {
    constructor() {
        super();    
        this.unlockResume = this.unlockResume.bind(this);

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(myaccess_template.content.cloneNode(true));
    }

    connectedCallback() {
        // Set up event listener for button click
        this.shadowRoot.querySelector('#unlockBtn').addEventListener('click', this.unlockResume);
    }

    disconnectedCallback() {
        // Clean up event listeners
        this.shadowRoot.querySelector('#unlockBtn').removeEventListener('click', this.unlockResume);
    }

    unlockResume() {
        const password = this.shadowRoot.querySelector("#password").value;
        window.open("../js/access_layout/mz.pdf", "_blank"); 
        // if (password === "") {
        //     // Adjust the path to mz.pdf based on your folder structure
        //     window.open("../js/access_layout/mz.pdf", "_blank");  
        // } else {
        //     alert("Incorrect password.");
        // }
    }
}

window.customElements.define('my-access', MyAccess);