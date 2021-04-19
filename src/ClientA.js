
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  ClientB from './ClientB';
import Simplifi from './Simplifi';
import './ClientA.css';
import {useState,useEffect} from 'react';
const ClientA = () =>{

let data = 
 [
    {
       "id":28185502,
       "client_id":10586977,
       "name":"Fixed Fee Project",
       "code":"SAMPLE",
       "active":true,
       "bill_by":"People",
       "budget":null,
       "budget_by":"project_cost",
       "notify_when_over_budget":false,
       "over_budget_notification_percentage":80.0,
       "over_budget_notified_at":null,
       "show_budget_to_all":false,
       "created_at":"2021-03-22T04:56:59Z",
       "updated_at":"2021-03-22T04:57:02Z",
       "starts_on":null,
       "ends_on":null,
       "estimate":null,
       "estimate_by":"project_cost",
       "is_fixed_fee":true,
       "billable":true,
       "hint_earliest_record_at":"2021-02-22",
       "hint_latest_record_at":"2021-04-19",
       "notes":"Fixed fee projects bill at a set price, no matter how many hours are worked. For instance, you and your client may agree that building a website will cost $5,000 regardless of how much time it takes for you and your team to complete it.",
       "fee":19380.0,
       "hourly_rate":null,
       "cost_budget":19380.0,
       "cost_budget_include_expenses":true,
       "client_name":"[SAMPLE] Client A",
       "client_currency_code":"USD",
       "can_view_billable":true,
       "can_view_cost":true,
       "project_type_label":"Fixed Fee",
       "budget_is_monthly":false,
       "linked_to_forecast":false,
       "budget_spent":180.28,
       "budget_spent_percentage":null,
       "budget_left":null,
       "budget_left_percentage":null,
       "budget_graph_percentage":null,
       "over_budget":null,
       "money_budget":19380.0,
       "money_budget_spent":15612.25,
       "money_budget_spent_percentage":80.55856553147575,
       "money_budget_left":3767.75,
       "money_budget_left_percentage":19.441434468524253,
       "money_budget_graph_percentage":80.55856553147575,
       "over_money_budget":false,
       "internal_cost":7343.2,
       "expense_total":171.0,
       "pinned":false,
       "total_cost":7514.2
    },
    {
       "id":28185505,
       "client_id":10586977,
       "name":"Non-Billable Project",
       "code":"SAMPLE",
       "active":true,
       "bill_by":"none",
       "budget":110.0,
       "budget_by":"project",
       "notify_when_over_budget":false,
       "over_budget_notification_percentage":80.0,
       "over_budget_notified_at":null,
       "show_budget_to_all":false,
       "created_at":"2021-03-22T04:57:00Z",
       "updated_at":"2021-03-22T04:57:02Z",
       "starts_on":null,
       "ends_on":null,
       "estimate":110.0,
       "estimate_by":"project",
       "is_fixed_fee":false,
       "billable":false,
       "hint_earliest_record_at":"2021-02-22",
       "hint_latest_record_at":"2021-04-20",
       "notes":"Non-billable projects are perfect for tracking time you don’t want to invoice for. You can use them to track internal projects, vacation/sick time, or pro bono work.",
       "hourly_rate":null,
       "cost_budget":null,
       "cost_budget_include_expenses":false,
       "client_name":"[SAMPLE] Client A",
       "client_currency_code":"USD",
       "can_view_billable":true,
       "can_view_cost":true,
       "project_type_label":"Non-Billable",
       "budget_is_monthly":false,
       "linked_to_forecast":false,
       "budget_spent":136.58,
       "budget_spent_percentage":124.16,
       "budget_left":-26.58,
       "budget_left_percentage":-24.16,
       "budget_graph_percentage":19.461121686923416,
       "over_budget":true,
       "money_budget":null,
       "money_budget_spent":0.0,
       "money_budget_spent_percentage":null,
       "money_budget_left":null,
       "money_budget_left_percentage":null,
       "money_budget_graph_percentage":null,
       "over_money_budget":null,
       "internal_cost":4783.2,
       "expense_total":315.0,
       "pinned":false,
       "total_cost":5098.2
    },
    {
       "id":28185504,
       "client_id":10586978,
       "name":"Monthly Retainer",
       "code":"SAMPLE",
       "active":true,
       "bill_by":"People",
       "budget":null,
       "budget_by":"project_cost",
       "notify_when_over_budget":false,
       "over_budget_notification_percentage":80.0,
       "over_budget_notified_at":null,
       "show_budget_to_all":false,
       "created_at":"2021-03-22T04:57:00Z",
       "updated_at":"2021-03-22T04:57:02Z",
       "starts_on":null,
       "ends_on":null,
       "estimate":null,
       "estimate_by":"project_cost",
       "is_fixed_fee":false,
       "billable":true,
       "hint_earliest_record_at":"2021-02-22",
       "hint_latest_record_at":"2021-04-21",
       "notes":"This project is set up so that its budget resets monthly. This is great for ongoing projects that charge a predetermined amount every month, like retainer agreements.",
       "hourly_rate":null,
       "cost_budget":4220.0,
       "cost_budget_include_expenses":false,
       "client_name":"[SAMPLE] Client B",
       "client_currency_code":"USD",
       "can_view_billable":true,
       "can_view_cost":true,
       "project_type_label":"Time & Materials",
       "budget_is_monthly":true,
       "linked_to_forecast":false,
       "budget_spent":23.15,
       "budget_spent_percentage":null,
       "budget_left":null,
       "budget_left_percentage":null,
       "budget_graph_percentage":null,
       "over_budget":null,
       "money_budget":4220.0,
       "money_budget_spent":0.0,
       "money_budget_spent_percentage":0.0,
       "money_budget_left":4220.0,
       "money_budget_left_percentage":100.0,
       "money_budget_graph_percentage":0.0,
       "over_money_budget":false,
       "internal_cost":8012.8,
       "expense_total":54.0,
       "pinned":false,
       "total_cost":8066.8
    },
    {
       "id":28185503,
       "client_id":10586978,
       "name":"Time & Materials Project",
       "code":"SAMPLE",
       "active":true,
       "bill_by":"People",
       "budget":154.0,
       "budget_by":"person",
       "notify_when_over_budget":false,
       "over_budget_notification_percentage":80.0,
       "over_budget_notified_at":null,
       "show_budget_to_all":false,
       "created_at":"2021-03-22T04:56:59Z",
       "updated_at":"2021-03-22T04:56:59Z",
       "starts_on":null,
       "ends_on":null,
       "estimate":154.0,
       "estimate_by":"person",
       "is_fixed_fee":false,
       "billable":true,
       "hint_earliest_record_at":"2021-02-22",
       "hint_latest_record_at":"2021-03-22",
       "notes":"Time and Materials projects bill by the hour at a specific hourly rate. The more hours you work, the more you charge.",
       "hourly_rate":null,
       "cost_budget":null,
       "cost_budget_include_expenses":false,
       "client_name":"[SAMPLE] Client B",
       "client_currency_code":"USD",
       "can_view_billable":true,
       "can_view_cost":true,
       "project_type_label":"Time & Materials",
       "budget_is_monthly":false,
       "linked_to_forecast":false,
       "budget_spent":171.45,
       "budget_spent_percentage":111.33,
       "budget_left":-17.45,
       "budget_left_percentage":-11.33,
       "budget_graph_percentage":10.177894429862933,
       "over_budget":true,
       "money_budget":null,
       "money_budget_spent":22138.25,
       "money_budget_spent_percentage":null,
       "money_budget_left":null,
       "money_budget_left_percentage":null,
       "money_budget_graph_percentage":null,
       "over_money_budget":null,
       "internal_cost":8291.6,
       "expense_total":170.0,
       "pinned":false,
       "total_cost":8461.6
    },
    {
       "id":28185506,
       "client_id":10586979,
       "name":"nextjs",
       "code":"",
       "active":true,
       "bill_by":"none",
       "budget":null,
       "budget_by":"none",
       "notify_when_over_budget":false,
       "over_budget_notification_percentage":80.0,
       "over_budget_notified_at":null,
       "show_budget_to_all":false,
       "created_at":"2021-03-22T04:57:02Z",
       "updated_at":"2021-03-22T05:18:49Z",
       "starts_on":null,
       "ends_on":null,
       "estimate":null,
       "estimate_by":"none",
       "is_fixed_fee":false,
       "billable":true,
       "hint_earliest_record_at":"2021-03-22",
       "hint_latest_record_at":"2021-04-24",
       "notes":"",
       "hourly_rate":null,
       "cost_budget":null,
       "cost_budget_include_expenses":false,
       "client_name":"Simplifi",
       "client_currency_code":"USD",
       "can_view_billable":true,
       "can_view_cost":true,
       "project_type_label":"Time & Materials",
       "budget_is_monthly":false,
       "linked_to_forecast":false,
       "budget_spent":202.31,
       "budget_spent_percentage":null,
       "budget_left":null,
       "budget_left_percentage":null,
       "budget_graph_percentage":null,
       "over_budget":null,
       "money_budget":null,
       "money_budget_spent":0.0,
       "money_budget_spent_percentage":null,
       "money_budget_left":null,
       "money_budget_left_percentage":null,
       "money_budget_graph_percentage":null,
       "over_money_budget":null,
       "internal_cost":0.0,
       "expense_total":0.0,
       "pinned":false,
       "total_cost":0.0
    }]



	const [market,setMarket] = useState([]);
    const [client,setClient] = useState([]);
		const getMarketData = async () =>{
		try{
			 var clienta = data.filter( element => element. id == "28185502");
 console.log(clienta);

  var clta = data.filter( element => element. id == "28185505");
 console.log(clta);

			setMarket(clienta);
      setClient(clta);
      console.log(client);

      console.log (market);
			
		}
		catch (e){
			console.log (e)
		}
	 };


 useEffect(() => {
			getMarketData();
    
		},[])


	return (
		<>
 <div className="container-fluid">
        
        <div className='row'>
            <div className='col-4'>
                <h3 className='text-uppercase pt-5  ml-5 pl-5 glow' id='glow'><strong> Table data </strong></h3>
            </div>
        </div>

        <div id="page-wrapper" className='container px-0'>
            <div className="header">
                <h1 className="page-header text-center mb-4" id='hdnam'>
                    <strong>CLIENT - MARKET - TABLES</strong>
                </h1>
                <ul className="breadcrumb">
                    <li><a href="index.php">Home</a></li>
                    <li>TableData</li>
                </ul>
            </div>
            <div id="page-inner">
                
                                        <div className="row no-gutters">
                                            <div className="col-12">
                                                <div className="card">

                                                    <br/>
                                                    <div className=" card-body--">

                                                        <table id="clientA" className=" table  table-hover  table-responsive-sm "
                                                            style= {{width:'100%'}}>
                                                            <thead className="table-secondary text-dark">
                                                                <tr>

                                                                    <th  style= {{width:'40%'}}><u>[SAMPLE] CLIENT A</u></th>
                                                                    <th style= {{width:'15%'}}>Budget</th>
                                                                      <th style= {{width:'15%'}}>Spent</th>
                                                                      <th style= {{width:'15%'}}>Remaining </th>
                                                                      <th style= {{width:'15%'}}>Costs </th>



                                                                </tr>

                                                            </thead>

                                                              <tbody >
                            {market.map(item => (
                                <tr  className="">
                                    
                                    <td>[SAMPLE] {item.name}</td>
                                    <td>${item.cost_budget.toFixed(2)}</td>
                                    <td > ${item.budget_spent.toFixed(2)} </td>
                                <td>{item.money_budget_left_percentage.toFixed(0)}%</td>
                                 <td  > ${item.total_cost.toFixed(2)} </td>
            
                  </tr>      
                              ))}
        
        </tbody>
          <tbody >
                            {client.map(item => (
                                <tr  className="">
                                    
                                    <td>[SAMPLE] {item.name}</td>
                                    <td>{item.budget.toFixed(2)}</td>
                                    <td> {item.budget_spent.toFixed(2)} </td>
                                <td>{item.budget_left_percentage.toFixed(0)}%</td>
                                 <td  > ${item.total_cost.toFixed(2)} </td>
            
                  </tr>      
                              ))}
        
        </tbody>


                                                        </table>


                                                        <ClientB/>
                                                        <Simplifi/>
                                                     
                                             
                                           </div>
                                            </div>
                                             </div>
                                              </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </>


		)
};

export default ClientA;