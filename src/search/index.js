import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm'
import axios from 'axios';
import { actionCreator } from './store'
import { SearchLeft,
	SearchContainer,
	SearchRight,
	GridHead,
	GridBody,
	GridItem,
	HeadTop } from './style'
class SearchWrapper extends React.Component {
	render() {
		let { handleSubmit,routings,size } = this.props;
		let list = routings.toJS();

		return (
			<SearchContainer>
				<SearchLeft>
					<SearchForm onSubmit={handleSubmit}/>
				</SearchLeft>
				<SearchRight>
					<HeadTop>
					<label>
					报价条数:
					</label>
					{
						size
					}
					</HeadTop>
					<ul>
						{
							list.map((item,index) =>{
								let flights = item.fromSegments.segments
								if(item.retSegments){
									var retFlights = item.retSegments.segments;
								}
								
								let flightNumbers  = '';
								flights.map((f,idx)=>{
									if(f.flightNumber)
									flightNumbers += f.flightNumber + '_';
								});
								return (<li key={item.data}>
									<span>{item.validatingCarrier}</span> <span>{flightNumbers}</span> <span>{item.adultTotalPrice}</span>
								</li>)
							})
						}
					</ul>
				</SearchRight>
			</SearchContainer>
		);
	}

}
const mapStates = (state) =>({
	routings:state.getIn(['search','routings']),
	size:state.getIn(['search','size'])
});
const WS =  new WebSocket('ws://localhost:9688/websocket');
WS.onMessage = (msg) => {
	console.log(msg);
}
const handleData = (data) => {
      let result = JSON.parse(data);
      this.setState({count: this.state.count + result.movement});
 }
const mapActions = (dispatch) =>({
	handleSubmit(req){
		let request  = req;
		if(request.size===0){
			request = {};
		}
		if(!request.adtNumber){
			request.adtNumber = 1;
		}
		if (!request.chdNumber) {
			request.chdNumber = 0;
		}
		let json = JSON.stringify(request);
		let message = {};
		message.code = 10000;
		message.extension = json;
		WS.send(JSON.stringify(message));
		/*axios.post('/hello/search',request)
		.then((res) => {

			var arr = [];
			let response = res.data;
			let routings = response.routings;
			let j = 0;
			for (var i = routings.length - 1; i >= 0; i--) {
				arr.push(routings[i]);
				if((i % 100) === 0){
					let na = arr;
					arr=[];
					setTimeout(
						()=>{
							dispatch(actionCreator.showRoutings(na,na.length));
						},j*1000);
					j++;
				}

			}

			
		}).catch((err)=>{
			console.log(err);
		});
		*/


	}
});

export default connect(mapStates,mapActions)(SearchWrapper);