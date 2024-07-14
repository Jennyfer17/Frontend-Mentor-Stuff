import './button.css';

export function Button({handleNext}) {
    const state = true;

    return (
        <div className="button">
            <div>
                {(state && <button className="go-back" name='go-back' onClick={handleNext}>Go Back</button>)}
                <button className="next"
                onClick={handleNext} name='next'
                >Next</button>
            </div>
        </div>
    )
}