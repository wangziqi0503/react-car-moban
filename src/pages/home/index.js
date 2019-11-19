import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import List from './components/List';
import{
    HomeWrapper,
    BackTop
} from './style';

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    render(){
        return (
            <HomeWrapper>
                <p className="titletop">This is Demo</p>
                <List />
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch( actionCreators.getHomeInfo())
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 100) {
            dispatch( actionCreators.toggleTopShow(true))
        }else {
            dispatch( actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home);
