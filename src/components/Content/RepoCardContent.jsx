import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../RepoApp.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import Rating from '@material-ui/lab/Rating';
import { setStarredData, clearStarredData } from '../../ducks/starredData';

const RepoCardContent = ({ 
    repository, 
    actionSetStarredData, 
    starredData,
    actionClearStarredData 
}) =>{
    const {
        id,
        name,
        description,
        html_url,
        stargazers_count,
      } = repository;
    const [starred, setStarred] = useState({});
    useEffect(() => {
        let isStarred = starredData.find((repo) => repo.id === id);
        isStarred ? setStarred(1) : setStarred(null);
    }, [starredData, id]);

    const handleClick = (event, newValue, id) => {
        setStarred(newValue);
        if (newValue) {
            const selectedStarredData = [...starredData, repository];
            actionSetStarredData(selectedStarredData);
        }else {
            const selectedStarredData = starredData.filter(repo => repo.id !== id);
            actionClearStarredData();
            actionSetStarredData(selectedStarredData);
        }
    }
    
    return (
        <Card className="card-container" key={id}>
            <CardContent>
                <Rating
                    name={`rating-card-${id}`}
                    max={1}
                    onChange={(event, newValue) => handleClick(event, newValue, id)}
                    value={starred ? 1: 0}
                />

                <div className="first-section">
                    <div className="heading-label">{name}</div>
                    <div className="description">{description}</div>
                </div>
                
                <div className="star-count">
                    <hr/>
                        {stargazers_count} stars
                    <hr/> 
                </div>

                <div className="url">
                    <a href={html_url} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon/>Github Repo
                    </a>
                </div>         
            </CardContent>   
        </Card>
    )
};

RepoCardContent.propTypes = {
    actionSetStarredData: PropTypes.func.isRequired,
    actionClearStarredData: PropTypes.func.isRequired,
    starredData:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        html_url: PropTypes.string,
        stargazers_count: PropTypes.number,
    })).isRequired,
    repository: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        html_url: PropTypes.string,
        stargazers_count: PropTypes.number,
    }).isRequired,
};

const mapDispatchAsProps = dispatch => {
    return {
        actionSetStarredData: (value) => dispatch(setStarredData(value)),
        actionClearStarredData: () => dispatch(clearStarredData()),
    };
}

const mapStateToProps = state => ({
    starredData: state.starredData,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { RepoCardContent as TestableRepoCardContent };
  
export default hocChain(RepoCardContent);