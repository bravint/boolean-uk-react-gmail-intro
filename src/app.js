import './styles/app.css'

import EmailActions from './emailActions.js'
import EmailBody from './emailBody.js'
import GmailLogo from './gmailLogo.js'
import SearchBar from './searchBar.js'
import EmailToolbar from './emailToolbar.js'
import NavLeftMenu from './navLeftMenu.js'
import RubbishButton from './rubbishButton.js'
import RateStarButton from './rateStarButton.js'
import BackArrow from './backArrow'
import DateInfo from './dateInfo.js'
import UserInfo from './userInfo.js'
import SenderInfo from './senderInfo.js'
import Title from './title.js'
import Avatar from './avatar.js'

function App() {
  return (
    <div className="app">
      <header className="header">
        <GmailLogo />
        <SearchBar />
      </header>
        <NavLeftMenu />
      <main className="email-view">
        <EmailToolbar />
        <article className="email-content">
            <Title />
          <header className="email-content--header">
            < Avatar />
            <div className="email-info">
              <SenderInfo />
              <UserInfo />
            </div>
            <DateInfo />
            <div className="email-action-icons">
              <ul>
                <BackArrow />
                <RateStarButton />
                <RubbishButton />
              </ul>
            </div>
          </header>
          <EmailBody />
          <EmailActions />
        </article>
      </main>
    </div>
  )
}

export default App
