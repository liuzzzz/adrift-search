import styled from 'styled-components';
export const SearchLeft = styled.div`
	position: fixed;
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	text-align: center;
	width: 20%;
	background: #eff0f1;

`;
export const SearchRight = styled.div`
	position: relative;
	float: right;
	padding-top: 30px;
	width: 76%;
	outline:1px solid #eee;
	background:none;
	ul.li.span{
		display: block;
		width: 200px;
		text-align: left;

	}
`;
export const HeadTop = styled.div`
	position: relative;
	margin-top: -20px;
	height: 50px;
	font-size: 18px;
	.routingCount{
		font-size: 20px;
		color: red;
	}
`
export const SearchContainer = styled.div`
    overflow: hidden;
	width: 90%;
	margin: 0 auto;

`
export const SearchInput = styled.div`
	margin-bottom: 15px;
	span{
		margin-left: -20px;
		width:25px;
		height:20px;
	}
	.textInput {
		width: 160px;
		height: 20px;
		margin-left: 10px;
		font-size: 14px;
		border-radius: 7px;

	}
	.textTitle{
		width:auto;
		height:auto;
	}	

`
export const SearchButton = styled.button`
	position: relative;
	width: 150px;
	cursor: pointer;
	border-radius: 10px;
	background: #0093d2;
	text-align: center;
	font-size: 25px;
`
export const GridHead = styled.thead`
	height: 40px;
	background: red;
	th{
		width:120px;
	}
`
export const GridBody = styled.tbody`
	background: #eff0f1;
	td{
		width:120px;
	}

`
export const GridItem = styled.div`
	height:30px;
`