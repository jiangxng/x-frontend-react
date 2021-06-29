import React, { Component } from "react";
import $ from 'jquery';

class App extends Component {
    state = {
        services: [],
        plans: []
    };

    componentDidMount() {
        $.get({
            url: 'http://localhost:1337/backend/getAllPlans',
            dataType: "jsonp", 
            success: function (result) {
                this.setState(result);
            }.bind(this)
        });
    }

    render() {
        return (
            <main className="container">
                <div className="container-body">
                    <div className="sevice-table-head"><span className="service-name"></span>{this.formatPlanHeadText()}</div>
                    {this.state.services.map((srv, i) => {
                        return <div className="sevice-table-row"><span className="service-name">{srv.name}</span> {this.formatPlanIcon(srv.name)}</div>
                    })}
                    <div className="sevice-table-foot"><span className="service-name"></span>{this.formatPlanFootText()}</div>
                </div>
            </main>
        );
    }
    formatPlanFootText() {
        return this.state.plans.map(plan => {
            return <span className="plan-price"><label><input type="radio" name='plan'></input>HK${plan.price}<span className='billing-unit'>/Month</span></label></span>;
        })
    }
    formatPlanHeadText() {
        return this.state.plans.map(plan => {
            return <span className="plan-name">{plan.name}</span>;
        })
    };
    formatPlanIcon(service) {
        return this.state.plans.map(plan => {
            return <span className={this.formatClassName(plan, service)}></span>
        })
    };

    formatClassName(plan, service) {
        return 'icon icon-' + plan.values.includes(service);
    }
}

export default App;
