import React from "react";
import './descriptionbox.css';
export default function DescriptionBox(){
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
              <div className="descriptionbox-nav-box fade">Reviews(122)</div> 
            </div>
            <div className="descriptionbox-description">
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum dicta odio consequuntur reprehenderit debitis autem
                , quas, sint excepturi aut eum magnam cum impedit assumenda sit eaque perspiciatis, quaerat iusto.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam adipisci dolore eos aut voluptates inventore quam,
                 labore odio illum totam blanditiis assumenda consectetur, earum repellendus. Hic, unde? Aspernatur, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consectetur? Laudantium perspiciatis nobis libero 
                 facilis quidem quas sed labore aliquid, nesciunt molestias culpa. Ex mollitia sint corrupti velit, quaerat cumque!</p>

            </div>

        </div>
    );
}