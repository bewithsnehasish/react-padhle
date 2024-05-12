import React, { Component } from "react";
import ReactDOM from "react-dom/client";


/**
             Header
                - Logo 
                - Nav Items(Right Side)
                - Cart 
             Body
                - Search bar 
                - Restraunt list
                    - Restraunt Card * many cards
                        - Image 
                        - Name
                        - Rating 
                        - Cusinies
            Footer
                - Links 
                - Copyrights
*/


const Title = () => (
    <a href="/">
            <img alt="logo" className="logo" src="https://foodvilla.no/src/img/logo.png"/>
    </a>
)
const Header =() =>{
    return (
        <div className="header">
            <Title />
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
} ;


// Config Driven UI

const Config = [
    {
        type: "carousel",
        cards: [
            {
                offerName : "50% Off"
            },
            {
                offerName : "No Delivery Charges"
            }
        ]
    },
    {
        type: "restaurant",
        cards: [
            {
                offerName : "50% Off"
            },
            {
                offerName : "No Delivery Charges"
            }
        ]
    }
]



const restaurantList = [
    {
        "info": {
          "id": "691805",
          "name": "UBQ by Barbeque Nation",
          "cloudinaryImageId": "0d36ee943be5611d610ec9864b1bcf51",
          "locality": "Kamla Palace",
          "areaName": "GMS Road",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Barbecue",
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "10804",
          "avgRatingString": "4.1",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-05-12 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Thali.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Thali.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-kamla-palace-gms-road-dehradun-691805",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "413821",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Saharanpur Road",
          "areaName": "Majra",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4.1,
          "parentId": "721",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-05-12 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-saharanpur-road-majra-dehradun-413821",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "671902",
          "name": "Wow! Momo",
          "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
          "locality": "Hathibarkala Salwala",
          "areaName": "Hathibarkala",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Tibetan",
            "Healthy Food",
            "Asian",
            "Chinese",
            "Snacks",
            "Continental",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "1776",
          "avgRatingString": "4.2",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 9.6,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "9.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-05-12 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/wow-momo-salwala-hathibarkala-dehradun-671902",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "691804",
          "name": "Barbeque Nation",
          "cloudinaryImageId": "5b76e27960b44cce42f6b192a6ea2ce2",
          "locality": "Kamla Palace",
          "areaName": "GMS Road",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "North Indian",
            "Barbecue",
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Desserts"
          ],
          "avgRating": 3.9,
          "parentId": "2438",
          "avgRatingString": "3.9",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-05-12 23:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/barbeque-nation-kamla-palace-gms-road-dehradun-691804",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "69447",
          "name": "Gaylord Express",
          "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
          "locality": "Paltan Bazar",
          "areaName": "Paltan Bazaar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Bakery",
            "Chinese",
            "North Indian",
            "Beverages"
          ],
          "avgRating": 3.8,
          "parentId": "13696",
          "avgRatingString": "3.8",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 6.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-05-19 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/gaylord-express-paltan-bazar-paltan-bazaar-dehradun-69447",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "657142",
          "name": "Punjabi Angithi (Delhi Wale)",
          "cloudinaryImageId": "0a59d45ca92d85e5f63f5bc79f3dbb33",
          "locality": "Rajpur Road",
          "areaName": "Hathibarkala",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Punjabi",
            "Kebabs",
            "Tandoor"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "471145",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 9.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "9.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-05-13 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Thali.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Thali.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/punjabi-angithi-delhi-wale-rajpur-road-hathibarkala-dehradun-657142",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "69500",
          "name": "Rajdhani Chicken Point",
          "cloudinaryImageId": "jkkhgvwcjvpfheq8ftbv",
          "locality": "Race Course",
          "areaName": "Gandhi Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Mughlai",
            "North Indian"
          ],
          "avgRating": 4.2,
          "parentId": "13692",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 6.4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "6.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-05-12 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/rajdhani-chicken-point-race-course-gandhi-road-dehradun-69500",
          "type": "WEBLINK"
        }
      }
]


const RestrauntCard = ({restaurant}) => {
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.info?.cloudinaryImageId}/>
            <h2>{restaurant.info?.name}</h2>
            <h3>{restaurant.info?.cuisines?.join(", ")}</h3>
            <h4>{restaurant.info?.avgRating} Stars</h4>
            <p>{restaurant.info?.locality}</p>
        </div>
    )
}
// Another way to make the RestaurantCard using the React JSX component
const RestrauntCardExample2 = ({restaurant}) => {
    const {name, cloudinaryImageId, lastMileTravelString} = restaurant.info;
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating} Stars</h4>
            <p>{locality}</p>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="restaurant-list">
            <RestrauntCard restaurant= {restaurantList[0]}/> 
            <RestrauntCard restaurant= {restaurantList[1]}/> 
            <RestrauntCard restaurant= {restaurantList[2]}/> 
            <RestrauntCard restaurant= {restaurantList[3]}/> 
            <RestrauntCard restaurant= {restaurantList[4]}/> 
            <RestrauntCard restaurant= {restaurantList[5]}/> 
            <RestrauntCard restaurant= {restaurantList[6]}/> 
        </div>

    )
}

const Footer = () =>{
    return(
        <h3>Footer</h3>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

// How to  give inline styling in react 
const stylobj = {
    backgroundColor: "red",
    color: "white",
}
const jsx = (
    // another way to give  inline styling in react
    // <div
    // style = {StyleObj}>
    //     <h1>JSx</h1>
    // <h1>Second JSX</h1>
    // </div>
    <div
    style={{
        backgroundColor: "red",
        color: "white",
    }}>
    <h1>JSx</h1>
    <h1>Second JSX</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);