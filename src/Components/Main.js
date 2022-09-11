import React, { Component } from "react";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { Route, Link } from 'react-router-dom'
import Single from "./Single";

class Main extends Component{
    componentDidMount() {
        this.props.startLoadingPost()
        this.props.startLoadingComments()
    }        
    render() {
        console.log(this.props)
        return <div>
            <h1>
                <Link to="/">Photowall</Link>
            </h1>
            <Route exact path="/" render={() => (
                <div>
                    <Photowall {...this.props} />
                </div>
            ) } />
            <Route path="/AddPhoto" render={() => (<AddPhoto {...this.props} />)} /> 
            <Route path="/single/:id" render={(params) => (
                <Single {...this.props}  {...params} />
            )}/>
    </div>

    }
}
export default Main