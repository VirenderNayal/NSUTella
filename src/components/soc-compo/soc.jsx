import React from 'react';
import './soc.css'
import pic from '../../assets/fsoc.jpeg'

const Soc = () => {
    return (
        <div className="scontainer">
            <div className="box2">NSUT Societies</div>
            <div className="box3">
                <div className="box3second nsut">
                    <img src={pic} alt="mic" />
                </div>
                <div className="box3first">
                    <div className="box3firstcontent">
                        NSUT has a strong culture of student activities. Numerous societies are active on campus that aim to inculcate team values & nurture talent within students. These clubs attract students from all walks of life, cutting across departments. This gives students a chance to experiment with their interests and hobbies.                    </div>
                    <div class="wrapper">
                        <div class="btn">
                            <button type="button"> Know More </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Soc;