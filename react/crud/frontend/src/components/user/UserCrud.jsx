import React, {Component} from "react";
import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users Registration: Insert, List, Update & Delete'
}

export default class UserCrud extends Component {
    render () {
        return (
            <Main {...headerProps}>
                Registration of Users
            </Main>
        )
    }
}