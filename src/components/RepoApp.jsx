import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Content from './Content/Content';
import handleRetrieveRepoData from '../thunks/handleRetrieveRepoData';

class RepoApp extends React.Component{
    componentDidMount(){
        const { actionCallRepoApi } = this.props;
        actionCallRepoApi();
    }

    render(){
        return (
            <React.Fragment>
                <Content />
            </React.Fragment>    
        )
    }
}

RepoApp.propTypes = {
    actionCallRepoApi: PropTypes.func.isRequired,
};

const mapDispatchAsProps = dispatch => {
    return {
        actionCallRepoApi: () => dispatch(handleRetrieveRepoData()),
    };
}

const hocChain = compose(
    connect(null, mapDispatchAsProps),
);

export { RepoApp as TestableRepoApp };

export default hocChain(RepoApp);