import Main from './Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments

    }
}

function mapDisptchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}

const App = withRouter(connect(mapStateToProps,mapDisptchToProps)(Main))

export default App