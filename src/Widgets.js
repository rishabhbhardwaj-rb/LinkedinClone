import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle('IND vs SA', 'Solid comeback by team India, defended the total in style: Irfan Pathan')}
        {newsArticle('Unacademy', 'Unacademy launches its offline learning center in Kota')}
        {newsArticle('Table Tennis', "India's skewed Commonwealth Games selection policy and a lose-lose situation")}
        {newsArticle('Opportunity for entrepreneurs', 'Railway Minister on first Bharat Gaurav train')}
        {newsArticle('Delhi', 'Mock bus lane with stop to be created to train drivers')}
        {newsArticle('Agnipath scheme', 'Capt Amarinder, Cong CMs question logic, intention')}
    </div>
  )
}

export default Widgets