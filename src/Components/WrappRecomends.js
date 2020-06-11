import React from "react";
import Recomended from '../Components/Recomended';
import RecomendsItems from '../Components/RecomendsItems';

const WrappRecomends = () => {

    return (
      <React.Fragment>
          <div className='wrapp_recomend_content'>
              <div className='recomends_heroes'>
                  <span>Рекомендации по героям</span>
                  <Recomended />
              </div>
              <div className='recomends_items'>
                <span>Рекомендации по сборкам</span>
                <RecomendsItems />
              </div>
          </div>
      </React.Fragment>
    );
  };
  
  export default WrappRecomends;