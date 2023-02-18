import './Track.css';

//todo renderAction to display button element as its contentis isRemoval property is true

renderAction = () => {
    const { isRemoval } = this.props;
    const content = isRemoval ? '-' : '+';
    
    return (
      <button className="Track-action">
        {content}
      </button>
    );
  }

function Track() {
    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{/*<!-- track name will go here -->*/}</h3>
                <p>{/*<!-- track artist will go here--> | <!-- track album will go here -->*/}</p>
            </div>
            <button className="Track-action"> {/*<!-- + or - will go here -->*/}</button>
        </div>
    );
}


  