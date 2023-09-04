import React from "react";
import  ReactDOM  from "react-dom";

const styleCard = {
  backgroundColor: "#f0f0f0",
}

const Header = () => {
  return (<div className="header">
    <div className="logo-container">
      <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYEgU0yAmbbLiMQFPq8DEKSp1rnoExipAUg&usqp=CAU" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>)
}

const resList = JSON.parse(`[
  {
    "info": {
      "id": "363",
      "name": "Meghana Foods",
      "cloudinaryImageId": "yfyo8aklppbwdplv7ofp",
      "locality": "Marathahalli",
      "areaName": "Marathahalli",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "363",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4300
      },
      "parentId": "635",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 14,
        "serviceability": "SERVICEABLE",
        "slaString": "14 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-05 01:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
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
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
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
      "context": "seo-data-3eae44f7-501b-4bf2-8c55-2bcd02be83c4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/meghana-foods-marathahalli-bangalore-363",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "564284",
      "name": "Soul Rasa",
      "cloudinaryImageId": "drsmipf17xngxem0o8tg",
      "locality": "Bellandur",
      "areaName": "Mahadevapura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Indian",
        "Healthy Food",
        "Home Food",
        "South Indian",
        "North Indian"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "564284",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6500
      },
      "parentId": "239281",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 7.2,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "7.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-04 23:30:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
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
      "context": "seo-data-3eae44f7-501b-4bf2-8c55-2bcd02be83c4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/soul-rasa-bellandur-mahadevapura-bangalore-564284",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "285473",
      "name": "Kanti Sweets",
      "cloudinaryImageId": "gmifkhrsyh57kroqfqis",
      "locality": "Aswath Nagar",
      "areaName": "Marthahalli",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Sweets"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "285473",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4300
      },
      "parentId": "4700",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-04 22:30:00",
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
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
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
      "context": "seo-data-3eae44f7-501b-4bf2-8c55-2bcd02be83c4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kanti-sweets-aswath-nagar-marthahalli-bangalore-285473",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "580934",
      "name": "Great Indian Khichdi by EatFit",
      "cloudinaryImageId": "0da26e86f4490626665f0b1d8810906e",
      "locality": "Outer Ring Road",
      "areaName": "Kadubeesanahalli",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Home Food",
        "Healthy Food",
        "Snacks"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "580934",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5300
      },
      "parentId": "319582",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-04 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹100",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
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
      "context": "seo-data-3eae44f7-501b-4bf2-8c55-2bcd02be83c4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-outer-ring-road-kadubeesanahalli-bangalore-580934",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "290187",
      "name": "Andhra Gunpowder",
      "cloudinaryImageId": "r3ybrbwebno0gth3cgus",
      "locality": "Silver Spring Layout",
      "areaName": "Marathahalli",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Andhra",
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "290187",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2800
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2800
      },
      "parentId": "10496",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-05 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
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
      "context": "seo-data-3eae44f7-501b-4bf2-8c55-2bcd02be83c4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-silver-spring-layout-marathahalli-bangalore-290187",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "489235",
      "name": "Big Bowl",
      "cloudinaryImageId": "992f217c2f122c0d8fc385855ca30722",
      "locality": "Anand Nagar",
      "areaName": "Marathahalli",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "489235",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2800
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2800
      },
      "parentId": "434792",
      "avgRatingString": "3.8",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-05 02:00:00",
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
        "header": "25% OFF",
        "subHeader": "ABOVE ₹149",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
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
      "context": "seo-data-3eae44f7-501b-4bf2-8c55-2bcd02be83c4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/big-bowl-anand-nagar-marathahalli-bangalore-489235",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "551489",
      "name": "Bakingo",
      "cloudinaryImageId": "ngobyra1jurrng06utu5",
      "locality": "Kaverappa Layout",
      "areaName": "Kadubeesanahalli",
      "costForTwo": "₹299 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "551489",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "3818",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-05 00:00:00",
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
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
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
      "context": "seo-data-3eae44f7-501b-4bf2-8c55-2bcd02be83c4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bakingo-kaverappa-layout-kadubeesanahalli-bangalore-551489",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "636313",
      "name": "The Rameshwaram Cafe",
      "cloudinaryImageId": "0adee855c65fa947a256764a87a55658",
      "locality": "ITPL Main road",
      "areaName": "Brookefield",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "636313",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4000
      },
      "parentId": "384316",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-05 01:00:00",
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
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
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
      "context": "seo-data-3eae44f7-501b-4bf2-8c55-2bcd02be83c4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-rameshwaram-cafe-itpl-main-road-brookefield-bangalore-636313",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "10866",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Munnekolalu Village",
      "areaName": "Marathahalli",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.7,
      "feeDetails": {
        "restaurantId": "10866",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2800
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2800
      },
      "parentId": "721",
      "avgRatingString": "3.7",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-05 01:00:00",
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
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
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
      "context": "seo-data-3eae44f7-501b-4bf2-8c55-2bcd02be83c4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-munnekolalu-village-marathahalli-bangalore-10866",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]`);



const RestaurentCard = (props) => {     //const RestaurentCard = (props) => {      OR     const RestaurentCard = ({ resName, cuisine }) => {           Destructuring on the fly as <h4>{restName}</h4>
  const {resData} = props
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
  const { slaString } = sla;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h4>{name}</h4>         
      <h5>{cuisines.join(', ')}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{costForTwo} </h5>
      <h5>{slaString}</h5>
    </div>
  );
};

//not use keys (not acceptable) <<<<< index as key <<<<< unique id (best practice)
const Body = () => {
  return (<div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {
      resList.map( restaurent => <RestaurentCard key={restaurent.info.id} resData = {restaurent} />)
      }
    </div>
  </div>)
}


const AppLayout = () => {
  return (<div className="app">
    <Header/>
    <Body />
  </div>)
}

  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<AppLayout />);
  