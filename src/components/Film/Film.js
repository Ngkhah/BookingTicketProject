import React from 'react'
import './Film.scss'
import moment from 'moment';
import { history } from './../../App'
export default function Film(props) {

	const { item } = props;

	return (
		<div className="main  imgCard" onClick={()=>{
			history.push(`/detail/${item.maPhim}`);
		}}>
			<img src={item.hinhAnh} className="backimg cursor-pointer" />
			<i className="fa fa-play hover:scale-110 motion-reduce:transform-none" />
			<div className="title">
				<p>{item.tenPhim.length > 20 ? <span>{item.tenPhim.slice(0,20)}...</span> : <span>{item.tenPhim}</span>}</p>
			</div>
			<div className="head1">
				<div className="date">
					<p>Ngày & giờ </p>
				</div>
				<div className="rate">
					<p>Đánh giá </p>
				</div>
			</div>
			<div className="head2">
				<div className="date">
					<p>{moment(item.ngayKhoiChieu).format('MMM DD')}, {moment(item.ngayKhoiChieu).format('HH:MM')}</p>
				</div>
				<div className="rate">
					<p>{item.danhGia}/10</p>
				</div>
			</div>
		</div>


	)
}