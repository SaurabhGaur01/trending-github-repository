import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import handleRetrieveRepoData from '../../thunks/handleRetrieveRepoData';
import '../RepoApp.scss';

const TabHeader = ({ handleChange, value, actionCallRepoApi }) => {
    const [selectedLanguage, changeLanguage] = React.useState('');
    const handleChangeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);
        actionCallRepoApi(selectedLanguage);
    };
    return (
        <AppBar position="static">
        <div className="container-head">
            <div className="tabs">
                <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="Result" id = "tab-1" />
                    <Tab label="Starred" id = "tab-2" />
                </Tabs>
            </div>
            <div className="language-selector">
                <FormControl className="cus-fields">
                    <InputLabel id="label">Language</InputLabel>
                    <Select
                        labelId="language"
                        id="select-language"
                        value={selectedLanguage}
                        onChange={handleChangeLanguage}
                    >
                        <MenuItem value='Java'>Java</MenuItem>
                        <MenuItem value='C++'>C++</MenuItem>
                        <MenuItem value='Javascript'>Javascript</MenuItem>
                        <MenuItem value='Python'>Python</MenuItem>
                    </Select>
                </FormControl>    
            </div>
        </div>    
        </AppBar>
    )
}

TabHeader.propTypes = {
    handleChange: PropTypes.func.isRequired,
    actionCallRepoApi: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
}

const mapDispatchAsProps = dispatch => {
    return {
        actionCallRepoApi: (value) => dispatch(handleRetrieveRepoData(value)),
    };
}

const hocChain = compose(
    connect(null, mapDispatchAsProps),
);

export { TabHeader as TestableTabHeader };

export default hocChain(TabHeader);