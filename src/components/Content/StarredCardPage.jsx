import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import Rating from '@material-ui/lab/Rating';
import '../RepoApp.scss';

const StarredCardPage = ({ starredData }) => (
    <div className="main-card">
        { starredData.length > 0 && starredData.map(
            ({
                id,
                name,
                description,
                html_url,
                stargazers_count,
            })=>{   
                return (
                    <Card className="card-container" key={id}>
                        <CardContent>
                            <Rating
                                name={`rating-card-${id}`}
                                max={1}
                                value={1}
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
            }    
        )}
    </div>
);

StarredCardPage.propTypes = {
    starredData:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        html_url: PropTypes.string,
        stargazers_count: PropTypes.number,
    })).isRequired,
};

const mapStateToProps = state => ({
    starredData: state.starredData,
});

const hocChain = compose(
    connect(mapStateToProps),
);

export { StarredCardPage as TestableStarredCardPage };
  
export default hocChain(StarredCardPage);