import React from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BiMap } from "react-icons/bi";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { LiaArrowsAltSolid } from "react-icons/lia";
import {AiOutlineHeart} from 'react-icons/ai'

const Cards = () => {
  return (
    <div>
      <div className="card">
        <div className="image-container">
        <img src="https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_640.jpg" />
          <div className="overlay-text">
            <h5>For Rent</h5>
          </div>   
          <div className="heart-icon">
            <AiOutlineHeart className="heartIcon"/>
          </div>       
        </div>

        
        <div className="card-body">
          <p>
            <BiMap /> 8558 Pecan St.
          </p>
          <h5 className="card-text">
            RCE Theaters-907 S Beckford Dr,Henderson, NC 27536
          </h5>
          <div class="card-icon">
            <div class="icon">
              <HiOutlineBuildingOffice2 />
              <div class="name">3 Room</div>
            </div>
            
            <div class="icon">
              <LiaBedSolid />
              <div class="name">4 Bed</div>
            </div>
            
            <div class="icon">
              <LiaBathSolid />
              <div class="name">1 Bath</div>
            </div>
            
            <div class="icon">
              <LiaArrowsAltSolid />
              <div class="name">732 sft</div>
            </div>
            
          </div>

          <div className="princeAndReadMore">
            <h5>$5,674</h5>/month
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
