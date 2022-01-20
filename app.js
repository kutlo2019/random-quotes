var React = require('react');
var ReactDOM = require('react-dom');

console.log('Hello')

const myQuotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    author: 'Nelson Mandela' 
  },
  {
    quote: 'It is during our darkest moments that we must focus to see the light',
    author: 'Aristotle' 
  },
  {
    quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail',
    author: 'Ralph Waldo Emerson' 
  },
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier',
    author: 'Mother Teresa' 
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: 'John Lennon' 
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    author: 'James Cameron' 
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    author: 'Oprah Winfrey' 
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor',
    author: 'Eleanor Roosevelt' 
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    author: 'Steve Jobs' 
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney' 
  },
  {
    quote: 'You will face many defeats in life, but never let yourself be defeated',
    author: 'Maya Angelou' 
  }
]
class QuoteBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: myQuotes,
      dispQuote: myQuotes[Math.floor(Math.random() * myQuotes.length )]
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(){
    const rndNum = Math.floor(Math.random() * myQuotes.length)
    this.setState({
      dispQuote: myQuotes[rndNum]
    })
    const quoteBox = document.getElementById('quote-box')
    const tweetBtn = document.getElementById('tweet-quote')
    const rootDiv = document.getElementById('root')
    
    const rndColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    quoteBox.style.color = rndColor;
    tweetBtn.style.color = rndColor;
    rootDiv.style.backgroundColor = rndColor;
  }
  
  render(){
    return (
      <div id="quote-box">
        <QuoteText quoteText={this.state.dispQuote.quote} />
        <QuoteAuth quoteAuth={this.state.dispQuote.author} />
        <div className="row">
          <Tweet />
          <NewQuote handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

class QuoteText extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="text">
        "{this.props.quoteText}"
      </div>
    );
  }
}

class QuoteAuth extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="author">
        "{this.props.quoteAuth}"
      </div>
    );
  }
}

const Tweet = () => {
  return (
    <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
  );
}

const NewQuote = (props) => {
  return (
    <button 
      onClick={props.handleClick}
      id="new-quote"
      ><strong>New Quote</strong></button>
  );
}

const domContainer = document.getElementById('root')
ReactDOM.render(<QuoteBox />, domContainer);