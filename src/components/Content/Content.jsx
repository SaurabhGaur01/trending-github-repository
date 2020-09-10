import React from 'react';
import TabPanel from '../Tabs/TabPanel';
import TabHeader from '../Tabs/TabHeader';
import RepoCardPage from './RepoCardPage';
import StarredCardPage from './StarredCardPage';
import '../RepoApp.scss';

const Content = () => {
  const [tabValue, setTabValue] = React.useState(0);
  return (
    <React.Fragment>
      <TabHeader value={tabValue} handleChange={(event, newValue)=>{setTabValue(newValue)}} />
      <TabPanel value={tabValue} index={0}>
          <RepoCardPage />  
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
          <StarredCardPage />
      </TabPanel>
    </React.Fragment>
  );
}

export default Content;