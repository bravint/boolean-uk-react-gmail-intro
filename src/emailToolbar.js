import downloadButton from './assets/icons/download-button.png'
import BackArrow from './backArrow'
import RubbishButton from './rubbishButton.js'

import './styles/emailToolbar.css'

function EmailToolbar () {
    return (
        <nav className="email-toolbar">
            <ul>
                <BackArrow />
                <li>
                    <img className="icon" src={downloadButton} alt="archive button" />
                </li>
                <RubbishButton />
            </ul>
            <div className="space"></div>
            <div>
                <p>1 of 25</p>
                <button>&lt;</button>
                <button>&gt;</button>
            </div>
        </nav>
    )
}

export default EmailToolbar