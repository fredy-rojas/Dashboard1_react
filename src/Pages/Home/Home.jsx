import FeaturedInfo from "../../componets/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import Chart from "../../componets/Chart/chart"
import {userData} from "../../dummyData"
import WidgetSm from "../../componets/widgetSm/WidgetSm";
import WidgetLg from "../../componets/WidgetLg/WidgetLg";

export default function Home() {
    return (

        <div className="Home">
            <FeaturedInfo/>
            <Chart title="User Analytics" data= { userData } grid dataKey="Active User"/>

            
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>  
        
        </div>


    );
}

