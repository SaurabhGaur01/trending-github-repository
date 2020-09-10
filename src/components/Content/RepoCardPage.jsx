import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import RingLoader from "react-spinners/RingLoader";
import { loaderClass, loaderSize, loaderColor } from '../../constants/loaderClass';
import RepoCardContent from "./RepoCardContent";
import { API_CALL_STATUS_LOADING, API_CALL_STATUS_SUCCESS } from '../../constants/status';

const RepoCardPage = ({ repoData, apiCallStatus }) => (
    <div className="main-card">
        <RingLoader
            css={loaderClass}
            size={loaderSize}
            color={loaderColor}
            loading={apiCallStatus === API_CALL_STATUS_LOADING ? true: false}
        />  
        {
            apiCallStatus === API_CALL_STATUS_SUCCESS && repoData.map((repository) => {
                return <RepoCardContent repository={repository} key={repository.id} />;
            })
        }
    </div>    
);

RepoCardPage.propTypes = {
    apiCallStatus: PropTypes.string.isRequired,
    repoData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        html_url: PropTypes.string,
        stargazers_count: PropTypes.number,
    })).isRequired,
};

export const mapStateToProps = state => ({
    repoData: state.repoData,
    apiCallStatus: state.apiCallStatus,
});

const hocChain = compose(
    connect(mapStateToProps),
);

export { RepoCardPage as TestableRepoCardPage };
  
export default hocChain(RepoCardPage);