import React from "react";
import { TrendingDown, TrendingUp } from 'react-feather';
import { GoGraph } from "react-icons/go";
import { HiUsers } from "react-icons/hi2";
import { IoCubeSharp } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";
import "./Cards.css";

const iconMap = {
    user: <HiUsers className="card-icon" style={{ backgroundColor: '#e0e7ff', color: '#6366f1' }} />,
    order: <IoCubeSharp className="card-icon" style={{ backgroundColor: '#fef9c3', color: '#facc15' }} />,
    sales: <GoGraph className="card-icon" style={{ backgroundColor: '#dcfce7', color: '#22c55e' }} />,
    pending: <RxCountdownTimer className="card-icon" style={{ backgroundColor: '#fee2e2', color: '#f87171' }} />
};

const Card = (props) => {
    return (
        <div className="Card">
            <div className="icon-container">
                {iconMap[props.type]}
            </div>

            <h1>{props.title}</h1>
            <p>{props.description}</p>

            <div className="trend-row">
                {props.showGraph && (
                    <>
                        <div className="percentage" style={{ color: props.graphColor }}>
                            {props.percentage}
                        </div>
                        <TrendingUp
                            style={{ color: props.graphColor, width: '16px', height: '16px', marginLeft: '5px' }}
                        />
                    </>
                )}

                {props.showDecreaseIcon && (
                    <>
                        <div className="percentage" style={{ color: props.decreaseColor || 'red' }}>
                            {props.percentage}
                        </div>
                        <TrendingDown
                            style={{ color: props.decreaseColor || 'red', width: '16px', height: '16px', marginLeft: '5px' }}
                        />
                    </>
                )}

                <small style={{ marginLeft: '8px', color: 'gray' }}>{props.paragraph}</small>
            </div>

            <span>{props.average}</span>
        </div>
    );
};

export default Card;
