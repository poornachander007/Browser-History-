import {Component} from 'react'

class HistoryItem extends Component {
  onDeleteItem = () => {
    const {historyDetails, onDeleteHistory} = this.props
    const {id} = historyDetails
    onDeleteHistory(id)
  }

  render() {
    const {historyDetails} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = historyDetails
    return (
      <li className="li_container">
        <p className="time"> {timeAccessed}</p>
        <div className="history_cont">
          <div className="domainNameAndImg">
            <img src={logoUrl} alt="domain logo" className="logos" />
            <p className="title"> {title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
        </div>
        <div>
          <button
            data-testid="delete"
            type="button"
            onClick={this.onDeleteItem}
            className="deleteButton"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="Delete"
              className="delete_icon"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default HistoryItem
