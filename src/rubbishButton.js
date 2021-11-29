import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function RubbishButton() {
    return (
        <li>
        <img
          className="icon"
          src={rubbishButton}
          alt="delete button"
        />
      </li>
    )
}

export default RubbishButton