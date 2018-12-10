import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm'
import axios from 'axios';
import { actionCreator } from './store';
import { SearchLeft,
	SearchContainer,
	SearchRight,
	HeadTop } from './style';
import { Table } from 'antd';
import "antd/dist/antd.css";
const columns = [{
	  	title: '航司',
	  	dataIndex: 'validatingCarrier',
	}, {
	  title: '航班',
	  dataIndex: 'fromSegments',
	  render: seg => {
	  	let flights = [];
	  	for (var i = 0; i < seg.segments.length; i++) {
	  		let v = seg.segments[i];
	  		if(v.flightNumber){
	  			flights.push(v.flightNumber);
	  		}
	  	}
	  	return flights.join('->');
	  }
	}, {
	  title: '成人总价',
	  dataIndex: 'adultTotalPrice',
	}, {
	  title: '儿童总价',
	  dataIndex: 'childTotalPrice',
	}
];
class SearchWrapper extends React.Component {
	render() {
		let { handleSubmit,routings} = this.props;
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
					<label className='routingCount'>
					{
						list.length
					}
					</label>
					</HeadTop>
					<Table columns={columns} dataSource={list} rowKey={record => record.data} expandedRowRender={record => <p style={{ margin: 0 }}>{JSON.stringify(record.fromSegments)}</p>} />
				</SearchRight>
			</SearchContainer>
		);
	}

}
let canRun = true;
const mapStates = (state) =>({
	routings:state.getIn(['search','routings'])
});
const mapActions = (dispatch) =>({
	
	handleSubmit(req){
		if (canRun) {
			canRun = false;
			dispatch(actionCreator.clearRoutings());
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
			axios.get('/search/response.json',request)
			.then((res) => {
				var arr = [];
				let response = res.data;
				let routings = response.routings;
				let rlen = routings.length;
				let j = 0;
				let len = 0;
				for (var i = rlen - 1; i >= 0; i--) {
					arr.push(routings[i]);
					if((i % 50) === 0){
						let na = arr;

						arr=[];
						setTimeout(
							()=>{
								len += na.length;

								dispatch(actionCreator.showRoutings(na));
								if(len === rlen){
									canRun=true;
								}
							},j*1000);
						j++;
					}

				}

				
			}).catch((err)=>{
				console.log(err);
			});
		}
		


	}
});

export default connect(mapStates,mapActions)(SearchWrapper);