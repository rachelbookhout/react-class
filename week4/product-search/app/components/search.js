var React = require('react');
var SearchBar = require('./searchbar.js');
var Results = require('./results');


class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
	}

	handleQuery(query) {
		this.setState({'query': query.toLowerCase().trim()})
	}

	render() {

		return (

			<div className="search">
				<SearchBar onQuery={this.handleQuery.bind(this)} /> 
				<Results products={this.props.products} query={this.state.query} />
			</div>
		)
	}
}

module.exports = Search;