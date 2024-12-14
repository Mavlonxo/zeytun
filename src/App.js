import React, { useState } from "react";
import "./App.css";


//Salatlar



// 1chi ovqatlar
import soup1 from './img/b1.jpg'
import soup2 from './img/b2.jpg'
import soup3 from './img/b3.jpg'
import soup5 from './img/b4.jpg'
import soup6 from './img/b5.jpg'
import soup7 from './img/b6.jpg'
import soup8 from './img/b7.jpg'


// 2chi ovqatlar 

import second1  from './img/second1.jpg'

//ichimliklar 

import drink1 from './img/drink1.jpg'
import drink2 from './img/drink2.jpg'
import drink3 from './img/drink3.jpg'

//nonushta
import skrembel from './img/skrembel.jpg'
import omlet from './img/omlet.jpg'
import blinchi from './img/blinchi.jpg'



///salad
import chaban from './img/chaban.jpg'
import murskoy from './img/murskoy.jpg'
import baqalajon from './img/baqalajon.jpg'
import depola from './img/depola.jpg'
import assorti from './img/assorti.jpg'
import morep from './img/morep.jpg'
import cucumber from './img/cucumber.jpg'
import olivia from './img/olivia.jpg'
import akdeniz from './img/akdeniz.jpg'
import yaz from './img/yaz.jpg'
import okey from './img/okey.jpg'
import miyasnoy from './img/miyasnoy.jpg'
import yapon from './img/yapon.jpg'
import steyk from './img/steyk.jpg'
import jarniy from './img/jarniy.jpg'
import last from './img/last.jpg'
import zeytun7 from './img/zeytun1.jpg'
import sol from './img/sol.jpg'

/// 1chi ovqat
import grib from './img/grib.jpg'
import tikvin from './img/tikvin.jpg'
import sup from './img/sup.jpg'
import frikadelka from './img/frikadelka.jpg'




const menu = {
  завтрак: [
    {
      name: "скрембл",
      price: "38 000",
      img: skrembel,
    },
    {
      name: "Омлет с сыром",
      price: "25 000",
      img: omlet,
    },
    {
      name: "Блинчики с мясом",
      price: "8 000",
      img: blinchi,
    },
  ],


  Салат: [
    {
      name: "Чабан салат",
      price: "32 500",
      img: chaban,
    },
    {
      name: "Мужской каприз",
      price: "38 000",
      img: murskoy,
    },
    {
      name: "Салат тёплый с говядиной",
      price: "52 500",
      img: baqalajon,
    },
  
    {
      name: "Салат де поло.",
      price: "43 500",
      img: depola,
    },

    {
      name: "Салат овощной ассорти",
      price: "40 000",
      img: assorti,
    } ,
    {
      name: "Салат с морепродуктам",
      price: "62 000",
      img: morep,
    } ,
    {
      name: "Салат баклажан",
      price: "45 000",
      img: cucumber,
    } ,

    {
      name: "Салат Оливье",
      price: "32 500",
      img: olivia,
    } ,
    {
      name: "Салат Ак дениз",
      price: "45 000",
      img: akdeniz,
    } ,
    {
      name: "Салат Руккола с языком",
      price: "42 000",
      img: yaz,
    },


    {
      name: "Салат Цезарь с криветкой",
      price: "55 000",
      img: okey,
    } ,


    {
      name: "Мясное ассорти",
      price: "160 000",
      img: miyasnoy,
    } ,

    {
      name: "Салат Японский",
      price: "45 000",
      img: yapon,
    } ,
    {
      name: "Стейк салат",
      price: "92 000",
      img: steyk,
    } ,

    {
      name: "Сыр жаренный",
      price: "35 000",
      img: jarniy,
    } ,


    {
      name: "Салат Цезарь с мясом",
      price: "45 000",
      img: last,
    } ,


    {
      name: "Фирменный салат Зейтун",
      price: "47 000",
      img: zeytun7,
    } ,



    {
      name: "Соленья ассорти",
      price: "25 000",
      img: sol,
    } 

  ],
  "1-чи овқат": [
    {
      name: "Крем-суп Эзогелин",
      price: "37 000",
      img: soup1,
    },
    {
      name: "Крем-суп Мерджимек",
      price: "33 000",
      img: soup2,
    },
    {
      name: "Домашние пельмешки",
      price: "32 000",
      img: soup3,
    },

     {
      name: "Фирменный суп",
      price: "36 000",
      img: soup5,
    },


    {
      name: "Тушёный суп",
      price: "42 000",
      img: soup6,
    },

    {
      name: "Мастава",
      price: "32 000",
      img: soup7,
    },
    {
      name: "Борщ украинский",
      price: "32 000",
      img: soup8,
    },


    {
      name: "крем-суп с гребами",
      price: "45 000",
      img: grib,
    },

    {
      name: "крем-суп тыквенный",
      price: "35 000",
      img: tikvin,
    },

    {
      name: "Суп с языком",
      price: "33 000",
      img: sup,
    },

    {
      name: "Суп с фрикаделька",
      price: "36 000",
      img: frikadelka,
    }





  ],
  


  "2-чи овқат": [
   
    {
      name: "Гуляш",
      price: "50 000",
      img: second1,
    },
   
  ],
 
  Ичимликлар: [
    {
      name: "Moxito",
      price: "40 000",
      img: drink1,
    },
    {
      name: "Ocean",
      price: "40 000",
      img: drink2,
    },
    {
      name: "Klubinka",
      price: "40 000",
      img: drink3,
    },
  ],
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Салат");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Zeytun Menu</h1>
      </header>
      <div className="categories">
        {Object.keys(menu).map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-container">
        {menu[selectedCategory].map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
