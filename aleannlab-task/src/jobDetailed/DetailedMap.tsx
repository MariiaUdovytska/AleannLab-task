import React from 'react';
import '../css/coordinates/detailedMap.css';
import Map from '../coordinates/Map';

type MapProps = {
	lat: number;
	long: number;
	name: string;
	email: string;
	phone: string;
	address: string;
};

function DetailedMap(info: MapProps) {
	return (
		<div className='map'>
			<div className='map__body'>
				<div className='map__body-info'>
					<div className='map__body-info-circle'></div>
					<div className='map__body-info-te'>
						<div className='map__body-info-name'>
							Department name. <br></br>{info.name}
						</div>
						<div className='map__body-info-address'>
							<i className="bi bi-geo-alt-fill"></i>
							<span>{info.address}</span>
						</div>
						<div className='map__body-info-phone'>{info.phone}</div>
						<div className='map__body-info-email'>{info.email}</div>
					</div>
					
				</div>
				<Map lat={info.lat} long={info.long}/>
			</div>
		</div>
	)
}
export default DetailedMap;