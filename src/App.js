import React, { useState } from "react";
import "./App.css";



//nonushta
import skrembel from './img/skrembel.jpg'
import blinchi from './img/blinchi.jpg'
import awp from './img/awp.jpg'




// 1chi ovqatlar
import soup1 from './img/b1.jpg'
import soup2 from './img/b2.jpg'
import soup3 from './img/b3.jpg'
import soup5 from './img/b4.jpg'
import soup6 from './img/b5.jpg'
import soup7 from './img/b6.jpg'
import soup8 from './img/b7.jpg'




// 2chi ovqatlar 



//ichimliklar 

import one from './img/one.jpg'
import two from './img/two.jpg'
import three from './img/three.jpg'
import four from './img/four.jpg'
import five from './img/five.jpg'
import six from './img/six.jpg'
import seven from './img/seven.jpg'
import eight from './img/eight.jpg'
import nine from './img/nine.jpg'
import ten from './img/ten.jpg'




///salad
import salad1 from './img/salat1.jpg'
import chaban from './img/chaban.jpg'
import salad2 from './img/salat3.jpg'
import salat3 from './img/salat5.jpg'
import salat4 from './img/salat6.jpg'
import murskoy from './img/murskoy.jpg'
import baqalajon from './img/baqalajon.jpg'
import depola from './img/dip.jpg'
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
import vinigret from './img/vinigret.jpg'

/// 1chi ovqat
import grib from './img/grib.jpg'
import tikvin from './img/tikvin.jpg'
import sup from './img/sup.jpg'
import frikadelka from './img/frikadelka.jpg'
import somsa from './img/somsa.jpg'
import mosh from './img/mosh.jpg'
import brizol from './img/brizol.jpg'
import alfiredo from './img/alfiredo.jpg'
import kravet from './img/kravet.jpg'
import frikase from './img/frikase.jpg'
import sach from './img/sach.jpg'
import kur from './img/kur.jpg'
import chaxox from './img/chaxox.jpg'
import chash from './img/chash.jpg'
import kfc from './img/kfc.jpg'
import imbirim from './img/imbirim.jpg'
import kitay from './img/kitay.jpg'
import sliv from './img/laylo.jpg'
import burger from  './img/burger.jpg'
import gov from './img/gov.jpg'
import burgerkfc from './img/burgerkfc.jpg'
import tush8 from './img/tush8.jpg'
import pidey from './img/pidey.jpg'
import ot from './img/ot.jpg'
import slad from './img/slad.jpg'
import kasar from './img/kasar.jpg'
import metro from './img/metro.jpg'
import non from './img/non.jpg'
import laxmat from './img/laxmat.jpg'
import bon from './img/bon.jpg'
import nazik from './img/nazik.jpg'
import lopata from './img/lopata.jpg'
import big from './img/big.jpg'



/// pizza
import besh from './img/besh.jpg'
import pizzaas from './img/pizzaas.jpg'
import grech from './img/grech.jpg'
import dipola from './img/dipola.jpg'


// today 
import shash1 from './img/shash1.jpg'
import box from './img/box.jpg'
import classes from './img/class.jpg'
import jambo from './img/jambo2.jpg'
import medal from './img/medal.jpg'
import koreyka from './img/koreyka.jpg'
import zaytun from './img/zaytun.jpg'
import tibon from './img/tibon.jpg'
import ribay from './img/ribay.jpg'
import shirin from './img/shirin.jpg'
import urfa from './img/urfa.jpg'
import adana from './img/adana.jpg'
import kurin from './img/kurin.jpg'
import hov from './img/hov.jpg'
import mangal from './img/mangal.jpg'
import food7 from './img/food7.jpg'
import food8 from './img/food8.jpg'
import food9 from './img/food9.jpg'
import baliq from './img/baliq.jpg'
import izgara from './img/izgara.jpg'
import assado from './img/assado.jpg'
import bey from './img/bey.jpg'
import sheyka from './img/sheyka.jpg'
import fri from './img/fri.jpg'
import gurunch from './img/gurunch.jpg'
import pure from './img/pure.jpg'
import kartofel from './img/kartofel.jpg'


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
      img: awp,
    },
    {
      name: "Блинчики с мясом",
      price: "8 000",
      img: blinchi,
    },
  ],


  Салат: [
    {
      name: "Греческий",
      price: "37 000",
      img: salad1,
    },
    {
      name: "Чабан салат",
      price: "32 500",
      img: chaban,
    },
    {
      name: "Ачичук",
      price: "20 000",
      img: salad2,
    },

    {
      name: "Французский Салат",
      price: "42 000",
      img: salat3,
    },

    {
      name: "Цезарь с курицей",
      price: "45 000",
      img: salat4,
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
    } ,


    {
      name: "Салат Винегред",
      price: "32 000",
      img: vinigret,
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
    },

    {
      name: "Мош хурда",
      price: "35 000",
      img: mosh,
    },

   
    
  ],
  
  "пизза":[
   
    {
      name: "Пицца Бешбармак  (БОЛ) (мал.)",
      price: "100 000 // 75 0000",
      img: besh,
    },

    {
      name: "Пицца Ассорти (БОЛ.)  (мал.)",
      price: "80 000 // 60 000",
      img: pizzaas,
    },

    {
      name: "Пицца Греческий (Бол.) (Мал.)",
      price: "75 000 // 55 000",
      img: grech,
    },


    {
      name: "Дипола (Бол.) (Мал.)",
      price: "75 000 // 55 0000",
      img: dipola,
    },
    
   
  ],


  "2-чи овқат": [
   
    {
      name: "Сомса с говядиной",
      price: "9 000",
      img: somsa,
    },

    {
      name: "Бризоль",
      price: "52 000",
      img: brizol,
    },


    {
      name: "паста болоньезе",
      price: "56 000",
      img: alfiredo,
    },


    {
      name: "пенне с креветками",
      price: "62 000",
      img: kravet,
    },

    {
      name: "Фрикасе",
      price: "62 000",
      img: frikase,
    },


    {
      name: "Сачтава с говядиной",
      price: "55 000",
      img: sach,
    },


    {
      name: "Сачтава с куриный",
      price: "50 000",
      img: kur,
    },



    {
      name: "Чахохбили С Курицей",
      price: "57 000",
      img: chaxox,
    },


    {
      name: "Грузинский Чашушули",
      price: "61 000",
      img: chash,
    },


    {
      name: "КФС без косточки",
      price: "45 000",
      img: kfc,
    },


    {
      name: "Креветки с имбирем",
      price: "110 000",
      img: imbirim,
    },


    {
      name: "Мясо по китайски",
      price: "57 000",
      img: kitay,
    },


    {
      name: "Бефстроганов на сливки",
      price: "48 000",
      img: sliv,
    },
     
    {
      name: "Бургер с говядиной",
      price: "50 000",
      img: burger,
    },

      
    {
      name: "Бургер гов.вырезка",
      price: "55 000",
      img: gov,
    },


    {
      name: "Бургер КФС",
      price: "55 000",
      img: burgerkfc,
    },

    {
      name: "Тушоное пиде",
      price: "52 000",
      img: tush8,
    },

    {
      name: "Мясное пиде (кушбаши)",
      price: "60 000",
      img: pidey,
    },

    {
      name: "Пиде от шефа",
      price: "70 000",
      img: ot,
    },
    {
      name: "Сладкий пиде ",
      price: "65 000",
      img: slad,
    },

    {
      name: "Касарли пиде",
      price: "42 000",
      img: kasar,
    },

    {
      name: "Метровый пиде",
      price: "125 000",
      img: metro,
    },

    {
      name: "Хлеб ассорти ",
      price: "15 000",
      img: non,
    },


    {
      name: "Лахмаджун ",
      price: "38 000",
      img: laxmat,
    },

    {
      name: "Хлеб авган экмек",
      price: "15 000",
      img: non,
    },

    {
      name : "Али Назик бон филе",
      price: "75 000",
      img: bon,
    },

    {
      name : "Али Назик кебаб",
      price: "60 000",
      img: nazik,
    },

    {
      name : "Баранья лопатка 1 кг",
      price: "170 000 1 кг",
      img: lopata,
    },

    {
      name : "Кавказкий шашлык",
      price: "68 000",
      img: shash1,
    },

    {
      name : "Куриный стейк",
      price: "48 000",
      img: box,
    },

    {
      name : "Классический Стейк",
      price: "110 000",
      img: classes,
    },


    {
      name : "Джамбо х2",
      price: "85 000",
      img: jambo,
    },


    {
      name : "Медальон из говядины",
      price: "92 000",
      img: medal,
    },


    {
      name : "Биг Бол Чиз",
      price: "68 000",
      img: big,
    },

    {
      name : "Корейка с овощами",
      price: "210 000",
      img: koreyka,
    },


    {
      name : "Зайтун стейк",
      price: "120 000",
      img: zaytun,
    },

    {
      name : "Стейк Ти-Бон",
      price: "160 000",
      img: tibon,
    },

    {
      name : "Стейк Рибай",
      price: "180 000",
      img: ribay,
    },
   

    {
      name : "Бон филе ( от- шефа )",
      price: "225 000",
      img: shirin,
    },

    {
      name : "Урфа кебаб",
      price: "50 000",
      img: urfa,
    },

    {
      name : "Урфа кебаб",
      price: "50 000",
      img: urfa,
    },

    {
      name : "Адана кебаб",
      price: "55 000",
      img: adana,
    },

    {
      name : "Куриный шашлык",
      price: "42 000",
      img: kurin,
    },


    {
      name : "Лулья кебаб",
      price: "42 000",
      img: hov,
    },

    {
      name : "Мангал ассорти 8 персон Мангал ассорти 6 персон 460000 Мангал ассорти 4 персон 360000",
      price: "690000 //460000 // 360000",
      img: mangal,
    },


    {
      name : "Шашлык ассорти",
      price: "225 000",
      img: food7,
    },


    {
      name : "Куриные крылышки",
      price: "45 000",
      img: food8,
    },



    {
      name : "Жамбо мини",
      price: "54 000",
      img: food9,
    },

    {
      name : "Ассадо 1 кг",
      price: "170 000",
      img: assado,
    },


    {
      name : "Форель запеченный",
      price: "45 000",
      img: baliq,
    },

    {
      name : "Изгара кофте с сыром  // Изгара кофте ",
      price: "65000 // 55000 ",
      img: izgara,
    },

    {
      name : "Бейти с сыром",
      price: "48000",
      img: bey,
    },

    {
      name : "Баранья шейка",
      price: "290 000",
      img: sheyka,
    },


    {
      name : "картофель фри",
      price: "15 000",
      img: fri,
    },

    {
      name : "Гуруч (рис)",
      price: "15 000",
      img: gurunch,
    },

    {
      name : "Гуруч (рис)",
      price: "15 000",
      img: gurunch,
    },

    {
      name : "Пюре",
      price: "15 000",
      img: pure,
    },

    {
      name : "Айдахо картофель",
      price: "20 000",
      img: kartofel,
    },




  ],
 
  Ичимликлар: [
    {
      name: "Лимонады Клубничный 0,5 лт",
      price: "25 000",
      img: one,
    },
    {
      name: "Лимонад Банан анана 0,5 лт",
      price: "30 000",
      img: two,
    },
    {
      name: "Лимонад  Океан 0,5 лт",
      price: "25 000",
      img: three,
    },



    {
      name: "Айс-ти чай 0.5 лт",
      price: "25 000",
      img: four,
    },


    {
      name: "Лимонад  Тархун 0,5 лт",
      price: "25 000",
      img: five,
    },


    {
      name: "Лимонад Мохито 0.5 лт",
      price: "30 000",
      img: six,
    },
      


    {
      name: "Кофе Капучино",
      price: "25 000",
      img: seven,
    },


    {
      name: "Кофе Американо",
      price: "15 000",
      img: eight,
    },




    {
      name: "Десерт- Айва",
      price: "25 000",
      img: nine,
    },




    {
      name: "Сутлач",
      price: "20 000",
      img: ten,
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
     <div className="nomer">
      <br/>
      <h2>Дастафка учун телефон рақамлар</h2><br/>
      <h3>+998 88 212 10 10</h3>
      <h3>+998 99 212 10 10</h3>
      

     </div>
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
